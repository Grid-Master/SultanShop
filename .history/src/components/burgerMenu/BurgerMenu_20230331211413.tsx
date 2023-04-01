import { FC } from 'react';
import geo from '../../images/geo.png';
import message from '../../images/message.png';
import ring from '../../images/ring.png';
import './burgerMenu.sass';

const BurgerMenu: FC = () => {
  return (
    <div className="burgerMenu">
      <div className="burgerMenu-content">
        <div>
          <img src={geo} alt="geo" />
          <div>
            <h4>г. Кокчетав, ул. Ж. Ташенова 129Б</h4>
            <span>(Рынок Восточный)</span>
          </div>
        </div>
        <div>
          <img src={message} alt="message" />
          <div>
            <h4>г. Кокчетав, ул. Ж. Ташенова 129Б</h4>
            <span>(Рынок Восточный)</span>
          </div>
        </div>
        <div>
          <img src={ring} alt="ring" />
          <div>
            <h4>г. Кокчетав, ул. Ж. Ташенова 129Б</h4>
            <span>(Рынок Восточный)</span>
          </div>
        </div>
        <p>время работы: 9:00-20:00</p>
      </div>
    </div>
  );
};

export default BurgerMenu;
