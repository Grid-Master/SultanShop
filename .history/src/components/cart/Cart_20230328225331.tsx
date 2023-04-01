import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import CartItem from '../cartItem/CartItem';
import './cart.sass';

const Cart: FC = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.cart);

  const getTotalSum = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__inner">
          <h1>Корзина</h1>
          {cartItems.length ? (
            <ul>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
          ) : (
            <h3>корзина пуста</h3>
          )}
          <div>
            <button>Оформить заказ</button>
            <h2>{getTotalSum() || 0} ₸</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
