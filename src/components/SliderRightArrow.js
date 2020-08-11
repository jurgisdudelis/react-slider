import React from 'react';

class SliderRightArrow extends React.Component {
  render() {
    return (
      <div
        className="slider__arrow slider__arrow--right"
        onClick={this.props.onClick}
      >
        <i className="fas fa-chevron-right fa-3x"></i>
      </div>
    );
  }
}

  export default SliderRightArrow;