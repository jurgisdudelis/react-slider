import React from 'react';

class SliderIndicator extends React.Component {
  render() {
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? "slider__indicator slider__indicator--active"
              : "slider__indicator"
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

  export default SliderIndicator;