import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

import sliderData from './data/sliderData';
import Slider from './components/Slider';

ReactDOM.render(<Slider slides={sliderData} />, document.getElementById('app'));