import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import withBookstoreService from '../hoc/with-bookstore-service';
import { fetchBooks, bookAddedToCart } from '../../actions/actionCreators';
import BookList from './BookList';
import Spinner from '../spinner/Spinner';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

class BookListContainer extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: id => dispatch(bookAddedToCart(id)),
  };
};

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookListContainer);
