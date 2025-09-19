// import React from "react";

// export default function Book({ book }) {
//   return (
//     <div className="book-card">
//       <img src={book.image} alt={book.title} />
//       <h3>{book.title}</h3>
//       <p>{book.authors}</p>
//       <a href={book.url} target="_blank" rel="noopener noreferrer">
//         View Details
//       </a>
//     </div>
//   );
// }
// src/components/Book.js
import React from "react";

function Book({ title, price, image }) {
  return (
    <div className="book">
      <img src={image} alt={title} className="book-image" />
      <h3>{title}</h3>
      <p className="price">{price}</p>
    </div>
  );
}

export default Book;
