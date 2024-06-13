import style from './EditAccountModal.module.scss'
import BootstrapModal from "../../BootstrapModal/BootstrapModal";
import {FC, useState} from "react";
import {Input} from "antd";
import BlueButton from "../../../Button/Button";
import spotify from '../../../../assets/spotify48x48.png'
import lock from "../../../../assets/lock-02.png";
import copy from "../../../../assets/copy-01.png";

interface EditAccountModal {
    active: boolean;
    onClose: () => void;
}


const EditAccountModal: FC<EditAccountModal> = ({active, onClose}) => {
    const [emailInput, setEmailInput] = useState<string>('olivia@mshopy.ru');

    return (
        <BootstrapModal active={active} onClose={onClose}>
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
                        <Input className={style.input} value={emailInput} placeholder="olivia@mshopy.ru" readOnly/>
                        <div>
                            <img src={copy} alt={'/'}/>
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
                    <button className={style.whiteBtn}>Изменить</button>
                    <h2 className={style.deleteBtn}>Удалить данные из бота</h2>
                </div>
            </div>
        </BootstrapModal>
    );
};

export default EditAccountModal;
