import React from "react";
import "./Women.css";
import { Link } from "react-router-dom";
import FilterListIcon from "@material-ui/icons/FilterList";
import Product from "../Product/Product";
import pumaData from "../../Data";

function Women() {
  const womenData = pumaData.filter((item) => item.category === "women");

  return (
    <div className="men">
      <div className="men_firstHeading">
        <Link to="/">
          <h5>Home</h5>
        </Link>
        <p>. Men</p>
      </div>
      <div className="men_h3">
        <h2>MEN</h2>
      </div>
      <div className="men_filter_sort">
        <div>
          <FilterListIcon />
        </div>
        <select className="sort_section">
          <option value="All">Sort by</option>
          <option value="high">Price High to Low</option>
          <option value="low">Price Low to High</option>
        </select>
      </div>
      <div className="pumadata">
        {womenData.map((item) => {
          return <Product {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Women;