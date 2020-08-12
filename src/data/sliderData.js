import React from 'react';

const sliderData = [
  {
    content: "Item One",
    description: "Here is a short description of the content"
  },
  {
    content: <img src="https://hackernoon.com/hn-images/1*KBGdMaU_emZX4XR1AvkD4A.gif" alt="React Gif" width="516" height="150"></img>,
    description: "React Gif using <img> attribute"
  },
  {
    content: <iframe width="340" height="190" src="https://www.youtube.com/embed/gx4rsZkCCss" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
    description: "Embedded video using <iframe> attribute"
  },
  {
    content: <a href="https://www.youtube.com/">youtube.com</a>,
    description: "External link using <a> attribute"
  },
  {
    content: "Item Five",
    description: "..."
  },
  {
    content: "Item Six",
    description: "..."
  },
];

export default sliderData;
