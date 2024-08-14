import React, { useEffect, useState } from 'react';
import BookDetails from './BookDetails';


function BookList() {
  const [books, setBooks] = useState([]);

  const [cart, setCart] = useState([]);

const addToCart = (book) => {
  setCart([...cart, book]);
};



  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=javascript')
      .then(response => response.json())
      .then(data => setBooks(data.items || []));
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
