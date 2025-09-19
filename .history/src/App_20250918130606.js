import data from '../data/books.json';
import React, { useState, useEffect } from "react";
import Book from "./components/Book";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  const isbnList = ["9781617294136", "9781492051138"]; 

  useEffect(() => {
    async function fetchBooks() {
      const results = [];
      for (const isbn of isbnList) {
        const res = await fetch(`https://api.itbook.store/1.0/books/${isbn}`);
        const data = await res.json();
        results.push(data);
      }
      setBooks(results);
    }
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>📚 My Book Catalog</h1>
      </header>

      <main className="content">
        {books.map((book) => (
          <Book key={book.isbn13} book={book} />
        ))}

        <button className="add-button">+ Add</button>
      </main>

      <footer className="footer">
        <p>© 2025 My Book Catalog - V2</p>
      </footer>
    </div>
  );
}

export default App;
