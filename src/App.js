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
      show: false
    };
  }

  showModal = e => {
    this.setState({
      show: true
    });
  };

  callBackFunction = data => {
    this.setState(currentState => {
      currentState.books.push(data);
      return {
        books: currentState.books
      };
    });
  };

  removeBook = book => {
    this.setState(currentState => {
      currentState.books.splice(book, 1);
      return {
        book: currentState.books
      };
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Booklist list={this.state.books} removeBook={this.removeBook} />
        <Bookform callBack={this.callBackFunction} show={this.showModal} />
        <Showform show={this.showModal} />
      </div>
    );
  }
}
