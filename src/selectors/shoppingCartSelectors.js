import { createSelector } from 'reselect';

export const getCartItems = state => state.shoppingCart.cartItems;

export const getOrderTotal = createSelector(
  getCartItems,
  cartItems =>
    cartItems.reduce((total, item) => {
      return total + item.total;
    }, 0)
);

export const getCountTotal = createSelector(
  getCartItems,
  cartItems =>
    cartItems.reduce((total, item) => {
      return total + item.count;
    }, 0)
);
