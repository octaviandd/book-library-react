/** @format */

import React from "react";
import Book from "./book";

export default class Bookform extends React.Component {
  render() {
    return (
      <div className="form-section">
        <form>
          <input type="text" placeholder="Title"></input>
          <input type="text" placeholder="Author"></input>
          <input type="text" placeholder="ISBN"></input>
          <button>Add boook</button>
        </form>
      </div>
    );
  }
}
