import './DoDepModal.scss'

import React, { useState, FC, useRef, ChangeEvent, FocusEvent, FormEvent } from 'react';
import BootstrapModal from "../BootstrapModal/BootstrapModal";
import {RequestSent} from "../RequestSent/RequestSent";
import Button from "../../Button/Button";
interface DoDepModalI {
    isOpen: boolean,
    onClose: () => void,
    setBurger: () => void
}

export const DoDepModal : FC<DoDepModalI> = ({isOpen, onClose, setBurger}) => {
    const [displayValue, setDisplayValue] = useState<string>('');
    const [topUpBalance, setTopUpBalance] = useState<number>(0);
    const [isModal, setModal] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null);

    const setFormattedValue = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/\D/g, '');
        setDisplayValue(value);
        setTopUpBalance(Number(value));
    };

    const formatValue = () => {
        const formattedValue = new Intl.NumberFormat('ru-RU').format(Number(displayValue));
        setDisplayValue(formattedValue);
    };

    const unformatValue = () => {
        setDisplayValue(displayValue.replace(/\s/g, ''));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    };
    const allGood = () => {
        setModal(true)
    }
    return (
       <>
           <RequestSent isOpen={isModal} onClose={() => setModal((prev) => !prev)} switchDialog={onClose} setBurger={setBurger} type={'balance'}/>
           <div className={`Dep ${isOpen ? 'active' : ''}`} onClick={onClose}>
               <BootstrapModal bottom={true} active={isOpen}>
                   <div className="modal-win__popup-head">
                       <div className="head-text">
                           <h3 className="title">Пополнить баланс</h3>
                           <span>
                                Введите сумму пополнения
                            </span>
                       </div>
                       <svg
                           onClick={onClose}
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{ cursor: 'pointer' }}
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
                   <form onSubmit={handleSubmit} className="topup-balance">
                       <input
                           type="text"
                           value={displayValue + "₽"}
                           onInput={setFormattedValue}
                           onBlur={formatValue}
                           onFocus={unformatValue}
                           ref={inputRef}
                           className={'input'}
                       />
                   </form>
                   <div className="confirm">
                       <span className="title">Итого к оплате</span>
                       <span className={"balance"}>{topUpBalance}₽</span>
                   </div>
                   <Button text={"Перейти к оплате"} letterSpacing={"0.5px"} height={"44px"} width={"100%"}/>
               </BootstrapModal>
           </div></>
    );
}