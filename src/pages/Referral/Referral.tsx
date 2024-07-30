import style from './Referral.module.scss'
import Layout from "../../layouts/Layout";
import {Input, message} from "antd";
import copy from "../../assets/copy-01.png";
import React, {FC, useEffect, useState} from "react";
import nothing from "../../assets/Illustrationnothing.png";
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";
import {useTelegram} from "../../hooks/useTelegram";
import LeftArrow from "../../components/LeftArrow/LeftArrow";
import RightArrow from "../../components/RightArrow/RightArrow";
import {UserProps} from "../../interfaces/User";
import Loader from "../../components/Loader/Loader";

const Referral: FC<UserProps> = ({ user }) => {
    const navigate = useNavigate()
    const [copied, setCopied] = useState(false);
    const { onBackButtonClick } = useTelegram();

    useEffect(() => {
        onBackButtonClick(() => navigate('/'));

        return () => {
            onBackButtonClick(null);
        };
    }, [onBackButtonClick, navigate]);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                message.success({
                    type: "success",
                    content: 'Успешно скопировано'
                })
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                message.error('Ошибка при копировании');
                console.error('Ошибка при копировании: ', err);
            });
    };

    const data = [
        { date: '20.03', name: 'Иван', username: '@username', orders: '0 (0Р)', earnings: '0Р' },
        { date: '20.03', name: 'Иван', username: '@username', orders: '0 (0Р)', earnings: '0Р' },
        { date: '20.03', name: 'Иван', username: '@username', orders: '0 (0Р)', earnings: '0Р' },
        { date: '20.03', name: 'Иван', username: '@username', orders: '0 (0Р)', earnings: '0Р' },
    ];

    if (!user) return <Loader />

    return (
        <div className={style.bg}>
            <Layout>
                <div className={style.wrapper}>
                    <div className={style.refDiv}>
                        <h2>Реферальная система</h2>
                        <p>Приглашайте друзей в Shopy и получайте 5% с каждой их покупки</p>
                    </div>
                    <div className={style.inputDiv}>
                        <p>Ваша реферальная ссылка</p>
                        <div>
                            <Input className={style.input} value={`https://t.me/mshopybot?start=r_${user.id}`} placeholder="olivia@mshopy.ru" readOnly/>
                            <div onClick={() => copyToClipboard(`https://t.me/mshopybot?start=r_${user.id}`)}>
                                <img src={copy} alt={'/'}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.earnings}>
                        <p>Всего заработали с рефералов</p>
                        <h2>{user.receivedReferral}₽</h2>
                    </div>
                    <div className={style.yourReferral}>
                        <h2>Ваши рефералы</h2>
                        <p>Приглашайте друзей в Shopy и получайте 5% с каждой их покупки</p>
                    </div>
                    {/*<div className={style.nothing}>*/}
                    {/*    <img src={nothing} alt="/"/>*/}
                    {/*    <h2>Пока что тут ничего нет</h2>*/}
                    {/*    <p>Как только реферал войдёт в бота, он отобразится здесь. Если реферал не отобразился, обратитесь в поддержку.</p>*/}
                    {/*    <div>*/}
                    {/*        <Button text={"Написать в поддержку"} height={"48px"} width={"100%"}/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div className={style.tableContainer}>
                    <table>
                        <thead>
                        <tr>
                            <th>Company</th>
                            <th>Ник реферала</th>
                            <th>Количество и сумма заказов</th>
                            <th>Вы заработали</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.date}</td>
                                <td>{row.name}<br/>{row.username}</td>
                                <td>{row.orders}</td>
                                <td>{row.earnings}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className={style.paginationDiv}>
                        <LeftArrow bg={"white"} isCategory={false} />
                        <p>Страница 1 из 10</p>
                        <div style={{marginRight: "10px"}}>
                            <RightArrow bg={"white"}/>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Referral;
