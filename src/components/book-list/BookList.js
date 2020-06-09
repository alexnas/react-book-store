import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import withBookstoreService from '../hoc/with-bookstore-service';
import BookListItem from '../book-list-item/BookListItem';
import { booksLoaded } from '../../actions/actionCreators';
import './BookList.css';

class BookList extends Component {
  state = {};

  componentDidMount() {
    const { bookstoreService } = this.props;
    bookstoreService.getBooks().then(data => {
      this.props.booksLoaded(data);
    });
  }

  render() {
    const { books } = this.props;
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
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
