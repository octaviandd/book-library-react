/** @format */

import React from "react";
import "./App.css";
import Header from "./components/header";
import Bookform from "./components/addbookform";
import Booklist from "./components/booklist";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          title: "How to code",
          author: "Mark Marky",
          isbn: "22323222"
        },
        {
          title: "how to make a booklist app",
          author: "octavian david",
          isbn: "23223223"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Booklist list={this.state.books} />
        <Bookform />
      </div>
    );
  }
}
