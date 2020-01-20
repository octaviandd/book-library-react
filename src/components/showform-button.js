/** @format */

import React from "react";
import "./App.css";
import Header from "./components/header";
import Bookform from "./components/addbookform";
import Booklist from "./components/booklist";
import Showform from "./components/showform-button";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          title: "The Undiscovered Self",
          author: "Carl Jung",
          isbn: "8334012"
        },
        {
          title: "The Republic",
          author: "Plato",
          isbn: "9382882"
        }
      ],
      show: false,
      read: false
    };
  }

  callBackFunction = (data, modal) => {
    this.setState(currentState => {
      currentState.books.push(data);
      return {
        books: currentState.books,
        show: modal
      };
    });
  };

  callBackFunction2 = modal => {
    this.setState(currentState => {
      return {
        show: modal
      };
    });
  };

  handleModal = () => {
    this.setState({
      show: !this.state.show
    });
  };

  removeBook = index => {
    this.setState(currentState => {
      currentState.books.splice(index, 1);
      return {
        books: currentState.books
      };
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Booklist list={this.state.books} removeBook={this.removeBook} />
        <Bookform
          callBack={this.callBackFunction}
          modal={this.state.show}
          closeModal={this.handleModal.bind(this)}
        />
        <Showform
          show={this.state.show}
          callBack={this.callBackFunction2}
          handleModal={this.handleModal}
        />
      </div>
    );
  }
}
