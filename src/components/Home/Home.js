
import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Poster from '../Poster/Poster.js';
import Products from "../Products/Products.js";
import Categories from "../Categories/Categories.js";
import Banner from "../Banner/Banner.js";
import { filteresByPrice } from "../../features/products/productsSlice.js";

const Home = () => {
    const dispatch = useDispatch();
    const {
         products: { list, filtered}, 
         categories
    } = useSelector((state) => state)

    useEffect(() => {
        if(!list.length) return;

        dispatch(filteresByPrice(100))
    }, [dispatch, list.length]);

    return (
       <>
        <Poster/>
        <Products products={list} amount={5} title="Trending"  />
        <Categories products={categories.list} amount={5} title="Worth seeing"  />
        <Banner/>
        <Products products={filtered} amount={5} title="Less than 100$"  />
       </>
    ) 
}

export default Home;