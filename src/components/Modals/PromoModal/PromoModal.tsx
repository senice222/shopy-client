import './PromoModal.scss'
import {ChangeEvent, FC, useState} from "react";
import {PromoModalI} from "../../../interfaces/PromoModalI";
import BootstrapModal from "../BootstrapModal/BootstrapModal";
import {RequestSent} from "../RequestSent/RequestSent";


export const PromoModal: FC<PromoModalI> = ({promoActive, onClose, setBurger}) => {
    const [promoInputValue, setPromoInputValue] = useState('');
    const [errorStatus, setErrorStatus] = useState(false);
    const [isModal, setModal] = useState(false)

    const checkingPromo = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPromoInputValue(value);
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
            <RequestSent setBurger={setBurger} isOpen={isModal} onClose={() => setModal((prev: boolean) => !prev)} switchDialog={onClose} type={'promo'} />
            <BootstrapModal active={promoActive} onClose={onClose}>
                <div className="modal-win__popup-head">
                    <div className="rounded-border">
                        <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.00001 6.50016H6.00668M10 10.5002H10.0067M10.6667 5.8335L5.33334 11.1668M14.6667 8.50016C14.6667 12.1821 11.6819 15.1668 8.00001 15.1668C4.31811 15.1668 1.33334 12.1821 1.33334 8.50016C1.33334 4.81826 4.31811 1.8335 8.00001 1.8335C11.6819 1.8335 14.6667 4.81826 14.6667 8.50016ZM6.33334 6.50016C6.33334 6.68426 6.18411 6.8335 6.00001 6.8335C5.81592 6.8335 5.66668 6.68426 5.66668 6.50016C5.66668 6.31607 5.81592 6.16683 6.00001 6.16683C6.18411 6.16683 6.33334 6.31607 6.33334 6.50016ZM10.3333 10.5002C10.3333 10.6843 10.1841 10.8335 10 10.8335C9.81592 10.8335 9.66668 10.6843 9.66668 10.5002C9.66668 10.3161 9.81592 10.1668 10 10.1668C10.1841 10.1668 10.3333 10.3161 10.3333 10.5002Z"
                                stroke="#344054"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
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
                <h3 className="title promo-title">Введите промокод</h3>
                <div className="input">
                    <input
                        onInput={checkingPromo}
                        value={promoInputValue}
                        onChange={(e) => setPromoInputValue(e.target.value)}
                        className="rounded-border"
                        placeholder="Введите промокод"
                        style={errorStatus ? {border: '1px solid red'} : {}}
                    />
                    {errorStatus && (
                        <>
                            <svg
                                className="error-decor"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.99998 5.3335V8.00016M7.99998 10.6668H8.00665M14.6666 8.00016C14.6666 11.6821 11.6819 14.6668 7.99998 14.6668C4.31808 14.6668 1.33331 11.6821 1.33331 8.00016C1.33331 4.31826 4.31808 1.3335 7.99998 1.3335C11.6819 1.3335 14.6666 4.31826 14.6666 8.00016Z"
                                    stroke="#F04438"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </>
                    )}
                </div>
                {errorStatus ? <span style={{color: 'red', marginTop: '5px'}}>
                      Такого промокода не существует
                    </span> : null}
                <button
                    className="blue-btn"
                    disabled={errorStatus}
                    onClick={setConfirmDialog}
                >
                    Активировать
                </button>
            </BootstrapModal>
        </>
    );
}