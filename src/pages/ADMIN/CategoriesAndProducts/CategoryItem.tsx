import React, { FC, useState } from "react";
import s from './CategoriesAndProducts.module.scss';
import { Arrow } from "./Svg";

interface CategoryItemI {
    main: string;
    sub: string[];
}

const CategoryItem: FC<CategoryItemI> = ({ main, sub }) => {
    const [opened, setOpened] = useState(false);
    return (
        <div className={`${s.item} ${opened ? s.active : ""}`}>
            <div className={s.topDiv} onClick={() => setOpened(prev => !prev)}>
                <h2>{main}</h2>
                <Arrow />
            </div>
            <div className={s.subCategories}>
                <div className={s.sub}>
                    Суб-категория
                </div>
                {sub.map((item, index) => (
                    <div key={index} className={s.sub}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryItem;