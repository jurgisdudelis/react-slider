import React from "react";

const SliderIndicator = (props) => {
  return (
    <li>
      <a
        className={
          props.index == props.activeIndex
            ? "indicator indicator--active"
            : "indicator"
        }
        onClick={props.onClick}
      />
    </li>
  );
};

export default SliderIndicator;
