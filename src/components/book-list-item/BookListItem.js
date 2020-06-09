import React, { Fragment } from 'react';

import './BookListItem.css';

const BookListItem = ({ book }) => {
  const { title, author } = book;

  return (
    <Fragment>
      <h2>BookListItem</h2>
      <span>{title}</span>
      <span>{author}</span>
    </Fragment>
  );
};

export default BookListItem;
