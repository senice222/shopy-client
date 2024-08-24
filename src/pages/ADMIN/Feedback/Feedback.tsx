import React, {useState, useEffect} from "react";
import s from "./Feedback.module.scss";
import {Search} from "./Svgs";
import {useNavigate} from 'react-router-dom'
import {Pencil, Trash} from "../CategoriesAndProducts/Svg";
import useSWR from "swr";
import {fetcher, url} from "../../../core/fetch";
import Pagination from "../../../components/Pagination/Pagination";

const Feedback = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate()
    const [totalPages, setTotalPages] = useState<number | null>(null);
    const {data: feedbacks} = useSWR(
        `${url}/api/feedback/?page=${currentPage}&limit=10`,
        fetcher
    );
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    useEffect(() => {
        if (feedbacks) {
            console.log(feedbacks.totalPages, 228)
            setTotalPages(feedbacks.totalPages);
        }
    }, [feedbacks]);
    if (!feedbacks) {
        return <div>Loading...</div>;
    }

    return (
        <div className={s.feedback}>
            <div className={s.topDiv}>
                <h3>Обратная связь</h3>
                <div className={s.searchWrapper}>
                    <div className={s.searchDiv}>
                        <Search/>
                        <input type="text" placeholder="Поиск"/>
                    </div>
                    <button>Добавить новую</button>
                </div>
            </div>
            <table className={s.usersTable}>
                <thead>
                <tr>
                    <th className={s.name}>Название</th>
                    <th>Применено к товарам</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {feedbacks.feedbacks.map((item: any, i: any) => <tr onClick={() => navigate('/panel/feedback/asd')}
                                                                    key={i}>
                    <td className={s.td1}>
                        <p>{item.name}</p>
                    </td>
                    <td className={s.td2}>
                        <p>{item.products?.map((item: any) => <p>{item}</p>)}</p>
                    </td>
                    <td className={s.lastTd}>
              <span className={s.icon} onClick={() => null}>
                <Trash/>
              </span>
                        <span onClick={() => null} className={s.icon}>
                <Pencil/>
              </span>
                    </td>
                </tr>)}
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
    );
};

export default Feedback;
