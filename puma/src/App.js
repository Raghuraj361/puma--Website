import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import Kids from "./components/Kids/Kids";
import Cart from "./components/Product/Cart/Cart";
import AddCart from "./components/Product/Cart/AddCart/AddCart";
import Login from "./components/Login/Login";
import NewArrivals from "./components/NewArrivals/NewArrival";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newArrivals" element={<NewArrivals />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/addcart" element={<AddCart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;