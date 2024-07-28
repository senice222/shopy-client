import React, { useState } from 'react';
import BackTick from "../../../../components/ADMIN/BackTick/BackTick";
import style from './DetailedUser.module.scss';
import lock from '../../../../assets/lock-01232.png';
import BlueButton from "../../../../components/Button/Button";
import UserInfo from "../../../../components/ADMIN/UserInfo/UserInfo";
import { useParams } from "react-router-dom";
import useSWR, {useSWRConfig} from "swr";
import { fetcher, url } from "../../../../core/fetch";
import Loader from "../../../../components/Loader/Loader";
import { User } from "../../../../interfaces/User";
import { UserMessageModal } from "../../../../components/Modals/AdminModals/UserMessage/UserMessageModal";
import { AddBalance } from "../../../../components/Modals/AdminModals/AddBalance/AddBalance";
import ChangeCashbackModal from "../../../../components/Modals/AdminModals/Change/ChangeCashbackModal/ChangeCashbackModal";
import ChangeReferralModal from "../../../../components/Modals/AdminModals/Change/ChangeReferralModal/ChangeReferralModal";
import ProfileActions from "../../../../components/ADMIN/ProfileActions/ProfileActions";
import OrderTable from "./OrderTable/OrderTable";
import {Button, notification} from "antd";

const DetailedUser: React.FC = () => {
    const [active, setActive] = useState<boolean>(false);
    const [isAddBalance, setAddBalance] = useState<boolean>(false);
    const [cashback, setCashBack] = useState<boolean>(false);
    const [referral, setReferral] = useState<boolean>(false);
    const { username } = useParams<{ username: string }>();
    const { data: user } = useSWR<User>(`${url}/api/user/username/${username}`, fetcher);
    const {mutate} = useSWRConfig()
    // const totalAmount = user ? user.orderIds.reduce((acc, curr) => acc += curr.totalAmount, 0) : 0;

    const handleStatusChange = async (orderId: string, newStatus: string) => {
        try {
            await mutate(
                `${url}/api/user/username/${username}`,
                fetcher(`${url}/api/order/update/${orderId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        newStatus
                    }),
                })
            )
            notification.success({
                message: "Вы успешно изменили статус.",
                duration: 1.5
            })
        } catch (e) {
            console.log(e)
        }
    };

    if (!user) return <Loader />;

    return (
        <div className={style.wrapper}>
            <UserMessageModal id={user.id} isOpen={active} setOpen={() => setActive((prev) => !prev)} />
            <AddBalance id={user.id} setOpen={() => setAddBalance((prev) => !prev)} isOpened={isAddBalance} />
            <ChangeCashbackModal id={user.id} username={username} cashback={cashback} setCashBack={() => setCashBack((prev) => !prev)} />
            <ChangeReferralModal id={user.id} username={username} referral={referral} setReferral={() => setReferral((prev) => !prev)} />

            <BackTick title="Пользователи" to="/panel" nestedTitle={`@${user.username}`} nestedTo={`/panel/users/@${user.username}`} />
            <div className={style.userHeader}>
                <h2 className={style.username}>@{user.username}</h2>
                <div className={style.btns}>
                    <button className={style.blockBtn}>
                        <img src={lock} alt='/' />
                        <p>Заблокировать</p>
                    </button>
                    <button className={style.editBtn} onClick={() => setAddBalance(true)}>
                        Изменить баланс
                    </button>
                    <div onClick={() => setActive(true)}>
                        <BlueButton text="Написать сообщение" height="40px" width="181px" fontSize="14px" />
                    </div>
                </div>
            </div>
            <UserInfo user={user} />
            <ProfileActions setMessage={setActive} setAddBalance={setAddBalance} setCashBack={setCashBack} setReferral={setReferral} />
            <div className={style.lastOrders}>
                <div className={style.orderHeader}>
                    <h2>Последние заказы</h2>
                    <Button style={{ height: "40px", width: "92px", fontSize: "14px" }}>Перейти</Button>
                </div>
                <OrderTable _id={user._id} orders={user.orderIds} onStatusChange={handleStatusChange} />
            </div>
        </div>
    );
};

export default DetailedUser;
