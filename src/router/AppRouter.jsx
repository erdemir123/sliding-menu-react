import React from "react";
import { Route, Routes } from "react-router-dom";
import Basket from "../pages/Basket";
import Login from "../pages/Login";
import Store from "../pages/Storeproduct";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Store />} />
        <Route path="/login" element={<Login />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
