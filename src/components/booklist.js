/** @format */
import React from "react";

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
            {props.list.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>
                  <button onClick={() => props.removeBook(book)}>
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Booklist;
