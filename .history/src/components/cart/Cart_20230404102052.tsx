import { FC } from 'react';
import { useAppSelector } from '../../store/hook';
import { useHref, useNavigate } from 'react-router-dom';
import CartItem from '../cartItem/CartItem';
import arrow from '../../images/arrow4.png';
import './cart.sass';

const Cart: FC = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.cart);
  const router = useHref('order');
  const navigate = useNavigate();

  const getTotalSum = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.count;
    });
    return total.toFixed(2);
  };

  const navigateHandler = () => {
    navigate(router);
    window.scrollTo(0, 0);
  };

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__inner">
          <button onClick={() => navigate('/catalog')}>
            <img src={arrow} alt="arrow" />
          </button>
          <h1>Корзина</h1>
          {cartItems.length ? (
            <ul>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
          ) : (
            <h3>Корзина пуста</h3>
          )}
          <div>
            <button onClick={navigateHandler}>Оформить заказ</button>
            <h2>{getTotalSum() || 0} ₸</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
