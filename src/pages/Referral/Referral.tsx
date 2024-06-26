import style from './Referral.module.scss'
import Layout from "../../layouts/Layout";
import {Input} from "antd";
import copy from "../../assets/copy-01.png";
import React from "react";
import nothing from "../../assets/Illustrationnothing.png";
import Button from "../../components/Button/Button";

const Referral = () => {

    return (
        <div className={style.bg}>
            <Layout isRightArrow={true}>
                <div className={style.wrapper}>
                    <div className={style.refDiv}>
                        <h2>Реферальная система</h2>
                        <p>Приглашайте друзей в Shopy и получайте 5% с каждой их покупки</p>
                    </div>
                    <div className={style.inputDiv}>
                        <p>Ваша реферальная ссылка</p>
                        <div>
                            <Input className={style.input} value={"https://t.me/mshopybot?start=ref.."} placeholder="olivia@mshopy.ru" readOnly/>
                            <div>
                                <img src={copy} alt={'/'}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.earnings}>
                        <p>Всего заработали с рефералов</p>
                        <h2>399₽</h2>
                    </div>
                    <div className={style.yourReferral}>
                        <h2>Ваши рефералы</h2>
                        <p>Приглашайте друзей в Shopy и получайте 5% с каждой их покупки</p>
                    </div>
                    <div className={style.nothing}>
                        <img src={nothing} alt="/"/>
                        <h2>Пока что тут ничего нет</h2>
                        <p>Как только реферал войдёт в бота, он отобразится здесь. Если реферал не отобразился, обратитесь в поддержку.</p>
                        <div>
                            <Button text={"Написать в поддержку"} height={"48px"} width={"100%"}/>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Referral;
