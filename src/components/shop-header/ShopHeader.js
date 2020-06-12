import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  getOrderTotal,
  getCountTotal,
} from '../../selectors/shoppingCartSelectors';
import './ShopHeader.css';

const Shopheader = ({ numItems, total }) => {
  return (
    <header className='shop-header row'>
      <Link to='/'>
        <div className='logo text-dark'>ReStore</div>
      </Link>
      <Link to='/cart'>
        <div className='shopping-cart'>
          <i className='cart-icon fa fa-shopping-cart' />
          &nbsp;{numItems}&nbsp;items (${total})
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    total: getOrderTotal(state),
    numItems: getCountTotal(state),
  };
};

export default connect(mapStateToProps)(Shopheader);
