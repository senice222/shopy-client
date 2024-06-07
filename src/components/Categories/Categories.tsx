import React, {useState} from 'react';
import styles from './Categories.module.scss'
import {useNavigate} from "react-router-dom";

const Categories = () => {
    const navigate = useNavigate()

    const categories = [
        {
            img: "headphones",
            title: "Музыка",
        },
        {
            img: "tickets",
            title: "Кино",
        },
        {
            img: "screen",
            title: "Работа",
        },
        {
            img: "hello",
            title: "Нейросети",
        },
        {
            img: "view",
            title: "Игры",
        },
        {
            img: "figures",
            title: "Лайфстайл",
        },
        {
            img: "cards",
            title: "Развлечения",
        },
        {
            img: "advertising",
            title: "Соц.сети",
        },
        {
            img: "AppStore",
            title: "App Store",
        },
    ]

    const handleClick = () => {
        navigate("/category/music")
        window.scrollTo({
            top: 0,
            // behavior: 'smooth'
        });
    };

    return (
        <div className={styles.category}>
            <div className={`${styles.category__content} ${styles.container}`}>
                <h1 className={`${styles['category-title']} ${styles.title}`}>Категории</h1>
                <div className={styles['categories-body']}>
                    {categories.map((item, i) => (
                        <div onClick={handleClick} key={i} className={styles['category-card']}>
                            <img
                                src={require(`../../assets/svg/${item.img}.svg`)}
                                alt={item.title}
                            />
                            <h1 className={styles['card-title']}>{item.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
