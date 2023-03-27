import React, { useState } from "react";
import "./NewArrivals.css";
import { Link } from "react-router-dom";
import FilterListIcon from "@material-ui/icons/FilterList";
import Product from "../Product/Product";
import pumaData from "../../Data";

function NewArrivals() {
  const [sort, setSort] = useState("Sort by");
  const [filteredData, setFilterData] = useState("FILTER");

  const sortedData = pumaData.slice().sort((a, b) => {
    if (sort === "Price High to Low") {
      return a.price < b.price ? 1 : -1;
    } else if (sort === "Price Low to High") {
      return a.price > b.price ? 1 : -1;
    } else {
      return a.id - b.id;
    }
  });

  const menWomenData =
    filteredData === "FILTER"
      ? sortedData
      : sortedData.filter((item) => item.category === filteredData);

  return (
    <div className="men">
      <div className="men_firstHeading">
        <Link to="/">
          <h5>Home</h5>
        </Link>
        <p>. New Arrival</p>
      </div>
      <div className="men_h3">
        <h2>New Arrival</h2>
      </div>
      <div className="men_filter_sort">
        <div>
          <FilterListIcon />
          <select
            className="filter_section"
            onChange={(e) => setFilterData(e.target.value)}
            value={filteredData}
          >
            <option>FILTER</option>
            <option>men</option>
            <option>women</option>
          </select>
        </div>
        <select
          className="sort_section"
          onChange={(e) => setSort(e.target.value)}
          value={sort}
        >
          <option>Sort by</option>
          <option>Price High to Low</option>
          <option>Price Low to High</option>
        </select>
      </div>
      <div className="pumadata">
        {menWomenData.map((item) => {
          return <Product {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default NewArrivals;