import { FC } from 'react';
import { useAppSelector } from '../../store/hook';
import CartItem from '../cartItem/CartItem';
import './cart.sass';

const Cart: FC = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.cart);

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__inner">
          <h1>Корзина</h1>
          <ul>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
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
