import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import withBookstoreService from '../hoc/with-bookstore-service';
import BookListItem from '../book-list-item/BookListItem';
import {
  booksLoaded,
  booksRequested,
  booksError,
} from '../../actions/actionCreators';
import Spinner from '../../components/spinner/Spinner';
import ErrorIndicator from '../../components/error-indicator/ErrorIndicator';
import './BookList.css';

class BookList extends Component {
  state = {};

  componentDidMount() {
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError,
    } = this.props;
    booksRequested();
    bookstoreService
      .getBooks()
      .then(data => booksLoaded(data))
      .catch(err => {
        booksError(err);
      });
  }

  render() {
    const { books, loading, error } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
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
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError,
};

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookList);
