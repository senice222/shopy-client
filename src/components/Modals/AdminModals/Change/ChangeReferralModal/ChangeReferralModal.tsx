import {AdminModal} from "../../../AdminModal/AdminModal";
import React, {FC, useState} from "react";
import s from "../../AddBalance/AddBalance.module.scss";
import {useSWRConfig} from "swr";
import {fetcher, url} from "../../../../../core/fetch";
import {notification} from "antd";

const ChangeReferralModal: FC<{
    id?: number,
    username?: string,
    referral: boolean,
    setReferral: () => void
}> = ({username, id, referral, setReferral}) => {
    const [value, setValue] = useState<string>('');
    const {mutate} = useSWRConfig()

    const changeReferral = async () => {
        try {
            await mutate(`${url}/api/user/username/${username}`, fetcher(`${url}/api/user-referral/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    referral: +value
                })
            }));
            notification.success({
                message: "Вы успешно изменили реферальный процент",
                duration: 1.5
            });

            setReferral();
        } catch (error) {
            console.error('Ошибка при изменении кешбэка:', error);
        }
    };


    return (
        <AdminModal isOpened={referral} setOpen={setReferral}>
            <h2>Изменить процент реферала</h2>
            <div className={s.blocks}>
                <div className={s.block}>
                    <h3>Введите значение</h3>
                    <input value={value} onChange={(e) => setValue(e.target.value)} placeholder={'Например, 5%'}/>
                </div>
            </div>
            <div className={s.lastbtns}>
                <button onClick={() => setReferral()} className={s.grayBtn}>Отмена</button>
                <button className={s.blueBtn} onClick={changeReferral}>Изменить</button>
            </div>
        </AdminModal>
    );
};

export default ChangeReferralModal;
