import React, {FC, useEffect, useState} from 'react';
import Layout from "../../layouts/Layout";
import Slider from "../../components/Slider/Slider";
import Search from "../../components/Search/Search";
import Categories from "../../components/Categories/Categories";
import ProductsList from "../../components/Products/ProductsList";
import {ModalAndFavorite} from "../../interfaces/ModalAndFavorite";
import { motion, AnimatePresence  } from 'framer-motion';
import styles from './Home.module.scss'

const Home: FC<ModalAndFavorite> = ({setAddedFunc, isAdd, added, setAdded}) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <Layout notAnimated={true}>
            <Slider/>
            <Search/>
            <Categories/>
            <ProductsList setAddedFunc={setAddedFunc} isAdd={isAdd} added={added} setAdded={setAdded}/>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        className={styles.scrollToTop}
                        onClick={scrollToTop}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        ↑
                    </motion.div>
                )}
            </AnimatePresence>
        </Layout>
    );
};

export default Home;
