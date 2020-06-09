import React from 'react';

import BookList from '../../components/book-list/BookList';
import ShoppingCartTable from '../../components/shopping-cart-table/ShoppingCartTable';

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
