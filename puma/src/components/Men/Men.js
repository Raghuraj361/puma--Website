import React from "react";
import "./Men.css";
import { Link } from "react-router-dom";
import FilterListIcon from "@material-ui/icons/FilterList";
import Product from "../Product/Product";
import pumaData from "../../Data";

function Men() {



  const menData = pumaData.filter((item) => item.category === "men");


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
          {/* <select className="filter_section">
            <option value="All">FILTERS</option>
            <option value="Alexa">1</option>
            <option value="Books">2</option>
          </select> */}
        </div>
        <select className="sort_section" >
          <option value="All">Sort by</option>
          <option value="high">Price High to Low</option>
          <option value="low">Price Low to High</option>
        </select>
      </div>
      <div className="pumadata">
        {
        menData.map((item) => {
          return <Product {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Men;