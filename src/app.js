import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

import sliderData from './data/sliderData';
import Slider from './components/Slider';

const sliderContainer = document.querySelector(".slider-container");

ReactDOM.render(<Slider slides={sliderData} />, sliderContainer);
