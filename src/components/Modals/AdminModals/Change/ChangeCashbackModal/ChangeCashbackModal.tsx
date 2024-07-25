import {AdminModal} from "../../../AdminModal/AdminModal";
import React, {FC, useState} from "react";
import s from "../../AddBalance/AddBalance.module.scss";
import {useSWRConfig} from "swr";
import {fetcher} from "../../../../../core/fetch";
import {notification} from "antd";

const ChangeCashbackModal: FC<{
    id?: number,
    username?: string,
    cashback: boolean,
    setCashBack: () => void
}> = ({username, id, cashback, setCashBack}) => {
    const [value, setValue] = useState<string>('');
    const {mutate} = useSWRConfig()

    const changeCashback = async () => {
        try {
            await mutate(`http://localhost:4000/api/user/username/${username}`, fetcher(`http://localhost:4000/api/user-cashback/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cashback: +value
                })
            }));
            notification.success({
                message: "Вы успешно изменили кэшбек",
                duration: 1.5
            });

            setCashBack();
        } catch (error) {
            console.error('Ошибка при изменении кешбэка:', error);
        }
    };


    return (
        <AdminModal isOpened={cashback} setOpen={setCashBack}>
            <h2>Изменить процент кэшбека</h2>
            <div className={s.blocks}>
                <div className={s.block}>
                    <h3>Введите значение</h3>
                    <input value={value} onChange={(e) => setValue(e.target.value)} placeholder={'Например, 5%'}/>
                </div>
            </div>
            <div className={s.lastbtns}>
                <button onClick={() => setCashBack()} className={s.grayBtn}>Отмена</button>
                <button className={s.blueBtn} onClick={changeCashback}>Изменить</button>
            </div>
        </AdminModal>
    );
};

export default ChangeCashbackModal;
