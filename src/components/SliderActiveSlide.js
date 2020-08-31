import React from 'react';

class SliderActiveSlide extends React.Component {
  render() {
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "slider__slide slider__slide--active"
            : "slider__slide"
        }
      >
        <p className="slider-slide__image">
          {this.props.slide.img}
        </p>
        <p className="slider-slide__content">
          {this.props.slide.content}</p>
        <p className="slider-slide__description">
          {this.props.slide.description}
        </p>
      </li>
    );
  }
}

  export default SliderActiveSlide;