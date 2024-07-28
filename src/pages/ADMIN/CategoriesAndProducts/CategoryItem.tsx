import React, { FC, useState } from "react";
import s from './CategoriesAndProducts.module.scss';
import { Arrow } from "./Svg";
import {SubCategoryI, SubCategoryIState} from "../../../interfaces/Category";

interface CategoryItemI {
    main: string;
    sub: SubCategoryI[];
    _id: string,
    setCurrentCategory: (a : SubCategoryIState) => void
}

const CategoryItem: FC<CategoryItemI> = ({ main, sub, _id, setCurrentCategory }) => {
    const [opened, setOpened] = useState(false);
    return (
        <div className={`${s.item} ${opened ? s.active : ""}`}>
            <div className={s.topDiv} onClick={() => setOpened(prev => !prev)}>
                <h2>{main}</h2>
                <Arrow />
            </div>
            <div className={s.subCategories}>
                {sub.map((item, index) => (
                    <div onClick={() => setCurrentCategory({name: item.name, mainCategoryName: main, _id: item._id})} key={index} className={s.sub}>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryItem;