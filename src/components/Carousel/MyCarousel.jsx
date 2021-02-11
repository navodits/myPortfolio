import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../assets/img/carousal/slide1.jpeg";
import slide2 from "../../assets/img/carousal/slide2.jpg";
import slide3 from "../../assets/img/carousal/slide3.webp";
import "./myCarousel.css";
import Scroll from "./../Scroll";

const slides = [slide1, slide2, slide3];

const MyCarousel = () => {
  return (
    <div id="home" className="carousel">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        {slides.map((slide) => (
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={slide}
              alt="background slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Scroll />
    </div>
  );
};

export default MyCarousel;
