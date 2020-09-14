import React from 'react';

const SliderRightArrow = (props) => {
  return (
    <div className="arrow arrow--right" onClick={ props.onClick }>
      <i className="fas fa-chevron-right fa-4x"></i>
    </div>
  );
}

export default SliderRightArrow;