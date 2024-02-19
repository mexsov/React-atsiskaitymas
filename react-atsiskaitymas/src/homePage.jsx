import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const updateBookStatus = async (id, reserved) => {
    try {
      await axios.put(`https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books/${id}`, { reserved: !reserved });
      fetchBooks(); 
    } catch (error) {
      console.error('Error updating book status:', error);
    }
  };

  return (
    <div>
      <h1>Knygu sarasas</h1>
      {books.map(book => (
        <div key={book.id}>
          <img src={book.image} alt={book.title} />
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.reserved ? 'Rezervuota' : 'Laisva'}</p>
          <button onClick={() => updateBookStatus(book.id, book.reserved)}>
            {book.reserved ? 'Rezervuota' : 'Pasiskolinti'}
          </button>
        </div>
      ))}
    </div>
  );
};

