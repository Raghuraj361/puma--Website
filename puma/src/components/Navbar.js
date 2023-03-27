import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider/StateProvider";
import { auth } from "../firebase";
import { getTotalQuantity } from "../Reducer";

function Navbar() {
  const navigate = useNavigate();
  const [{ basket, user }] = useStateValue();
  const totalQuantity = getTotalQuantity(basket);


  const handleLogout = () => {
    if (user) {
      auth.signOut();
      navigate("/login");
    }
  };

  const [scrolled, setScrolled] = useState(false);

  function handleScroll() {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar ${scrolled ? "sticky__header" : ""}`}>
        <div className="navbar_leftSection">
          <Link to="/">
            <div className="navbar_icon">
              <img src="https://www.transparentpng.com/thumb/puma-logo/It9NZf-puma-logo-transparent.png" />
            </div>
          </Link>
          <Link to="/newArrivals">
            <div className="navbar_sec_text">New Arrivals</div>
          </Link>
          <Link to="/women">
            <div className="navbar_sec_text">Woman</div>
          </Link>
          <Link to="/men">
            <div className="navbar_sec_text">Man</div>
          </Link>
          <Link to="/kids">
            <div className="navbar_sec_text">Kids</div>
          </Link>
          <div className="navbar_sec_text">Motorsport</div>
          <div className="navbar_sec_text">Collaborations</div>
          <div className="navbar_sec_text">Sports</div>
          <div className="navbar_sec_text">Outlet</div>
        </div>
        <div className="navbar_rightSection">
          <div className="navbar_input" >
            <SearchIcon className="icon_input" />
            <input placeholder="SEARCH PUMA.COM" />
          </div>
          <div className="user_icons">
            <FavoriteBorderIcon />
            <div className="busket_icon">
              <AddShoppingCartIcon onClick={() => navigate(`/addcart`)} />
              {!!basket.length > 0 && <span>{totalQuantity}</span>}
            </div>
            <div
              onClick={() => navigate("/login")}
              className="navbar_loginUser"
            >
              <PermIdentityIcon onClick={handleLogout} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;