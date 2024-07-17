import './NotFindModal.scss'
import {FC, useEffect, useRef, useState} from "react";
import {RequestSent} from "../RequestSent/RequestSent";
import BootstrapModal from "../BootstrapModal/BootstrapModal";
import Button from "../../Button/Button";
import { motion } from 'framer-motion';
import MobileDetect from "mobile-detect";
import useFormElementFocus from '../../../hooks/useFormElementFocus';

interface NotFoundDialogProps {
    isOpen: boolean;
    onClose: () => void;
    setBurger: () => void
}


export const NotFindModal: FC<NotFoundDialogProps> = ({isOpen, onClose, setBurger}) => {
    const [isOk, setOk] = useState(false)
    const [type, setType] = useState('digital')
    const inputRef = useRef<HTMLFormElement | null>(null);
    const [form, setForm] = useState({
        description: '',
        link: '',
        phone: '',
    });

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const md = new MobileDetect(window.navigator.userAgent);
    const isMobileDevice = md.mobile();
    useFormElementFocus(inputRef, isMobileDevice, setIsFocused)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (form.description.trim() !== "" && form.description.trim() !== "" && form.phone.trim() !== "") {
            setOk(true)
        }
    };

    return (
        <>
            <RequestSent setBurger={setBurger} isOpen={isOk} onClose={() => setOk(!isOk)} switchDialog={onClose}/>
            <div className={`NotFind ${isOpen ? 'active' : ''}`} onClick={onClose}>
                <BootstrapModal isFocused={isFocused} active={isOpen} Y={-56}>
                    <div className="modal-win__popup-head">
                        <h3 className="title">Не нашли то, что искали?</h3>
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

                    <span style={{color: '#475467', fontSize: '15px', lineHeight: '20px', marginBottom: '24px'}}>
                        Заполните заявку на оплату. Мы проверим <br/>
                            возможность оплаты и свяжемся с вами.
                        </span>
                    <form onSubmit={handleSubmit} className="new-product__form" ref={inputRef}>
                        <div className={'type'}>
                            <h3 className={'title'}>Тип товара</h3>
                            <div className="items">
                                <motion.div
                                    onClick={() => setType('digital')}
                                    className={`item ${type === 'digital' ? 'active' : ''}`}
                                    animate={{ opacity: type === 'digital' ? 1 : 0.5 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Цифровой
                                </motion.div>
                                <motion.div
                                    onClick={() => setType('physical')}
                                    className={`item ${type === 'physical' ? 'active' : ''}`}
                                    animate={{ opacity: type === 'physical' ? 1 : 0.5 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Физический
                                </motion.div>
                            </div>
                        </div>
                        <div className="new-product__description">
                            <h3 className="title">Опишите, что нужно купить</h3>
                            <textarea
                                name="description"
                                className="rounded-border"
                                placeholder="Search for company"
                                value={form.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="new-product__link">
                            <h3 className="title">Ссылка на товар</h3>
                            <input
                                type="text"
                                name="link"
                                className="rounded-border"
                                placeholder="https://"
                                value={form.link}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="new-product__phone">
                            <h3 className="title">Телефон для связи</h3>
                            <div className={'telDiv'}>
                                <div>
                                    +7
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Введите номер"
                                    className="rounded-border tel"
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div style={{width: "100%", marginTop: "10px"}}>
                            <Button text={"Отправить заявку"} letterSpacing={"0.4px"} width={"100%"} height={"44px"} />
                        </div>
                    </form>
                </BootstrapModal>
            </div>
        </>
    );
}