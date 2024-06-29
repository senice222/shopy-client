import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import style from "../EditAccountModal.module.scss";
import spotify from "../../../../../assets/spotify48x48.png";
import lock from "../../../../../assets/lock-02.png";
import {Input, message} from "antd";
import copy from "../../../../../assets/copy-01.png";
import BlueButton from "../../../../Button/Button";
import {EditAccountModalProps} from "../EditAccountModal";

interface DetailesProps extends EditAccountModalProps {
    email: string;
    setIsDelete: Dispatch<SetStateAction<boolean>>;
    setIsEdit: Dispatch<SetStateAction<boolean>>;
}

const AccountsDetailes: FC<DetailesProps> = ({setIsEdit, onClose, email, setIsDelete}) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopied(true);
                message.success({
                    type: "success",
                    content: 'Успешно скопировано',
                    style: {color: "#52c41a"}
                })
                setTimeout(() => setCopied(false), 2000); // Убираем сообщение через 2 секунды
            })
            .catch(err => {
                message.error('Ошибка при копировании');
                console.error('Ошибка при копировании: ', err);
            });
    };

    return (
        <>
            <div className={style.modalWinPopupHead}>
                <img src={spotify} alt="/"/>
                <svg
                    onClick={onClose}
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
            <div className={style.form}>
                <div className={style.dataCont}>
                    <h2>Данные аккаунта Spotify</h2>
                    <div className={style.security}>
                        <img src={lock} alt="/"/>
                        <p>Все данные надёжно защищены</p>
                    </div>
                </div>
                <div className={style.item}>
                    <p className={style.title}>Почта</p>
                    <div>
                        <Input className={style.input} value={email} placeholder="olivia@mshopy.ru" readOnly/>
                        <div onClick={copyToClipboard} className="copy-icon">
                            <img src={copy} alt="Копировать" />
                        </div>
                    </div>
                </div>
                <div className={style.item}>
                    <p className={style.title}>Пароль</p>
                    <div>
                        <Input className={style.input} value={"****"} readOnly/>
                        <img src={copy} alt={'/'}/>
                    </div>
                </div>
                <div className={style.btnDiv}>
                    <BlueButton text={"Продлить подписку"} height={"44px"} width={"100%"}/>
                    <button className={style.whiteBtn} onClick={() => setIsEdit(true)}>Изменить</button>
                    <h2 className={style.deleteBtn} onClick={() => setIsDelete(true)}>Удалить данные из бота</h2>
                </div>
            </div>
        </>
    );
};

export default AccountsDetailes;
