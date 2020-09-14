import React from 'react';

const SliderLeftArrow = (props) => {
  return (
    <div className="arrow arrow--left" onClick={ props.onClick }>
      <i className="fas fa-chevron-left fa-4x"></i>
    </div>
  );
}

export default SliderLeftArrow;