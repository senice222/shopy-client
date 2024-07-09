import React, {useState} from 'react';
import styles from './Categories.module.scss'
import {useNavigate} from "react-router-dom";
import {motion} from 'framer-motion'

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

    const handleClick = (item: string) => {
        navigate("/category/music")
    };

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.125, 
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.4 } 
        },
    };


    return (
        <div className={styles.category}>
            <div className={`${styles.category__content} ${styles.container}`}>
                <h1 className={`${styles['category-title']} ${styles.title}`}>Категории</h1>
                <motion.div
                    className={styles['categories-body']}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {categories.map((item, i) => (
                        <motion.div
                            onClick={() => handleClick(item.title)}
                            key={i}
                            className={styles['category-card']}
                            variants={itemVariants}
                        >
                            <img
                                src={require(`../../assets/svg/${item.img}.svg`)}
                                alt={item.title}
                            />
                            <h1 className={styles['card-title']}>{item.title}</h1>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Categories;
