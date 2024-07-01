import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import style from "../EditAccountModal.module.scss";
import spotify from "../../../../../assets/spotify48x48.png";
import lock from "../../../../../assets/lock-02.png";
import {Input, message} from "antd";
import copy from "../../../../../assets/copy-01.png";
import BlueButton from "../../../../Button/Button";
import {EditAccountModalProps} from "../EditAccountModal";
import BootstrapModal from "../../../BootstrapModal/BootstrapModal";

interface DetailesProps {
    setIsDelete: Dispatch<SetStateAction<boolean>>;
    setIsEdit: Dispatch<SetStateAction<boolean>>;
    onClose: () => void;
    editAccount: boolean;
    account: {
        id: string;
        service: string;
        email: string;
        password: string;
        image: string;
    }
}

const AccountsDetailes: FC<DetailesProps> = ({account, setIsEdit, onClose, setIsDelete}) => {
    const [copied, setCopied] = useState(false);

    const renderPasswordMask = (password: string) => {
        return '*'.repeat(password.length);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                message.success({
                    type: "success",
                    content: 'Успешно скопировано',
                    style: {color: "#52c41a"}
                })
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                message.error('Ошибка при копировании');
                console.error('Ошибка при копировании: ', err);
            });
    };

    return (
        <>
            <div className={style.modalWinPopupHead}>
                <img src={account.image} alt="/"/>
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
                    <h2>Данные аккаунта {account.service}</h2>
                    <div className={style.security}>
                        <img src={lock} alt="/"/>
                        <p className={style.securityP}>Все данные надёжно защищены</p>
                    </div>
                </div>
                <div className={style.item}>
                    <p className={style.title}>Почта</p>
                    <div>
                        <Input className={style.input} value={account.email} placeholder={account.email} readOnly/>
                        <div onClick={() => copyToClipboard(account.email ? account.email : "")} className="copy-icon">
                            <img src={copy} alt="Копировать" />
                        </div>
                    </div>
                </div>
                <div className={style.item}>
                    <p className={style.title}>Пароль</p>
                    <div>
                        <Input className={style.input} value={account.password ? renderPasswordMask(account.password) : ''} readOnly/>
                        <img onClick={() => copyToClipboard(account.password ? account.password : "")} src={copy} alt={'/'}/>
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
