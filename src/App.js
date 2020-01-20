/** @format */

import React from "react";
import "./App.css";
import Header from "./components/header";
import Bookform from "./components/addbookform";
import Booklist from "./components/booklist";
import Showform from "./components/showform-button";
// import Readbooks from "./components/read-books";

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

  //Bookform callback
  callBackFunction = (data, modal) => {
    this.setState(currentState => {
      currentState.books.push(data);
      return {
        books: currentState.books,
        show: modal
      };
    });
  };

  //Showform callback
  callBackFunction2 = modal => {
    this.setState(currentState => {
      return {
        show: modal
      };
    });
  };

  //Booklist check

  checkBox = event => {
    if (event.target.checked) {
      event.target.closest("tr").style.backgroundColor = "#218838";
    } else {
      event.target.closest("tr").style.backgroundColor = "";
    }
  };

  //Showform and bookform callback
  handleModal = () => {
    this.setState({
      show: !this.state.show
    });
  };

  //Booklist method
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
        <Booklist
          list={this.state.books}
          removeBook={this.removeBook}
          check={this.checkBox}
        />
        <Bookform
          callBack={this.callBackFunction}
          modal={this.state.show}
          closeModal={this.handleModal.bind(this)}
          read={this.state.read}
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
