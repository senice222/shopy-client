import AdminLayout from "../../../layouts/AdminLayout";
import style from './Panel.module.scss'
import FastMoves from "../../../components/ADMIN/FastMoves/FastMoves";
import Button from "../../../components/Button/Button";
import reverse from '../../../assets/reverse-left.png'

const Panel = () => {
    return (
        <AdminLayout>
            <div className={style.panelWrapper}>
                <div className={style.header}>
                    <h2>Панель управления</h2>
                </div>
                <div className={style.totalInfo}>
                    <div className={style.info}>
                        <div>
                            <p>Всего пользователей</p>
                            <h2>4,862</h2>
                        </div>
                        <div>
                            <p>Активных пользователей</p>
                            <h2>2,671</h2>
                        </div>
                        <div>
                            <p>Заказов за месяц</p>
                            <h2>1,322</h2>
                        </div>
                    </div>
                    <FastMoves/>
                </div>
                <div className={style.wrapper}>
                    <div className={style.lastOrders}>
                        <div className={style.orderHeader}>
                            <h2>Последние заказы</h2>
                            <Button text={"Перейти"} height={"40px"} width={"92px"} fontSize={"14px"}/>
                        </div>
                        <div className={style.container}>
                            <div className={style.scrollContainer}>
                                <table className={style.ordersTable}>
                                    <thead>
                                    <tr>
                                        <th>Заказ</th>
                                        <th>Товар</th>
                                        <th>Статус</th>
                                        <th>Действия</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className={style.id}>#3066</td>
                                        <td>Monthly subscription</td>
                                        <td className={style.status}>
                                            <div className={style.wrapperPaid}>
                                                <div className={style.paid}>✔ Paid</div>
                                            </div>
                                        </td>
                                        <td className={style.actions}>
                                            <span className={style.info}>ℹ</span>
                                            <span className={style.edit}>✎</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.id}>#3065</td>
                                        <td>Monthly subscription</td>
                                        <td className={style.status}>
                                            <div className={style.wrapperPaid}>
                                                <div className={style.paid}>✔ Paid</div>
                                            </div>
                                        </td>
                                        <td className={style.actions}>
                                            <span className={style.info}>ℹ</span>
                                            <span className={style.edit}>✎</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.id}>#3064</td>
                                        <td>Monthly subscription</td>
                                        <td className={style.status}>
                                            <div className={style.wrapperPaid}>
                                                <div className={style.paid}>✔ Paid</div>
                                            </div>
                                        </td>
                                        <td className={style.actions}>
                                            <span className={style.info}>ℹ</span>
                                            <span className={style.edit}>✎</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.id}>#3063</td>
                                        <td>Monthly subscription</td>
                                        <td className={style.status}>
                                            <div className={style.wrapperPaid}>
                                                <div className={style.paid}>✔ Paid</div>
                                            </div>
                                        </td>
                                        <td className={style.actions}>
                                            <span className={style.info}>ℹ</span>
                                            <span className={style.edit}>✎</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.id}>#3062</td>
                                        <td>Monthly subscription</td>
                                        <td className={`${style.status} ${style.refunded}`}>
                                            <div className={style.wrapperPaid}>
                                                <div className={style.refunded}>
                                                    <img src={reverse} alt="/"/>
                                                    <p>Refunded</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={style.actions}>
                                            <span className={style.info}>ℹ</span>
                                            <span className={style.edit}>✎</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.id}>#3061</td>
                                        <td>Monthly subscription</td>
                                        <td className={style.status}>
                                            <div className={style.wrapperPaid}>
                                                <div className={style.paid}>✔ Paid</div>
                                            </div>
                                        </td>
                                        <td className={style.actions}>
                                            <span className={style.info}>ℹ</span>
                                            <span className={style.edit}>✎</span>
                                        </td>
                                    </tr>
                                    {/*<tr>*/}
                                    {/*    <td className={style.id}>#3061</td>*/}
                                    {/*    <td>Monthly subscription</td>*/}
                                    {/*    <td className={style.status}>*/}
                                    {/*        <div className={style.wrapperPaid}>*/}
                                    {/*            <div className={style.paid}>✔ Paid</div>*/}
                                    {/*        </div>*/}
                                    {/*    </td>*/}
                                    {/*    <td className={style.actions}>*/}
                                    {/*        <span className={style.info}>ℹ</span>*/}
                                    {/*        <span className={style.edit}>✎</span>*/}
                                    {/*    </td>*/}
                                    {/*</tr>*/}
                                    {/*<tr>*/}
                                    {/*    <td className={style.id}>#3061</td>*/}
                                    {/*    <td>Monthly subscription</td>*/}
                                    {/*    <td className={style.status}>*/}
                                    {/*        <div className={style.wrapperPaid}>*/}
                                    {/*            <div className={style.paid}>✔ Paid</div>*/}
                                    {/*        </div>*/}
                                    {/*    </td>*/}
                                    {/*    <td className={style.actions}>*/}
                                    {/*        <span className={style.info}>ℹ</span>*/}
                                    {/*        <span className={style.edit}>✎</span>*/}
                                    {/*    </td>*/}
                                    {/*</tr>*/}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className={style.lastOrders}>
                        <div className={style.orderHeader}>
                            <h2>Последние пользователи</h2>
                            <Button text={"Перейти"} height={"40px"} width={"92px"} fontSize={"14px"}/>
                        </div>
                        <div className={style.container}>
                            <div className={style.scrollContainer}>
                                <table className={style.ordersTable}>
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Статус</th>
                                        <th>Id</th>
                                        <th>Действия</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className={style.id}>Olivia Rhye</td>
                                        <td className={style.status}>
                                            <div className={style.wrapperPaid}>
                                                <div className={style.paid}>✔ Paid</div>
                                            </div>
                                        </td>
                                        <td>1000103230</td>
                                        <td className={style.actions}>
                                            <span className={style.info}>ℹ</span>
                                            <span className={style.edit}>✎</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.id}>Olivia Rhye</td>
                                        <td className={style.status}>
                                            <div className={style.wrapperPaid}>
                                                <div className={style.paid}>✔ Paid</div>
                                            </div>
                                        </td>
                                        <td>1000103230</td>
                                        <td className={style.actions}>
                                            <span className={style.info}>ℹ</span>
                                            <span className={style.edit}>✎</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.id}>Olivia Rhye</td>
                                        <td className={style.status}>
                                            <div className={style.wrapperPaid}>
                                                <div className={style.paid}>✔ Paid</div>
                                            </div>
                                        </td>
                                        <td>1000103230</td>
                                        <td className={style.actions}>
                                            <span className={style.info}>ℹ</span>
                                            <span className={style.edit}>✎</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.id}>Olivia Rhye</td>
                                        <td className={style.status}>
                                            <div className={style.wrapperPaid}>
                                                <div className={style.paid}>✔ Paid</div>
                                            </div>
                                        </td>
                                        <td>1000103230</td>
                                        <td className={style.actions}>
                                            <span className={style.info}>ℹ</span>
                                            <span className={style.edit}>✎</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.id}>Olivia Rhye</td>
                                        <td className={style.status}>
                                            <div className={style.wrapperPaid}>
                                                <div className={style.paid}>✔ Paid</div>
                                            </div>
                                        </td>
                                        <td>1000103230</td>
                                        <td className={style.actions}>
                                            <span className={style.info}>ℹ</span>
                                            <span className={style.edit}>✎</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={style.id}>Olivia Rhye</td>
                                        <td className={style.status}>
                                            <div className={style.wrapperPaid}>
                                                <div className={style.paid}>✔ Paid</div>
                                            </div>
                                        </td>
                                        <td>1000103230</td>
                                        <td className={style.actions}>
                                            <span className={style.info}>ℹ</span>
                                            <span className={style.edit}>✎</span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Panel;
