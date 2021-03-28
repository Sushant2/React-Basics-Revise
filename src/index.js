import React from "react";
import ReactDom from "react-dom";

//css
import "../src/index.css";

import { books } from "../src/books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((bookie) => {
        return (
          // <Book key={bookie.id} bookProp={bookie}></Book> //const {img, title, author} = bookie //destructuring
          <Book key={bookie.id} {...bookie}></Book>
        );
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
