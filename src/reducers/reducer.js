import BOOKS_LOADED from '../actions/actionTypes';

const initialState = {
  books: [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
    },
    {
      id: 3,
      title: 'WOW React!',
      author: 'Max B. Good',
      price: 21,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_LOADED:
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
