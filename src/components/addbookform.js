/** @format */
/** @format */

import React from "react";
import Book from "./book";

export default class Bookform extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      isbn: "",
      books: []
    };
    console.log(this.state);
  }

  updateTitle(e) {
    const value = e.target.value;
    this.setState(currentState => ({
      title: value
    }));
  }

  updateAuthor(e) {
    const value = e.target.value;
    this.setState(currentState => ({
      author: value
    }));
  }

  updateIsbn(e) {
    const value = e.target.value;
    this.setState(currentState => ({
      isbn: value
    }));
    console.log(this.state);
  }

  Bookfactory(title, author, isbn) {
    return {
      title,
      author,
      isbn
    };
  }

  addNewBook(e) {
    e.preventDefault();
    let title = this.state.title;
    let author = this.state.author;
    let isbn = this.state.isbn;
    let book = this.Bookfactory(title, author, isbn);
    this.state.books.push(book);
  }

  render() {
    return (
      <div className="form-section">
        <form onSubmit={this.addNewBook.bind(this)}>
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.updateTitle.bind(this)}
          ></input>
          <input
            type="text"
            placeholder="Author"
            value={this.state.author}
            onChange={this.updateAuthor.bind(this)}
          ></input>
          <input
            type="text"
            value={this.state.isbn}
            placeholder="ISBN"
            onChange={this.updateIsbn.bind(this)}
          ></input>
          <input type="submit" value="Add Book"></input>
        </form>
      </div>
    );
  }
}
