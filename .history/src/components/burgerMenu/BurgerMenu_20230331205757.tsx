import { FC } from 'react';
import './burgerMenu.sass';

const BurgerMenu: FC = () => {
  return (
    <div className="burgerMenu">
      <div className="burgerMenu-content">
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
