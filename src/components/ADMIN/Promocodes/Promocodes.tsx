import s from './Promocodes.module.scss'
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import useSWR from "swr";
import {fetcher, url} from "../../../core/fetch";
import {Search} from "../../../pages/ADMIN/Feedback/Svgs";
import {Pencil, Trash} from "../../../pages/ADMIN/CategoriesAndProducts/Svg";
import Pagination from "../../Pagination/Pagination";
import AddPromo from "../../Modals/AddPromo/AddPromo";
import Loader from "../../Loader/Loader";

const Promocodes = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number | null>(null);
    const [promo, setModal] = useState<boolean>(false)
    const {data: promos} = useSWR(`${url}/api/promo`, fetcher);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        if (promos) {
            setTotalPages(promos.totalPages);
        }
    }, [promos]);

    if (!promos) return <Loader/>

    return (
        <div className={s.feedback}>
            <AddPromo open={promo} setOpen={setModal}/>
            <div className={s.topDiv}>
                <h3>Промокоды</h3>
                <div className={s.searchWrapper}>
                    <div className={s.searchDiv}>
                        <Search/>
                        <input type="text" placeholder="Поиск по промокодам"/>
                    </div>
                    <button onClick={() => setModal(true)}>Добавить промокод</button>
                </div>
            </div>
            <table className={s.usersTable}>
                <thead>
                <tr>
                    <th className={s.name}>Промокод</th>
                    <th>Скидка в %</th>
                    <th>Действует до</th>
                    <th>Использовано раз</th>
                    <th>Описание</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {promos ? promos.products.map((item: any, i: number) =>
                    <tr key={i}>
                        <td className={s.td1}>
                            <p>{item.title}</p>
                        </td>
                        <td className={s.td1}>
                            <p>{item.discount}</p>
                        </td>
                        <td className={s.td1}>
                            <p>{item.expireAt}</p>
                        </td>
                        <td className={s.td1}>
                            <p>{item.maxUses}</p>
                        </td>
                        <td className={s.td1}>
                            <p>{item.description}</p>
                        </td>
                        <td className={s.lastTd}>
                            <span className={s.icon} onClick={() => null}>
                                <Trash/>
                            </span>
                            <span onClick={() => null} className={s.icon}>
                                <Pencil/>
                            </span>
                        </td>
                    </tr>
                ) : <p>loading..</p>
                }
                </tbody>
            </table>
            <div className={s.paginationContainer}>
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
};

export default Promocodes;
