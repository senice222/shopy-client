import React, { FC, useState } from "react";
import s from '../CategoriesAndProducts.module.scss';
import { Arrow, Pencil, Trash } from "../Svg";

// import DeleteIcon from '@mui/icons-material/Delete';
import {SubCategoryI, SubCategoryIState} from "../../../../interfaces/Category";

interface CategoryItemI {
    main: string;
    sub: SubCategoryI[];
    _id: string,
    setCurrentCategory: (a : SubCategoryIState) => void,
    currentCatgeoryId?: string,
    inModal?: boolean
}

const CategoryItem: FC<CategoryItemI> = ({ inModal, main, sub, _id, setCurrentCategory , currentCatgeoryId}) => {
    const [opened, setOpened] = useState(false);
    console.log(main)
    return (
        <div className={`${s.item} ${opened ? s.active : ""}`}>
            <div className={s.topDiv} onClick={() => setOpened(prev => !prev)}>
                <h2>{main}</h2>
                <Arrow />
            </div>
            <div className={s.subCategories}>
                {sub.map((item, index) => (
                    <div onClick={() => {
                        setCurrentCategory({name: item.name, mainCategoryName: main, _id: item._id})
                    }} key={index} className={`${s.sub} ${currentCatgeoryId === item._id ? s.activeCategory : ''}`}>
                        {item.name}
                        {inModal && <div onClick={(e) => {
                            e.stopPropagation()
                        }} className={s.deleteIcon2}><Pencil/> <Trash /></div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryItem;