import React from "react";
import "./Footer.css";

const Footer = () => {
  const top = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div className="back__button" onClick={top}>
        Back to top
      </div>
      <div className="footer_container">
        <div className="footer_left">
          <div className="footr_details_one">
            <h4>Support</h4>
            <p>Contact us</p>
            <p>Promotions & Sale</p>
            <p>Track Order</p>
            <p>Privacy Policy</p>
            <p>Initiate Return</p>
          </div>
          <div className="footr_details_one">
            <p>FAQs</p>
            <p>My Account</p>
            <p>Return Policy</p>
            <p>Terms & Conditions</p>
            <p>Cookie Settings</p>
          </div>
        </div>

        <div className="footer_right">
          <div className="footr_details_one forres">
            <h4>About</h4>
            <p>Company</p>
            <p>Press Center</p>
            <p>Sustainability</p>
            <p>Store Finder</p>
          </div>
          <div className="footr_details_one forres1">
            <p>Corporate News</p>
            <p>Investors</p>
            <p>Careers</p>
          </div>
        </div>
        <div className="navbar_input">
          <select className="footer_section">
            <option value="All">SELECT LANGUAGE</option>
            <option value="hindi">HINDI</option>
            <option value="english">ENGLISH</option>
            <option value="french">FRENCH</option>
            <option value="urdu">URDU</option>
          </select>
        </div>
      </div>

      <div className="last__footer">
        <div className="condion__footer"></div>
        <p className="bottom__paragraph">
          © PUMA India Ltd, 2023. All Rights Reserved.
          <br />
          Imprint and Legal Data
        </p>
      </div>
    </footer>
  );
};

export default Footer;