import '../PromoModal/PromoModal.scss'
import {ChangeEvent, FC, useState} from "react";
import BootstrapModal from "../BootstrapModal/BootstrapModal";
import {RequestSent} from "../RequestSent/RequestSent";
import s from './SendMessageModal.module.scss'
import {Spotify} from "../../../pages/SubscribeActivate/Svgs";
import {AccountSelect} from "../../AccountSelect/AccountSelect";


export interface SelectAccountI {
    promoActive: boolean,
    onClose: () => void,
}

export const SendMessage: FC<SelectAccountI> = ({promoActive, onClose}) => {

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
        // nextStep()
        onClose()
    };

    return (
        <>

            {/*<RequestSent  isOpen={isModal} onClose={() => setModal((prev: boolean) => !prev)} switchDialog={onClose} type={'promo'} />*/}
            <BootstrapModal active={promoActive} onClose={onClose}>
                {/*<div className="modal-win__popup-head" style={{alignItems: 'flex-start'}}>*/}
                {/*    <div className={s.titleDiv}>*/}
                {/*        <h2 className={s.title}>Выберите аккаунт</h2>*/}
                {/*        <p>Выберите сохранненый аккаунт из вашего профиля.</p>*/}
                {/*    </div>*/}
                {/*    <svg*/}
                {/*        onClick={onClose}*/}
                {/*        width="24"*/}
                {/*        height="24"*/}
                {/*        viewBox="0 0 24 24"*/}
                {/*        fill="none"*/}
                {/*        xmlns="http://www.w3.org/2000/svg"*/}
                {/*        style={{cursor: 'pointer'}}*/}
                {/*    >*/}
                {/*        <path*/}
                {/*            d="M18 6L6 18M6 6L18 18"*/}
                {/*            stroke="#98A2B3"*/}
                {/*            strokeWidth="2"*/}
                {/*            strokeLinecap="round"*/}
                {/*            strokeLinejoin="round"*/}
                {/*        />*/}
                {/*    </svg>*/}
                {/*</div>*/}
                {/*<AccountSelect items={accounts} setSelected={setSelected} />*/}
                {/*{errorStatus ? <span style={{color: 'red', marginTop: '5px'}}>*/}
                {/*      Такого промокода не существует*/}
                {/*    </span> : null}*/}
                {/*<button*/}
                {/*    className="blue-btn"*/}
                {/*    disabled={errorStatus}*/}
                {/*    onClick={setConfirmDialog}*/}
                {/*>*/}
                {/*    Выбрать*/}
                {/*</button>*/}
                {/*<div onClick={onClose} className={s.byOwn}><h3>Ввести данные вручную</h3></div>*/}
                <div className={s.container}>
                    <h2 className={s.title}>Отправить сообщение клиенту</h2>
                    <input
                        type="text"
                        placeholder="Введите сообщение"
                        className={s.input}
                    />
                    <div className={s.newCategory}>
                        <label htmlFor="category">Новая категория</label>
                        <input
                            id="category"
                            type="text"
                            placeholder="Например, музыка"
                            className={s.input}
                        />
                    </div>
                    <div className={s.buttons}>
                        <button className={s.addButton}>+ Добавить кнопки</button>
                    </div>
                    <div className={s.actions}>
                        <button className={s.closeButton}>Закрыть</button>
                        <button className={s.sendButton}>Отправить</button>
                    </div>
                </div>

            </BootstrapModal>
        </>
    );
}