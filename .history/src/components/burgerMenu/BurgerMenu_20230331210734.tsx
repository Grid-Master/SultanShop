import { FC } from 'react';
import location from '../../images/location.png';
import message from '../../images/message.png';
import ring from '../../images/ring.png';
import './burgerMenu.sass';

const BurgerMenu: FC = () => {
  return (
    <div className="burgerMenu">
      <div className="burgerMenu-content">
        <div>
          <img src={location} alt="gseo" />
          <div>
            <h4>г. Кокчетав, ул. Ж. Ташенова 129Б</h4>
            <span>(Рынок Восточный)</span>
          </div>
        </div>
        <div>
          <img />
          <div>
            <h4>г. Кокчетав, ул. Ж. Ташенова 129Б</h4>
            <span>(Рынок Восточный)</span>
          </div>
        </div>
        <div>
          <img />
          <div>
            <h4>г. Кокчетав, ул. Ж. Ташенова 129Б</h4>
            <span>(Рынок Восточный)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
