import { FC, useState } from 'react';
import { useAppSelector } from '../../store/hook';
import CartItem from '../cartItem/CartItem';
import './cart.sass';

const Cart: FC = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.cart);
  const [priceSum, setPriceSum] = useState<number>(0);

  setPriceSum(
    cartItems.reduce(function (sum, item) {
      return sum + item.price;
    }, 0),
  );

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
            <h1>корзина пуста</h1>
          )}
          <div>
            <button>Оформить заказ</button>
            <h2>1 348,76 ₸</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
