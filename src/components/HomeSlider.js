import { useState } from "react";

import slide1 from "../images/slides01.jpg";
import slide2 from "../images/slides02.jpg";

import "../css/style.css";

function HomeSlider() {
  const slides = [
    {
      id: "slide1",
      image: slide1,
      title: "Breathtaking views",
      subtitle: "Relaxation in the Bay of Belfalas",
    },
    {
      id: "slide2",
      image: slide2,
      title: "The simple life",
      subtitle: "Lush gardens in Mordor",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  }

  function prevSlide() {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  }

  return (
    <div id="carousel-example-generic" className="carousel slide">
      <div className="carousel-inner" role="listbox">
        {slides.map((slide, index) => (
          <div
            key={index}
            id={slide.id}
            className={index === currentSlide ? "item active" : "item"}
            style={{
              background: `url(${slide.image}) no-repeat left center`,
              backgroundSize: "cover",
            }}
          >
            <div className="carousel-caption">
              <div className="caption sfr slider-title">{slide.title}</div>

              <div className="caption sfl slider-subtitle">
                {slide.subtitle}
              </div>

              <a href="#" className="caption sfb btn btn-default btn-lg">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      <div id="home-search-section"></div>

      <a className="left carousel-control" onClick={prevSlide}>
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>

      <a className="right carousel-control" onClick={nextSlide}>
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default HomeSlider;
