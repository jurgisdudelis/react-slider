import React from 'react';

const SliderActiveSlide = (props) => {
  return (
    <div className={ props.index == props.activeIndex ? "slide slide--active" : "slide"}>
      <p className="slide-image"> { props.slide.img } </p>
      <p className={ props.index == props.activeIndex ? "slide-content slide-content--active" : "slide-content"}> { props.slide.content } </p>
      <p className={ props.index == props.activeIndex ? "slide-description slide-description--active" : "slide-description"}> { props.slide.description } </p>
    </div>
  );
}

export default SliderActiveSlide;