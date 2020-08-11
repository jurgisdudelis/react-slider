import React from 'react';

class SliderLeftArrow extends React.Component {
  render() {
    return (
      <div
        className="slider__arrow slider__arrow--left"
        onClick={this.props.onClick}
      >
        <i className="fas fa-chevron-left fa-3x"></i>
      </div>
    );
  }
}

  export default SliderLeftArrow;