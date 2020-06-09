import React from 'react';

import BookListItem from '../book-list-item/BookListItem';
import './BookList.css';

const BookList = ({ books }) => {
  return (
    <ul className='book-list'>
      {books &&
        books.map(book => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
    </ul>
  );
};

export default BookList;
