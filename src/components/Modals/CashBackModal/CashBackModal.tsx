import style from './CashBackModal.module.scss'
import {FC} from "react";
import BootstrapModal from "../BootstrapModal/BootstrapModal";

interface CashbackModalI {
    cashback: boolean,
    onClose: () => void
}

const CashBackModal: FC<CashbackModalI> = ({cashback, onClose}) => {
    return (
        <BootstrapModal active={cashback} onClose={onClose}>
            <div className={style.modalWinPopupHead}>
                <div className={style.roundedBorder}>
                    <svg
                        width="24"
                        height="24"
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
            <div className={style.infoWrapper}>
                <h3>Как начисляется кэшбек?</h3>
                <p className={style.cashText}>В Shopy появилась программа лояльности для клиентов! Теперь мы начисляем бонусные рубли в зависимости от суммы покупок в боте.</p>
                <div className={style.prices}>
                    <h2>При сумме заказов:</h2>
                    <div>
                        <p>от 0₽ до 4 999₽</p>
                        <p>0%</p>
                    </div>
                    <div>
                        <p>от 5 000₽ до 9 999₽</p>
                        <p>1%</p>
                    </div>
                    <div>
                        <p>от 10 000₽ до 14 999₽</p>
                        <p>2%</p>
                    </div>
                    <div>
                        <p>от 15 000₽ до 19 999₽</p>
                        <p>3%</p>
                    </div>
                    <div>
                        <p>от 20 000₽ до 29 999₽</p>
                        <p>4%</p>
                    </div>
                    <div>
                        <p>от 30 000₽</p>
                        <p>5%</p>
                    </div>
                </div>
                <div className={style.amountOfOrders}>
                    <div>
                        <p>
                            Сумма заказов
                        </p>
                        <p>
                            0₽
                        </p>
                    </div>
                    <div>
                        <p>
                            До повышения:
                        </p>
                        <p>
                            5 000₽
                        </p>
                    </div>
                </div>
                <div className={style.amountOfOrders}>
                    <div>
                        <p>
                            Ваш процент кэшбека
                        </p>
                        <p>
                            0%
                        </p>
                    </div>
                </div>
            </div>
        </BootstrapModal>
    );
};

export default CashBackModal;
