/** @format */
import React from "react";

function Booklist(props) {
  return (
    <div className="booklist-section">
      <div className="booklist-container">
        <table>
          <thead>
            <tr id="table-headers">
              <th></th>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th></th>
              <th>
                <button onClick={() => props.clearAll()}>
                  <i className="far fa-trash-alt"></i>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.list.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>
                  <input type="checkbox" onClick={e => props.check(e)}></input>
                </td>
                <td>
                  <button onClick={() => props.removeBook(index)}>
                    <i className="far fa-trash-alt"></i>
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
