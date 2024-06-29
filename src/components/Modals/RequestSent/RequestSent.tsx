import {FC} from "react";
import './RequestSent.scss'
import {useNavigate} from "react-router-dom";

interface NotFoundSubmitFormDialogProps {
    isOpen: boolean;
    onClose: () => void;
    switchDialog: () => void;
    type?: string,
    setBurger: () => void
}


export const RequestSent: FC<NotFoundSubmitFormDialogProps> = ({isOpen, onClose, switchDialog, type, setBurger}) => {
    const navigate = useNavigate()
    return (
        <div className={`Req ${isOpen ? 'active' : ''}`}>
            <div className={`modal-win__popup promo__popup ${isOpen ? 'activeCont' : ''}`}
                 style={{borderRadius: '12px'}}>
                <div className="modal-win__popup-body">

                    <div className="modal-win__popup-head">
                        <svg
                            className={'svg33'}
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                                fill="#DCFAE6"
                            />
                            <path
                                d="M19.5 24L22.5 27L28.5 21M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z"
                                stroke="#079455"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
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
                    <h3 className="title" style={{marginBottom: 0, marginTop: '12px'}}>
                        {!type ? 'Заявка успешно отправлена' : type === "promo" ? 'Промокод активирован!' : type === "balance" ? "Баланс успешно пополнен" : ""}
                    </h3>
                    {
                        type !== 'balance' ? <span>
                        {!type ? 'Мы все проверим и свяжемся с вами в ближайщее время' : type === "promo" ? 'Он автоматически применится в корзине. Приятных покупок!' : ''}
          </span> : null}
                    {
                        type && <button
                            className="BlueBtn"
                            onClick={() => {
                                navigate('/')
                                setBurger()
                            }}
                        >
                            Перейти в каталог
                        </button>
                    }
                    <button
                        onClick={() => {
                            switchDialog()
                            onClose()
                        }}
                        className={'btn1'}
                    >
                        Закрыть
                    </button>

                </div>
            </div>
        </div>
    );
}