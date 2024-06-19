import AdminLayout from "../../../layouts/AdminLayout";
import style from './Panel.module.scss'

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
                    <div className={style.fastMoves}>
                        <h2>Быстрые действия</h2>

                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Panel;
