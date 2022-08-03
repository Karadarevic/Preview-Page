import React from "react";
import "./App.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="fullbox">
      <div className="center">
        <h1>
          Get <spam>insights</spam> that help <br />
          your business grow.
        </h1>
        <p>
          Discover the benefits of data analytics and make <br />
          better decisions regarding revenue, costumer
          <br /> experience, and overall eficiency
        </p>
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
            <li>12M+</li>
            <label>QUERIES</label>
          </ul>
        </div>
      </div>
      <div className="hero"></div>
    </div>
  );
};
