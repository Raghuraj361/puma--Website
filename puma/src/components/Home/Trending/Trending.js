import React from "react";
import "./Trending.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Trending() {
  return (
    <div>
      <h2 className="trending_h2">TOP AND TRENDING</h2>
      <Carousel
        className="carousel__container"
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        containerClass="carousel-container"
      >
        <div>
          <img
            className="carousel_img"
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/377316/04/sv01/fnd/IND/fmt/png/Liberate-Nitro-2-Women's-Running-Shoes"
          />
        </div>
        <div>
          <img
            className="carousel_img"
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/307136/07/sv01/fnd/IND/fmt/png/Mercedes-AMG-Petronas-F1-X-Ray-Speed-Unisex-Sneakers"
          />
        </div>
        <div>
          <img
            className="carousel_img"
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374902/01/sv01/fnd/IND/fmt/png/PUMA-Serve-Pro-Lite-Unisex-Shoes"
          />
        </div>
        <div>
          <img
            className="carousel_img"
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/390755/01/sv01/fnd/IND/fmt/png/RS-X-Efekt-Unisex-Sneakers"
          />
        </div>
        <div>
          <img
            className="carousel_img"
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/306975/01/sv01/fnd/IND/fmt/png/BMW-M-Motorsport-City-Rider-Sneakers"
          />
        </div>
        <div>
          <img
            className="carousel_img"
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/368153/03/sv01/fnd/IND/fmt/png/Smash-Ace-Unisex-Sneakers"
          />
        </div>
        <div>
          <img
            className="carousel_img"
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/307036/03/sv01/fnd/IND/fmt/png/Mercedes-AMG-Petronas-F1-Maco-SL-Unisex-Sneakers"
          />
        </div>
        <div>
          <img
            className="carousel_img"
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/389289/05/sv01/fnd/IND/fmt/png/Trinity-Men's-Sneakers"
          />
        </div>
        <div>
          <img
            className="carousel_img"
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/307136/07/sv01/fnd/IND/fmt/png/Mercedes-AMG-Petronas-F1-X-Ray-Speed-Unisex-Sneakers"
          />
        </div>
      </Carousel>
      <hr />
      <div className="training_elevated"> </div>
      <div className="training_head_button">
        <h2>
          PUMA FIT COLLECTION <br />
          TRAINING ELEVATED
        </h2>
        <button>SHOP COLLECTION</button>
        <button>EXPLORE TRAINING COLLECTION</button>
      </div>
    </div>
  );
}

export default Trending;