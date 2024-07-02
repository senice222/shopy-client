import style from './DeleteAccount.module.scss'
import deleteIcon from '../../../../../assets/deleteIcon.png'
import React, {FC} from "react";
import {useSWRConfig} from "swr";
import {fetcher, url} from "../../../../../core/fetch";
import {notification} from "antd";
import {useTelegram} from "../../../../../hooks/useTelegram";
import {DetailsProps} from "../../../../../interfaces/AccountsProps";


const DeleteAccount:FC<DetailsProps> = ({account, onClose, setIsDelete}) => {
    const {mutate} = useSWRConfig()
    const {id} = useTelegram()

    const handleDelete = () => {
        mutate(`${url}/api/user/account/${id}`, fetcher(`${url}/api/user/account/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: account.id })
        }));
        onClose()
        notification.success({
            message: "Вы успешно удалили аккаунт",
            duration: 2
        })
    }

    return (
        <div className={style.deleteAccount}>
            <div className={style.header}>
                <img src={deleteIcon} alt={"/"}/>
                <svg
                    onClick={() => {
                        onClose()
                        setTimeout(() => {
                            setIsDelete(false);
                        }, 300);
                    }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{cursor: 'pointer'}}
                >
                    <path
                        d="M18 6L6 18M6 6L18 18"
                        stroke="#98A2B3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div className={style.deleteText}>
                <h2>Удалить данные аккаунта Spotify?</h2>
                <p>Вы уверены, что хотите удалить данные от аккаунта? </p>
                <div className={style.btnWrapp}>
                    <button className={style.deleteBtn} onClick={handleDelete}>Удалить</button>
                    <button className={style.cancelBtn} onClick={() => {
                        setIsDelete(false)
                    }}>Отмена</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteAccount;
