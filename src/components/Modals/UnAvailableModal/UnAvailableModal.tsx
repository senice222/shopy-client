import style from './UnAvailableModal.module.scss'
import React, {Dispatch, FC, SetStateAction} from "react";
import {Warning} from "../../Svgs/Svgs";
import BootstrapModal from "../BootstrapModal/BootstrapModal";
import BlueButton from "../../Button/Button";
import {feedbackManager} from "../../../utils/feedbackManager";

const UnAvailableModal: FC<{
    active: boolean, setOpen: Dispatch<SetStateAction<boolean>>
}> = ({active, setOpen}) => {

    return (
        <BootstrapModal modalHeight={"260px"} active={active} onClose={() => setOpen(false)}>
            <div className={style.deleteAccount}>
                <div className={style.header}>
                    <Warning />
                    <svg
                        onClick={() => setOpen(false)}
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
                    <div>
                        <h2>Удалить данные аккаунта Spotify?</h2>
                        <p>Вы уверены, что хотите удалить данные от аккаунта? </p>
                    </div>
                    <div className={style.btnWrapp} onClick={feedbackManager}>
                        <BlueButton text={"Написать менеджеру"} height={"44px"} width={"100%"} />
                    </div>
                </div>
            </div>
        </BootstrapModal>
    );
};

export default UnAvailableModal;
