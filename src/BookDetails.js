import React from 'react';

function BookDetails({ book, addToCart }) {
    return (
      <div>
        <h1>{book.volumeInfo.title}</h1>
        <h3>Author: {book.volumeInfo.authors?.join(', ')}</h3>
        <p>{book.volumeInfo.description}</p>
        <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
        <button onClick={() => addToCart(book)}>Add to Cart</button>
      </div>
    );
  }
  

export default BookDetails;
