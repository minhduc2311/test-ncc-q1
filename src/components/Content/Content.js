import React from "react";
import logoNCC from "../../assets/logoNCC 1.svg"
import Course from "../Course/Course";
import htmlIcon from "../../assets/html-icon 1.svg"
import cssIcon from "../../assets/css-icon 1.svg"
import urllIcon from "../../assets/url-icon 1.svg"

import "./Content.css"

const courseImgs = [
    htmlIcon, cssIcon, urllIcon
]

function Content() {
  return (
    <div className="content-container">
      <div className="top">
        <img src={logoNCC} alt="ncc-logo"/>
      </div>

    <div className="middle">
      <p className="title">Lorem ipsum dolor sit amet?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
    </div>

    <div className="bottom">
      {courseImgs.map((course) => (
        <Course key={course} imgUrl={course}/>
      ) )}
    </div>

    
    <div className="footer">
      Copyright © 2021
    </div>
    </div>
  );
}

export default Content;
