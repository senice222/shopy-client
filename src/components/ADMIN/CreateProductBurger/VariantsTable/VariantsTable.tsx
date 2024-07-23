import React, {useState} from 'react';
import s from "./VariantsTable.module.scss";
import {tableData} from "../../../../utils/dummy_data";
import BlueButton from "../../../Button/Button";
import {TableRow} from "../../../../interfaces/Product";

const VariantsTable = () => {
    const [productList, setProductList] = useState(tableData);

    return (
        <div className={s.products}>
            <div className={s.tableDiv}>
                <table className={s.usersTable}>
                    <thead>
                    <tr>
                        <th>Цена</th>
                        <th>Старая цена</th>
                        <th>Свойство ✏️</th>
                        <th>Свойство ✏️</th>
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
                                {item.actions.map((action, index) => (
                                    <span style={{paddingRight: "7px", cursor: "pointer"}} key={index}>{action}</span>
                                ))}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className={s.btnDiv}>
                <BlueButton text={"Добавить вариант товара"} width={"238px"} height={"44px"}/>
                <button className={s.white}>Добавить свойство</button>
            </div>
        </div>
    );
};

export default VariantsTable;
