import { FC } from 'react';
import style from './CashBackModal.module.scss';
import BootstrapModal from '../BootstrapModal/BootstrapModal';
import { AnotherPercent } from '../../BurgerMenu/Svgs';
import { Cross } from '../AdminModal/Svgs';
import { User } from '../../../interfaces/User';
import { calculateNextThreshold, priceRanges } from '../../../utils/utils';

interface CashbackModalI {
    user: User;
    cashback: boolean;
    onClose: () => void;
}

const CashBackModal: FC<CashbackModalI> = ({ user, cashback, onClose }) => {
    const { totalBuys } = user;
    const { nextThreshold, cashbackPercent } = calculateNextThreshold(totalBuys);
    const remainingAmount = nextThreshold ? nextThreshold - totalBuys : 0;

    return (
        <BootstrapModal active={cashback} onClose={onClose}>
            <div className={style.modalWinPopupHead}>
                <div className={style.roundedBorder}>
                    <AnotherPercent />
                </div>
                <div
                    onClick={onClose}
                    style={{ cursor: 'pointer' }}
                >
                    <Cross />
                </div>
            </div>
            <div className={style.infoWrapper}>
                <h3>Как начисляется кэшбек?</h3>
                <p className={style.cashText}>
                    В Shopy появилась программа лояльности для клиентов! Теперь мы начисляем бонусные рубли в зависимости от суммы покупок в боте.
                </p>
                <div className={style.prices}>
                    <h2>При сумме заказов:</h2>
                    {priceRanges.map((item, index) => (
                        <div key={index}>
                            <p>{item.range}</p>
                            <p>{item.percentage}</p>
                        </div>
                    ))}
                </div>
                <div className={style.amountOfOrders}>
                    <div>
                        <p>Сумма заказов</p>
                        <p>{totalBuys}€</p>
                    </div>
                    {nextThreshold && (
                        <div>
                            <p>До повышения:</p>
                            <p>{remainingAmount}€</p>
                        </div>
                    )}
                </div>
                <div className={style.amountOfOrders}>
                    <div>
                        <p>Ваш процент кэшбека</p>
                        <p>{cashbackPercent}%</p>
                    </div>
                </div>
            </div>
        </BootstrapModal>
    );
};

export default CashBackModal;
