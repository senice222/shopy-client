import React, { FC, useState } from "react";
import s from '../CategoriesAndProducts.module.scss';
import { Arrow, Pencil, Trash } from "../Svg";
import axios from "axios";
import { useSWRConfig } from "swr";
import { url } from "../../../../core/fetch";

// import DeleteIcon from '@mui/icons-material/Delete';
import {SubCategoryI, SubCategoryIState} from "../../../../interfaces/Category";
import SubCategoryItem from "./SubCategoryItem";

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
    
    
    console.log(currentCatgeoryId, 1)
    
    return (
        <div className={`${s.item} ${opened ? s.active : ""}`}>
            <div className={s.topDiv} onClick={() => setOpened(prev => !prev)}>
                <h2>{main}</h2>
                <Arrow />
            </div>
            <div className={s.subCategories}>
                {sub.map((item, index) => (
                    // <div onClick={() => {
                    //     setCurrentCategory({name: item.name, mainCategoryName: main, _id: item._id})
                    // }} key={index} className={`${s.sub} ${currentCatgeoryId === item._id ? s.activeCategory : ''}`}>
                    //     {item.name}
                    //     {inModal && <div onClick={(e) => {
                    //         e.stopPropagation()
                    //     }} className={s.deleteIcon2}><Pencil/> <div onClick={() => deleteSubCategory(_id, item.name)}><Trash /></div></div>}
                    // </div>
                    <SubCategoryItem setCurrentCategory={setCurrentCategory} name={item.name} mainCategoryName={main} _id={_id} currentCatgeoryId={currentCatgeoryId} inModal={inModal} itemId={item._id} />
                ))}
            </div>
        </div>
    );
};

export default CategoryItem;