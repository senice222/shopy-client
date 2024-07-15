import React, {createContext, FC, useContext, useState} from 'react';
import useSWR from 'swr';
import {fetcher, url} from "../core/fetch";
import {useTelegram} from "../hooks/useTelegram";
import {Children} from "../interfaces/Layout";

const UserContext = createContext(null);

export const UserProvider:FC<Children> = ({ children }) => {
    const {id} = useTelegram()
    const { data } = useSWR(`${url}/api/user/${id}`, fetcher);

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
};

export const useCurrentUser = () => useContext(UserContext);
