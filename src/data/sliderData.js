import React from 'react';

const sliderData = [
  {
    content: "Item One",
    description: "Here is a short description of the content"
  },
  {
    content: <img src="https://www.athmin.com/img/hiredeveloper/gif/react.gif" alt="React Gif" width="200" height="200"></img>,
    description: "React gif using <img> attribute"
  },
  {
    content: "Item Three",
    description: "This is Item Three"
  },
  {
    content: <iframe width="311" height="200" src="https://www.youtube.com/embed/gx4rsZkCCss" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
    description: "Embedded video using <iframe> attribute"
  },
  {
    content: "Item Five",
    description: "This is Item Five"
  },
  {
    content: <a href="https://reactjs.org/">reactjs.org</a>,
    description: "External link using <a> attribute"
  }
];

export default sliderData;
