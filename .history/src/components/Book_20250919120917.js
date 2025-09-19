function Book({ book }) {
  return (
    <div className="book">
      <img src={book.image} alt={book.title} className="book-image" />
      <h3>{book.title}</h3>
      <p className="price">{book.price}</p>
    </div>
  );
}
