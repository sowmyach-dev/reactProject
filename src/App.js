// src/App.js

import React, { useState } from 'react';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState('');

  const handleAddToCart = (book) => {
    setCart([...cart, book]);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <BookList onBookSelect={setSelectedBook} query={query} />
      {selectedBook && <BookDetails book={selectedBook} onAddToCart={handleAddToCart} />}
      <Cart cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />
      <Checkout cartItems={cart} />
    </div>
  );
}

export default App;
