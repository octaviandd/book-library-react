/** @format */
import React from "react";
import Book from "./book";

function Booklist(props) {
  return (
    <div className="booklist-section">
      <div className="booklist-container">
        <table>
          <thead>
            <tr id="table-headers">
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>History of Humankind</td>
              <td>Goerge Best</td>
              <td>2312022</td>
              <td>X</td>
            </tr>
            {props.list.map(book => (
              <tr>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Booklist;
