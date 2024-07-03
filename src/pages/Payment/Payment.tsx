import style from './Payment.module.scss'
import TopItem from "../../components/TopItem/TopItem";
import success from "../../assets/svg/Featured icon (1).svg";
import clock from "../../assets/svg/Featured icon.svg";
import cross from "../../assets/svg/Featured icon (2).svg";
import Layout from "../../layouts/Layout";
import React, {FC} from "react";
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";

interface Payment {
    title: string;
    descr: string;
    btnText: string;
    type: "success" | "rejected" | "pending" | "cancelled" | "receive",
    without?: boolean
}

const SuccessfulPayment: FC<Payment> = ({title, descr, btnText, type, without}) => {
    const navigate = useNavigate()
    let img;

    switch (type) {
        case 'success':
        case 'receive':
            img = success;
            break;
        case 'rejected':
        case 'cancelled':
            img = cross;
            break;
        case 'pending':
            img = clock;
            break;
        default:
            img = success;
    }
    if (without) {
        return (
            <div className={style.proceedContainer}>
                <div className={style.textDiv}>
                    <img src={img} alt={'/'}/>
                    <div className={style.wrapp}>
                        <h2>{title}</h2>
                        <p>{descr}</p>
                    </div>
                    <div className={style.btnsDiv}>
                        <div className={style.firstBtn}>
                            <button>{btnText}</button>
                        </div>
                        <div className={style.anotherBtns}>
                            <button className={style.supportBtn}>Поддержка</button>
                            <Button width={"47%"} height={"44px"} text={"На главную"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <Layout>
            <div className={style.proceedContainer}>
                <TopItem text={"Оформление заказа"}/>
                <div className={style.textDiv}>
                    <img src={img} alt={'/'}/>
                    <div className={style.wrapp}>
                        <h2>{title}</h2>
                        <p>{descr}</p>
                    </div>
                    <div className={style.btnsDiv}>
                        <div className={style.firstBtn}>
                            <button>{btnText}</button>
                        </div>
                        <div className={style.anotherBtns}>
                            <button className={style.supportBtn}>Поддержка</button>
                            <div onClick={() => navigate('/')} style={{width: "50%"}}>
                                <Button width={"100%"} height={"44px"} text={"На главную"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SuccessfulPayment;
