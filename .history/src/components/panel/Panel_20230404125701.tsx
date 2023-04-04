import { FC, useState } from 'react';
import { useAppSelector } from '../../store/hook';
import { useNavigate } from 'react-router-dom';
import './panel.sass';

import logo from '../../images/logo.png';
import frame from '../../images/frame.png';
import search from '../../images/search.png';
import consultant from '../../images/consultant.png';
import download from '../../images/download.png';
import cart from '../../images/cart.png';
import burger from '../../images/burger2.png';
import cross from '../../images/cross2.png';
import BurgerMenu from '../burgerMenu/BurgerMenu';

export interface IPanelProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Panel: FC<IPanelProps> = ({ active, setActive }) => {
  const navigate = useNavigate();
  const cartItems = useAppSelector((state) => state.cartReducer.cart);

  const getTotalSum = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.count;
    });
    return total.toFixed(2);
  };

  const navigateCartHandler = () => {
    window.scrollTo(0, 0);
    setActive(false);
    navigate('/SultanShop/cart');
  };

  return (
    <>
      <div className="panel">
        <div className="container">
          <div className="panel__inner">
            <div onClick={() => setActive(!active)} className="panel__inner-burger">
              <img src={active ? cross : burger} alt="burger" />
            </div>
            <img className="panel__inner-logo" src={logo} alt="logo" />
            <button
              onClick={() => navigate('/SultanShop/catalog')}
              className="panel__inner-catalog">
              <p>Каталог</p>
              <img src={frame} alt="frame" />
            </button>
            <div className="panel__inner-search">
              <input type="text" placeholder="Поиск..." />
              <button>
                <img src={search} alt="search" />
              </button>
            </div>
            <div className="panel__inner-consultant">
              <div>
                <h4>+7 (777) 490-00-91</h4>
                <p>время работы: 9:00-20:00</p>
                <span>Заказать звонок</span>
              </div>
              <img src={consultant} alt="consultant" />
            </div>
            <button className="panel__inner-pricelist">
              Прайс-лист
              <img src={download} alt="download" />
            </button>
            <div className="panel__inner-cart">
              <img src={cart} alt="cart" onClick={navigateCartHandler} />
              {cartItems.length ? <span>{cartItems.length}</span> : null}
              <div>
                <p>Корзина</p>
                <h4>{getTotalSum()} ₸ </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BurgerMenu active={active} setActive={setActive} />
    </>
  );
};

export default Panel;
