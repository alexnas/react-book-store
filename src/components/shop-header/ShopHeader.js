import React from 'react';

import './ShopHeader.css';

const Shopheader = ({ numItems, total }) => {
  return (
    <header className='shop-header row'>
      <a href='#' className='logo text-dark'>
        ReStore
      </a>
      <a>
        <i href='#' className='cart-icon fa fa-shopping-cart' />
        &nbsp;{numItems}&nbsp;items (${total})
      </a>
    </header>
  );
};

export default Shopheader;
