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

  openCallBack = () => {
    this.sendData();
    this.props.showModal();
  };

  closeCallBack = () => {
    this.sendData();
    this.props.closeModal();
  };

  render() {
    return (
      <div className="show-button">
        <button onClick={this.openCallBack}>
          <i className="far fa-plus-square"></i>
        </button>
        <button style={{ marginLeft: "20px" }} onClick={this.closeCallBack}>
          X
        </button>
        <div></div>
      </div>
    );
  }
}
