/** @format */

import React from "react";

export default class Bookform extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      isbn: "",
      books: []
    };
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
  }

  Bookfactory(title, author, isbn) {
    return {
      title,
      author,
      isbn
    };
  }

  sendData = data => {
    this.props.callBack(data);
  };

  addNewBook(e) {
    e.preventDefault();
    let title = this.state.title;
    let author = this.state.author;
    let isbn = this.state.isbn;
    let book = this.Bookfactory(title, author, isbn);
    this.state.books.push(book);
    this.sendData(book);
    this.setState(currentState => ({
      isbn: "",
      title: "",
      author: ""
    }));
  }

  render() {
    if (this.props.show) {
      console.log(this.props.show);
      return null;
    }
    return (
      <div className="form-section">
        <form onSubmit={this.addNewBook.bind(this)}>
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            required
            onChange={this.updateTitle.bind(this)}
          ></input>
          <input
            type="text"
            placeholder="Author"
            value={this.state.author}
            required
            onChange={this.updateAuthor.bind(this)}
          ></input>
          <input
            type="text"
            value={this.state.isbn}
            placeholder="ISBN"
            required
            onChange={this.updateIsbn.bind(this)}
          ></input>
          <input type="submit" value="Add Book"></input>
        </form>
      </div>
    );
  }
}
