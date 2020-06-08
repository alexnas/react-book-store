import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app/App';
import store from './store';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import { BookstoreServiceProvider } from './components/bookstore-service-context/BookstoreServiceContext';
import BookstoreService from './services/bookstore-service';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <App />
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>,

  document.getElementById('root')
);
