import style from './DetailedOrder.module.scss'
import Layout from "../../../layouts/Layout";
import spotify from "../../../assets/svg/Spotify.svg";
import Button from "../../../components/Button/Button";
import { useParams } from 'react-router-dom';
import useSWR from "swr";
import { fetcher, url } from "../../../core/fetch";
import { format } from 'date-fns';
import Loader from "../../../components/Loader/Loader";
import { feedbackManager } from "../../../utils/feedbackManager";
import { Mail } from '../../../components/Svgs/Svgs';

interface Status {
    style: string;
    text: string;
}

const DetailedOrder = () => {
    const { id } = useParams()
    const { data } = useSWR(`${url}/api/order/${id}`, fetcher)

    const statuses: Record<string, Status> = {
        "payed": {
            style: style.payedStatus,
            text: "Оплачен"
        },
        "cancelled": {
            style: style.cancelledStatus,
            text: "Отменен"
        },
        "ready": {
            style: style.payedStatus,
            text: "Выполнен"
        },
        "in work": {
            style: style.pendingStatus,
            text: "В работе"
        },
        "refund": {
            style: style.payedStatus,
            text: "Возврат"
        }
    }

    const formattedDate = data?.date ? format(new Date(data.date), "'Создан' dd.MM.yyyy 'в' HH:mm") : 'Дата загружается.'
    const currentStatus = statuses[data?.status]

    if (!data) return <Loader />

    return (
        <div className={style.historyWrapp}>
            <Layout>
                <div className={style.wrappedOrder}>
                    <div className={style.historyTitle}>
                        <h2 style={{ fontSize: "16px" }}>Заказ №{id}</h2>
                    </div>
                    <div className={style.detailedInfo}>
                        <p className={style.date}>{formattedDate}</p>
                        <div className={currentStatus?.style}>
                            <p className={style.date}>Статус:</p>
                            <div>
                                <p>{currentStatus?.text}</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.subscriptionContainer}>
                        <Mail />
                        <div>
                            <h2>Подписка будет активирована на аккаунт</h2>
                            <p>{data.email}</p>
                        </div>
                    </div>
                    <div className={style.changeDataText}>
                        <p>Изменить данные для активации можно <span>через поддержку</span></p>
                    </div>
                    <div className={style.item}>
                        <img src={spotify} alt="/" />
                        <div className={style.container}>
                            <div className={style.infoWrapper}>
                                <h2>{data.items[0].main.name}</h2>
                                <div>
                                    {
                                        data.items[0].optional.map((item: any, i: number) => (
                                            <p key={i}>{item.name}: {item.value}</p>
                                        ))
                                    }
                                </div>
                                <h2>{data.totalAmount}₽</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={style.totalItems}>
                            <p>Стоимость товаров</p>
                            <h2>{data.totalAmount}₽</h2>
                        </div>
                        <div className={style.skidka}>
                            <p>Скидка (-20%):</p>
                            <h2>-39₽</h2>
                        </div>
                        <div className={style.toPay}>
                            <p>Итого к оплате: </p>
                            <h2>{data.totalAmount}₽</h2>
                        </div>
                    </div>
                    <div style={{ width: "100%", marginTop: "25px" }} onClick={() => {
                        feedbackManager()
                        // navigate('/change-data')
                    }}>
                        <Button text={"Написать в поддержку"} width={"100%"} height={"48px"} />
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default DetailedOrder;
