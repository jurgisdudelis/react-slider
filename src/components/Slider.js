import React from 'react';

import SliderLeftArrow from './SliderLeftArrow';
import SliderRightArrow from './SliderRightArrow';
import SliderIndicator from './SliderIndicator';
import SliderActiveSlide from './SliderActiveSlide';

const sliderContainer = document.querySelector(".slider-container");

class Slider extends React.Component {
    constructor(props) {
      super(props);
  
      this.goToSlide = this.goToSlide.bind(this);
      this.goToPrevSlide = this.goToPrevSlide.bind(this);
      this.goToNextSlide = this.goToNextSlide.bind(this);
      this.touch = this.touch.bind(this);
      this.touchStart = this.touchStart.bind(this);
      this.touchEnd = this.touchEnd.bind(this);
  
      this.state = {
        activeIndex: 0,
        startTouch: null
      };
    }
  
    goToSlide(index) {
      this.setState({
        activeIndex: index
      });
    }
  
    goToPrevSlide(e) {
      e.preventDefault();
      let index = this.state.activeIndex;
      let { slides } = this.props;
      let slidesLength = slides.length;
      
      if (index < 1) {
        index = slidesLength;
      }
  
      --index;
  
      this.setState({
        activeIndex: index
      });
    }
  
    goToNextSlide(e) {
      e.preventDefault();
  
      let index = this.state.activeIndex;
      let { slides } = this.props;
      let slidesLength = slides.length - 1;
  
      if (index === slidesLength) {
        index = -1;
      }
  
      ++index;
  
      this.setState({
        activeIndex: index
      });
    }
  
    touch(e) {
        return e.changedTouches ? e.changedTouches[0] : e
    };
  
    touchStart(e) {
        let startTouch = this.touch(e).clientX

        this.setState({
            startTouch: startTouch
        });
    };

    touchEnd(e) {
        let endTouch = this.touch(e).clientX;
        let startTouch = this.state.startTouch;

        if (Math.abs(startTouch - endTouch) > 25 && startTouch > endTouch) {
            this.goToNextSlide(e);
        }

        if (Math.abs(startTouch - endTouch) > 25 && startTouch < endTouch) {
            this.goToPrevSlide(e);
        }
    };
  
    render() {
        sliderContainer.addEventListener('mousedown', this.touchStart, false);
        sliderContainer.addEventListener('touchstart', this.touchStart, false);

        sliderContainer.addEventListener('touchmove', e => { e.preventDefault() }, false);

        sliderContainer.addEventListener('mouseup', this.touchEnd, false);
        sliderContainer.addEventListener('touchend', this.touchEnd, false);  
  
      return (
        <div className="slider">
        
          <ul>
            {this.props.slides.map((slide, index) =>
              <SliderActiveSlide
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                slide={slide}
              />
            )}
          </ul>

          <SliderLeftArrow onClick={e => this.goToPrevSlide(e)} />
          <SliderRightArrow onClick={e => this.goToNextSlide(e)} />
          <ul className="slider-indicators">
            {this.props.slides.map((slide, index) =>
              <SliderIndicator
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                isActive={this.state.activeIndex == index}
                onClick={e => this.goToSlide(index)}
              />
            )}
  
          </ul>
  
        </div>
      );
    }
  }

  export default Slider;