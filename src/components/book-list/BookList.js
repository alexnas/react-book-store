import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import withBookstoreService from '../hoc/with-bookstore-service';
import BookListItem from '../book-list-item/BookListItem';
import { fetchBooks } from '../../actions/actionCreators';
import Spinner from '../../components/spinner/Spinner';
import ErrorIndicator from '../../components/error-indicator/ErrorIndicator';
import './BookList.css';

class BookList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchBooks();
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

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
  };
};

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookList);
