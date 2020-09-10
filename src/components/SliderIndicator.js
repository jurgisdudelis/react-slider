import React from 'react';

const SliderIndicator = (props) => {
  return (
    <li>
      <a
        className={
          props.index == props.activeIndex
            ? "slider__indicator slider__indicator--active"
            : "slider__indicator"
        }
        onClick={props.onClick}
      />
    </li>
  );
}

export default SliderIndicator