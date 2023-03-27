import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

function Product({ id, name, price, image }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="product" onClick={() => navigate(`/cart/${id}`)}>
        <div className="product_image">
          <img src={image} />
        </div>
        <div className="product_name">
          <span>{name} </span>
          <span> ₹{price}</span>
        </div>
      </div>
    </>
  );
}

export default Product;