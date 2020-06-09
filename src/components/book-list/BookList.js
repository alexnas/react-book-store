import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import withBookstoreService from '../hoc/with-bookstore-service';
import BookListItem from '../book-list-item/BookListItem';
import { booksLoaded } from '../../actions/actionCreators';
import Spinner from '../../components/spinner/Spinner';
import './BookList.css';

class BookList extends Component {
  state = {};

  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;
    bookstoreService.getBooks().then(data => booksLoaded(data));
  }

  render() {
    const { books, loading } = this.props;
    if (loading) {
      return <Spinner />;
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

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps = {
  booksLoaded,
};

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookList);
