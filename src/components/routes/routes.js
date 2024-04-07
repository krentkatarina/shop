import React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import Home from "../Home/Home";
import SingleProduct from "../Products/SingleProduct.js";
import Profile from "../Profile/Profile.js";
import SingleCategory from '../Categories/SingleCategory.js'
import Cart from "../Cart/Cart.js";

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTES.Product} element={<SingleProduct />} />
    <Route path={ROUTES.Profile} element={<Profile />} />
    <Route path={ROUTES.Category} element={<SingleCategory />} />
    <Route path={ROUTES.Cart} element={<Cart />} />
  </Routes>
);

export default AppRoutes;