// ProductComponent.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/ProductSlice/ProductSlice";

const ProductComponent = () => {
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
      {status === "failed" && <p>Error: {error}</p>}
    </div>
  );
};

export default ProductComponent;
