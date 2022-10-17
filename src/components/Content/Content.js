import React from "react";
import logoNCC from "../../assets/logoNCC 1.svg";
import Course from "../Course/Course";
import htmlIcon from "../../assets/html-icon 1.svg";
import cssIcon from "../../assets/css-icon 1.svg";
import urllIcon from "../../assets/url-icon 1.svg";

import "./Content.css";
import Footer from "../Footer/Footer";

const courseImgs = [htmlIcon, cssIcon, urllIcon];

function Content() {
  return (
    <div>
      <div className="top">
        <img className="top-logo" src={logoNCC} alt="ncc-logo" />
      </div>

      <div className="middle">
        <div className="middle-text">
          <p className="title">Lorem ipsum dolor sit amet?</p>
          <div className="text-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </div>
        </div>
      </div>

      <div className="bottom">
        {courseImgs.map((course) => (
          <Course key={course} imgUrl={course} />
        ))}
      </div>
    </div>
  );
}

export default Content;
