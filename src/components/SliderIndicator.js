import React from 'react';

const SliderIndicator = (props) => {
  return (
    <li>
      <a
        className={
          props.index == props.activeIndex
            ? "slider-indicator slider-indicator--active"
            : "slider-indicator"
        }
        onClick={props.onClick}
      />
    </li>
  );
}

export default SliderIndicator