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
          backgroundColor: "green"
        }}
      >
        <h3>Book List App</h3>
      </div>
    );
  }
}
