import React from "react";
import "./Book.css";

function Book({ book }) {
  return (
    <div className="book">
      <img src={book.image} alt={book.title} className="book-image" />
      <h2 className="book-title">{book.title}</h2>
      <p className="book-price">{book.price}</p> {/* 👈 price instead of author */}
    </div>
  );
}

export default Book;
