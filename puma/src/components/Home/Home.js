import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Trending from "./Trending/Trending";

function Home() {
  return (
    <div className="home">
      <div className="hero"> </div>
      <div className="home_flex">
        <div>
          <h2>
            GET DRIPPIN' IN <br />
            THE LATEST DROPS
          </h2>
        </div>
        <div className="btn">
          <Link to="/men">
            <button>MEN</button>
          </Link>
          <Link to="/women">
            <button>WOMEN</button>
          </Link>
          <Link to="/kids">
            <button>KIDS</button>
          </Link>
        </div>
      </div>
      <Trending />
    </div>
  );
}

export default Home;