/** @format */
import React from "react";

export default class Showform extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  sendData = modal => {
    this.props.callBack(modal);
  };

  callBack = () => {
    this.sendData();
    this.props.handleModal();
  };

  render() {
    return (
      <div className="show-button">
        <button onClick={this.callBack}>
          <i className="far fa-plus-square"></i>
        </button>
      </div>
    );
  }
}
