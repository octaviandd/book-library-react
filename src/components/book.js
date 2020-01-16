/** @format */
import React from "react";

class Book extends React.Component {
  constructor(title, author, isbn) {
    super();
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

export default Book;
