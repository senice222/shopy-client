import './PromoModal.scss'
import {ChangeEvent, FC, useEffect, useRef, useState} from "react";
import {PromoModalI} from "../../../interfaces/PromoModalI";
import BootstrapModal from "../BootstrapModal/BootstrapModal";
import {RequestSent} from "../RequestSent/RequestSent";
import MobileDetect from "mobile-detect";
import useElementFocus from '../../../hooks/useElementFocus';
import axios from "axios";
import {url} from "../../../core/fetch";
import {addPromo} from "../../../store/features/cartSlice";
import {useAppDispatch} from "../../../hooks/redux-hooks";


export const PromoModal: FC<PromoModalI> = ({promoActive, onClose, setBurger}) => {
    const [promoInputValue, setPromoInputValue] = useState('');
    const [errorStatus, setErrorStatus] = useState('');
    const [isModal, setModal] = useState(false)
    const [isFocused, setIsFocused] = useState(false);
    const md = new MobileDetect(window.navigator.userAgent);
    const isMobileDevice = md.mobile();
    const inputRef = useRef<HTMLInputElement>(null);
    useElementFocus(inputRef, isMobileDevice, setIsFocused)
    const dispatch = useAppDispatch()

    const setConfirmDialog = async () => {
        if (!errorStatus) {
            try {
                const {data} = await axios.post(`${url}/api/apply-promo`, {userId: 878990615, promoCode: promoInputValue});
                if (data) {
                    dispatch(addPromo(data.discount));
                    setPromoInputValue('');
                    onClose();
                    setModal(true);
                }
            } catch (error: any) {
                setErrorStatus(error.response?.data?.message || 'Произошла ошибка при активации промокода');
            }
        }
    };

    return (
        <>
            <RequestSent setBurger={setBurger} isOpen={isModal} onClose={() => setModal((prev: boolean) => !prev)}
                         switchDialog={onClose} type={'promo'}/>
            <BootstrapModal isFocused={isFocused} active={promoActive} onClose={onClose}>
                <div className="modal-win__popup-head">
                    <div className="rounded-border">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M9 9H9.01M15 15H15.01M16 8L8 16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9C8.5 8.72386 8.72386 8.5 9 8.5C9.27614 8.5 9.5 8.72386 9.5 9ZM15.5 15C15.5 15.2761 15.2761 15.5 15 15.5C14.7239 15.5 14.5 15.2761 14.5 15C14.5 14.7239 14.7239 14.5 15 14.5C15.2761 14.5 15.5 14.7239 15.5 15Z"
                                stroke="#344054"
                                strokeWidth={2}
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
                        ref={inputRef}
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
                {errorStatus ? <span style={{color: 'red', fontFamily: "Graphik LCG Regular", marginTop: '5px'}}>
                      {errorStatus}
                    </span> : null}
                <button
                    className="blue-btn"
                    disabled={Boolean(errorStatus)}
                    onClick={setConfirmDialog}
                >
                    Активировать
                </button>
            </BootstrapModal>
        </>
    );
}