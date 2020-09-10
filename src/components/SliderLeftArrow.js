import React from 'react';

const SliderLeftArrow = (props) => {
  return (
    <div
      className="slider__arrow slider__arrow--left"
      onClick={props.onClick}
    >
      <i className="fas fa-chevron-left fa-4x"></i>
    </div>
  );
}

export default SliderLeftArrow;