/** @format */

import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          backgroundColor: "#646165",
          height: "80px"
        }}
      >
        <h3>Book List App</h3>
        <a
          href="https://github.com/octaviandd"
          style={{
            color: "white",
            position: "absolute",
            top: "20px",
            right: "20px"
          }}
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    );
  }
}
