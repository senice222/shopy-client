import {createContext, FC, useContext} from 'react';
import useSWR from 'swr';
import {fetcher, url} from "../core/fetch";
import {useTelegram} from "../hooks/useTelegram";
import {Children} from "../interfaces/Layout";
import { User } from '../interfaces/User';

const UserContext = createContext<User | null>(null);

export const UserProvider:FC<Children> = ({ children }) => {
    const {id} = useTelegram()
    const { data } = useSWR(`${url}/api/user/878990615`, fetcher);

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
};

export const useCurrentUser = () => useContext(UserContext);
