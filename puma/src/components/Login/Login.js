import React, { useEffect, useState } from "react";
import "./Login.css";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom"


function Login() {

  const [{user}, dispatch] = useStateValue();
  console.log(user);
  let navigate = useNavigate();
 


  const signIN = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

 

  return (
    <>
      <h2 className="my_account">My account</h2>
      <div className="login">
        <div className="login_register">
          <span>Login</span>
          <hr />
        </div>
        <div className="phone_input">
          <button onClick={signIN}>LOGIN WITH GOOGLE</button>
        </div>
        <div className="otp_verification">
          An OTP will be sent to your mobile number for verification
        </div>
        <div className="login_password">
          <span>LOGIN WITH EMAIL AND PASSWORD</span>
          <span>LOGIN WITH PHONE AND PASSWORD</span>
        </div>
      </div>
    </>
  );
}

export default Login;