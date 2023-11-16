import React, { useEffect, useState } from "react";

import sliderservice from "../../service/SliderService";

import SliderItem from "../../component/SliderItem";



function Slider() {
  const [sliders, setProduct] = useState([]);

  useEffect(function () {
    (async function () {
      await sliderservice.getAll().then(function (result) {
        setProduct(result.data.data);
      });
    })();
  }, []);
  return (
    <section className="section-main padding-bottom pt-2">
    <div
      id="carousel1_indicator"
      className="slider-home-banner carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators carousel-controls"></ol>
      <div className="carousel-inner">
        {sliders.map((item, index) => {
          return <SliderItem location={index} item={item} />;
        })}
      </div>
      <a
        className="carousel-control-prev carousel-controls"
        href="#carousel1_indicator"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next carousel-controls"
        href="#carousel1_indicator"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </section>
  );
}
export default Slider;
