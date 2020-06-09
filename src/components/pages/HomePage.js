import React from 'react';

import withBookstoreService from '../hoc/with-bookstore-service';
import BookList from '../../components/book-list/BookList';

const HomePage = ({ bookstoreService }) => {
  const { books } = bookstoreService;
  console.log(books);

  return (
    <div>
      <h2>Home</h2>
      <BookList books={books} />
    </div>
  );
};

export default withBookstoreService()(HomePage);
