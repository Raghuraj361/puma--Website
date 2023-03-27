import React from "react";
import "./AddCart.css";
import { useStateValue } from "../../../StateProvider/StateProvider";
import { getTotalCartAmount, getTotalQuantity } from "../../../../Reducer";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom"

function AddCart() {
  const [{ basket }, dispatch] = useStateValue();
  const totalProduct = getTotalQuantity(basket);
  const cartTotal = getTotalCartAmount(basket);
  const navigate = useNavigate();

  const handleQuantity = (buttonType, item) => {
    dispatch({
      type: "QUANTITY_UPADTE",
      payload: {
        buttonType,
        item,
      },
    });
  };

  const handleRemoveFromCart = (item) => {
    dispatch({
      type: "REMOVE_CART",
      payload: {
        item,
      },
    });
  };

  return (
    <>
      <h2 className="addcart__title">MY SHOPPING CART ({totalProduct})</h2>
      <div className="addcart">
        <div className="addcart_left">
          {basket.map((item) => (
            <div className="productcart">
              <div className="image_container">
                <img src={item.image} alt="shoe" />
              </div>
              <div className="product_detail">
                <div className="name__wrapper">
                  <h4>{item.name}</h4>
                  <h4>₹{item.price * item.quantity}</h4>
                </div>
                <div className="quantity__wrapper">
                  <div className="quantity">
                    <span onClick={() => handleQuantity("dec", item)}>-</span>
                    <span>{item.quantity}</span>
                    <span onClick={() => handleQuantity("inc", item)}>+</span>
                  </div>
                  <div onClick={() => handleRemoveFromCart(item)} className='deleteIcon' >
                    <DeleteIcon />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="Right">
          <div className="total">
            <h4>GRAND TOTAL</h4>
            <h4>₹{cartTotal}</h4>
          </div>
          <div className="btn">
            <button onClick={()=> navigate(`/login`)}>CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCart;