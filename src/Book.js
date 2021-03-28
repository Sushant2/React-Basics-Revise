//here doing default export

import React from "react";

const Book = (props) => {
  // attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = () => {
    alert("Hello World");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  // const Book = ({img, title, author, children}) => {
  const { img, title, author } = props; // here we're not destructuring the props, else we r destructuring the book
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h4 onClick={() => console.log(title)}>{title}</h4>
      <h5>{author}</h5>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex
      </button>
    </article>
  );
};
export default Book;
