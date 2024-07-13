import React, {FC} from 'react';
import style from './LeftArrow.module.scss'
import back from "../../assets/svg/arrow-left.svg";
import styles from "../Categories/Categories.module.scss";
import {useNavigate} from "react-router-dom";
import { motion } from 'framer-motion';

interface TitleArrow {
    title?: string,
    isCategory: boolean;
    marginLeft?: string;
}

const LeftArrow: FC<TitleArrow> = ({title, isCategory, marginLeft}) => {
    const navigate = useNavigate()

    const titleVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className={style.titleCategory} style={{ marginLeft }}>
            <div className={style.backHome} onClick={() => navigate('/')}>
                <motion.img
                    src={back}
                    alt="/"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            {isCategory && (
                <motion.h1
                    className={`${styles['category-title']} ${styles.title}`}
                    style={{ marginTop: "20px", marginLeft: "10px" }}
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {title}
                </motion.h1>
            )}
        </div>
    );
};

export default LeftArrow;
