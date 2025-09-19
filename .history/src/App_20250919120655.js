// src/App.js
import React, { useState } from "react";
import Book from "./components/Book";
import data from "./data/books.json";
import "./App.css";

function App() {
  const [books, setBooks] = useState(data);

  const addBook = () => {
    const newBook = {
      title: "New JavaScript Book",
      price: `$${(Math.random() * 40 + 5).toFixed(2)}`,
      image: "https://via.placeholder.com/150" // placeholder image
    };
    setBooks([...books, newBook]);
  };

  return (
    <div className="App">
      <h1>Book Catalog</h1>
      <div className="grid">
        {books.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            price={book.price}
            image={book.image}
          />
        ))}
        <button className="add-button" onClick={addBook}>
          ➕ Add
        </button>
      </div>
    </div>
  );
}

export default App;
