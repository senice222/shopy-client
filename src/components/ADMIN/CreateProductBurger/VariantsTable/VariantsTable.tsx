import React, { useState } from 'react';
import s from "./VariantsTable.module.scss";
import { tableData } from "../../../../utils/dummy_data";
import BlueButton from "../../../Button/Button";
import { TableRow } from "../../../../interfaces/Product";
import { Pencil } from '../../../Modals/AdminModals/UserMessage/Svgs';
import { Copy, Eye, Trash, Message, Percent } from '../../../../pages/ADMIN/CategoriesAndProducts/Svg';
import Banner from '../../../Modals/AdminModals/Banner/Banner';

const VariantsTable = () => {
    const [productList, setProductList] = useState(tableData);
    const [banner, setBanner] = useState<boolean>(false)

    const toggleBanner = () => {
        setBanner(prev => !prev);
    };

    return (
        <>
            <Banner banner={banner} setBanner={toggleBanner} />
            <div className={s.products}>
                <div className={s.tableDiv}>
                    <table className={s.usersTable}>
                        <thead>
                            <tr>
                                <th>Цена</th>
                                <th>Старая цена</th>
                                <th style={{ whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                                    Свойство <span style={{ verticalAlign: 'middle', marginLeft: '5px' }}><Pencil /></span>
                                </th>
                                <th style={{ whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                                    Свойство <span style={{ verticalAlign: 'middle', marginLeft: '5px' }}><Pencil /></span>
                                </th>
                                <th>Количество</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList.map((item: TableRow, i) => (
                                <tr key={i}>
                                    <td>{item.price}</td>
                                    <td>{item.oldPrice}</td>
                                    <td>{item.property1}</td>
                                    <td>{item.property2}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <span style={{ paddingRight: "12px", cursor: "pointer" }}><Eye /></span>
                                        <span style={{ paddingRight: "12px", cursor: "pointer" }}><Copy /></span>
                                        <span style={{ paddingRight: "12px", cursor: "pointer" }}><Trash /></span>
                                        <span style={{ paddingRight: "12px", cursor: "pointer" }} onClick={() => setBanner(true)}><Message /></span>
                                        <span style={{ paddingRight: "12px", cursor: "pointer" }}><Percent /></span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={s.btnDiv}>
                    <BlueButton text={"Добавить вариант товара"} width={"238px"} height={"44px"} />
                    <button className={s.white}>Добавить свойство</button>
                </div>
            </div>
        </>
    );
};

export default VariantsTable;
