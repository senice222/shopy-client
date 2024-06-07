import React, {FC} from 'react';
import Layout from "../../layouts/Layout";
import Slider from "../../components/Slider/Slider";
import Search from "../../components/Search/Search";
import Categories from "../../components/Categories/Categories";
import ProductsList from "../../components/Products/ProductsList";
import AnimatedPage from "../AnimatedPage/AnimatedPage";
import {ModalAndFavorite} from "../../interfaces/ModalAndFavorite";

const Home:FC<ModalAndFavorite> = ({setAddedFunc, isAdd, added, setAdded}) => {

    return (
        <Layout>
            <AnimatedPage>
                <Slider/>
                <Search/>
                <Categories/>
                <ProductsList setAddedFunc={setAddedFunc} isAdd={isAdd} added={added} setAdded={setAdded}/>
            </AnimatedPage>
        </Layout>
    );
};

export default Home;
