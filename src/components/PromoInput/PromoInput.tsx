import React, { FC, useState } from 'react';
import style from "./PromoInput.module.scss";
import { Button, Input, Space } from "antd";
import { url } from '../../core/fetch';
import axios from 'axios';
import { useTelegram } from '../../hooks/useTelegram';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { addPromo } from '../../store/features/cartSlice';

const PromoInput = () => {
    const [promo, setPromo] = useState<string>('')
    const [promoErr, setPromoErr] = useState<string>('')
    const [promoSuccess, setPromoSuccess] = useState<string>(''); 
    const { id } = useTelegram()
    const dispatch = useAppDispatch()

    const applyPromoCode = async () => {
        try {
            const { data } = await axios.post(`${url}/api/apply-promo`, { userId: 878990615, promoCode: promo });
            dispatch(addPromo(data.discount));
            setPromo('')
            setPromoSuccess('Промокод успешно активирован!'); 
        } catch (error: any) {
            setPromoErr(error.response?.data?.message || 'Произошла ошибка при активации промокода');
        }
    };

    return (
        <div className={style.promoContainer}>
            <h2>Промокод (если есть)</h2>
            <Space.Compact className={style.spaceCompact}>
                <Input value={promo} onChange={(e) => setPromo(e.target.value)} className={style.input} />
                <Button className={style.button} onClick={applyPromoCode}>Активировать</Button>
            </Space.Compact>
            <p className={promoErr ? style.error : style.active}>{promoErr}</p>
        </div>
    );
};

export default PromoInput;
