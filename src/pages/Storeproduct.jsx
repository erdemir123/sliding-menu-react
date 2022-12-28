import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../component/Navbar";
import { clearProducts, getProduct } from "../features/ProductSlice";
import loadingif from "../asset/images/loading.gif";
import errorgif from "../asset/images/error.gif";
import Card from "../component/Card";
import storeProductStyle from "./storeProduct.module.css";
const Store = () => {
  const { productList, loading, error } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);
  const { basket } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
    return () => {
      dispatch(clearProducts());
    };
  }, []);
  return (
    <div>
      <Navbar />
      {loading && <img src={loadingif} alt="alt" style={{width:"100vw"}}/>}
      {error && <img src={errorgif} alt="alt" />}
      <div className={storeProductStyle["container"]}>
        {productList.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  );
};

export default Store;
