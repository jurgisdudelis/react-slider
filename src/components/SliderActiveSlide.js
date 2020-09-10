import React from 'react';

const SliderActiveSlide = (props) => {
  return (
    <div
      className={
        props.index == props.activeIndex
          ? "slider__slide slider__slide--active"
          : "slider__slide"
      }
    >
      <p className="slider-slide__image">
        {props.slide.img}
      </p>
      <p className="slider-slide__content">
        {props.slide.content}</p>
      <p className="slider-slide__description">
        {props.slide.description}
      </p>
    </div>
  );
}

export default SliderActiveSlide;