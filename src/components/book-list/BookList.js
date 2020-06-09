import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import './BookList.css';
import BookListItem from '../book-list-item/BookListItem';

class BookList extends Component {
  state = {};
  render() {
    const { books } = this.props;
    return (
      <Fragment>
        <h2>BookList</h2>
        <ul>
          {books &&
            books.map(book => {
              return (
                <li key={book.id}>
                  <BookListItem book={book} />
                </li>
              );
            })}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
};

export default connect(mapStateToProps)(BookList);
