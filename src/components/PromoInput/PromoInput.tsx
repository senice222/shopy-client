import React from 'react';
import style from "./PromoInput.module.scss";
import {Button, Input, Space} from "antd";

const PromoInput = () => {
    return (
        <div className={style.promoContainer}>
            <h2>Промокод (если есть)</h2>
            <Space.Compact className={style.spaceCompact}>
                <Input className={style.input} />
                <Button className={style.button}>Активировать</Button>
            </Space.Compact>
            <p>Промокод CODE на скидку 20% активирован!</p>
        </div>
    );
};

export default PromoInput;
