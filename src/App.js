import React from "react";
import "./App.css";
import imageHeader from "./images/image-header-desktop.jpg";
import imageMobile from "./images/image-header-mobile.jpg";

export default () => {
  return (
    <div className="fullbox">
      <div className="card">
        <div className="center">
          <div className="main">
            <p className="line">Get insights that help your business grow.</p>
          </div>
          <div className="description">
            <p className="text">
              {" "}
              Discover the benefits of data analytics and make better decisions
              regarding revenue, costumer experience, and overall eficiency
            </p>
          </div>
          <div className="status">
            <ul>
              <li>10k+</li>
              <label>COMPANIES</label>
            </ul>
            <ul>
              <li>314</li>
              <label>TEMPLATES</label>
            </ul>
            <ul>
              {" "}
              <li>12M+</li>
              <label>QUERIES</label>
            </ul>
          </div>
        </div>
        <div className="hero"></div>
      </div>
    </div>
  );
};
