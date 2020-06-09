import { BOOKS_LOADED } from './actionTypes';

const booksLoaded = newBooks => {
  return {
    type: BOOKS_LOADED,
    payload: newBooks,
  };
};

export { booksLoaded };
