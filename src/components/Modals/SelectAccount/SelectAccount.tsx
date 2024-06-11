import '../PromoModal/PromoModal.scss'
import {ChangeEvent, FC, useState} from "react";
import BootstrapModal from "../BootstrapModal/BootstrapModal";
import {RequestSent} from "../RequestSent/RequestSent";
import s from './SelectAccount.module.scss'
import {Spotify} from "../../../pages/SubscribeActivate/Svgs";
import {AccountSelect} from "../../AccountSelect_Select/AccountSelect";


export interface SelectAccountI {
    promoActive: boolean,
    onClose: () => void,
}
const accounts = [
    {
        img: <Spotify />,
        name: 'Spotify',
        email: "iror200895@gmail.com"
    },
    {
        img: <Spotify />,
        name: 'Spotify',
        email: "spotifyuser1@example.com"
    },
    {
        img: <Spotify />,
        name: 'Spotify',
        email: "spotifyuser2@example.com"
    },
    {
        img: <Spotify />,
        name: 'Spotify',
        email: "spotifyuser3@example.com"
    }
];
export const SelectAccount: FC<SelectAccountI> = ({promoActive, onClose}) => {

    const [errorStatus, setErrorStatus] = useState(false);
    const [isModal, setModal] = useState(false)
    const [selected, setSelected] = useState('')

    const checkingPromo = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // setPromoInputValue(value);
        // Пример проверки промокода
        setErrorStatus(value !== '123'); // Замените 'VALID_PROMO_CODE' на ваш валидный промокод
    };

    const setConfirmDialog = () => {
        if (!errorStatus) {
            setModal(true)
        }
    };

    return (
        <>

            {/*<RequestSent  isOpen={isModal} onClose={() => setModal((prev: boolean) => !prev)} switchDialog={onClose} type={'promo'} />*/}
            <BootstrapModal active={promoActive} onClose={onClose}>
                <div className="modal-win__popup-head" style={{alignItems: 'flex-start'}}>
                    <div className={s.titleDiv}>
                        <h2 className={s.title}>Выберите аккаунт</h2>
                        <p>Выберите сохранненый аккаунт из вашего профиля.</p>
                    </div>
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
                <AccountSelect items={accounts} setSelected={setSelected} />
                {/*{errorStatus ? <span style={{color: 'red', marginTop: '5px'}}>*/}
                {/*      Такого промокода не существует*/}
                {/*    </span> : null}*/}
                <button
                    className="blue-btn"
                    disabled={errorStatus}
                    onClick={setConfirmDialog}
                >
                    Выбрать
                </button>
                <div className={s.byOwn}><h3>Ввести данные вручную</h3></div>
                <div className={s.securityWrapper}>
                    <div className={s.security}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_807_14661)">
                                <path
                                    d="M8.5 5.5V4C8.5 2.61929 7.38071 1.5 6 1.5C4.61929 1.5 3.5 2.61929 3.5 4V5.5M3.9 10.5H8.1C8.94008 10.5 9.36012 10.5 9.68099 10.3365C9.96323 10.1927 10.1927 9.96323 10.3365 9.68099C10.5 9.36012 10.5 8.94008 10.5 8.1V7.9C10.5 7.05992 10.5 6.63988 10.3365 6.31901C10.1927 6.03677 9.96323 5.8073 9.68099 5.66349C9.36012 5.5 8.94008 5.5 8.1 5.5H3.9C3.05992 5.5 2.63988 5.5 2.31901 5.66349C2.03677 5.8073 1.8073 6.03677 1.66349 6.31901C1.5 6.63988 1.5 7.05992 1.5 7.9V8.1C1.5 8.94008 1.5 9.36012 1.66349 9.68099C1.8073 9.96323 2.03677 10.1927 2.31901 10.3365C2.63988 10.5 3.05992 10.5 3.9 10.5Z"
                                    stroke="#17B26A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_807_14661">
                                    <rect width={12} height={12} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Все данные надёжно защищены</p>
                    </div>
                </div>
            </BootstrapModal>
        </>
    );
}