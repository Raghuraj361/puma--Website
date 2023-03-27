import React, { useState } from "react";
import "./Cart.css";
import { useParams } from "react-router-dom";
import pumaData from "../../../Data";
import { useStateValue } from "../../StateProvider/StateProvider";

function Cart() {
  const { id } = useParams();
  const [{ basket }, dispatch] = useStateValue();
  const [quantity, setQuantity] = useState(1);

  const filterData = pumaData.find((item) => item.id === parseInt(id));

  const addToBasket = (product, quantity) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        product,
        quantity,
      },
    });
  };
  // console.log(basket);

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrease = () => {
    if (quantity < 1) return;
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="cart">
      <div className="cart_left">
        <img src={filterData.image} />
      </div>

      <div className="cart_right">
        <div className="cart_name_price">
          <span>{filterData.name}</span>
          <span> ₹{filterData.price}</span>
        </div>
        <div className="size">
          <div className="cart_size_button">
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>10</button>
          </div>
          <span>Size</span>
        </div>

        <div className="cart_addSection">
          <div className="cart_countity_add_section">
            <div className="cart_countity">
              <button onClick={decrease}>-</button>
              <span>{quantity}</span>
              <button onClick={increase}>+</button>
            </div>
            <button onClick={() => addToBasket(filterData, quantity)}>
              ADD TO CART
            </button>
          </div>
          <button className="wish_button">ADD TO WISHLIST</button>
        </div>
        <span className="free">FREE RETURN ON ALL OUALIFYING ORDERS</span>
        <hr />
        <div className="cart_pin_code">
          <span>Please enter PIN code to check delivery time</span>
          <div className="pin_input">
            <input placeholder="PIN code" />
            <button>CHECK</button>
          </div>
        </div>
        <div className="cart_description">
          <h4>Description</h4>
          <p>{filterData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;