import { FC } from 'react';
import geo from '../../images/geo.png';
import message from '../../images/message.png';
import ring from '../../images/ring.png';
import ring2 from '../../images/ring2.png';
import download from '../../images/download.png';
import './burgerMenu.sass';

interface IBurgerMenuProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ active, setActive }) => {
  return (
    <div className={active ? 'burgerMenu active' : 'burgerMenu'} onClick={() => setActive(false)}>
      <div className={active ? 'burgerMenu-content active' : 'burgerMenu-content'}>
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
        <h5>время работы: 9:00-20:00</h5>
        <p>
          <span>
            <img src={ring2} alt="ring" />
          </span>
          Заказать звонок
        </p>
        <h2>Меню сайта:</h2>
        <ul>
          <li>О компании</li>
          <li>Доставка и оплата</li>
          <li>Возврат</li>
          <li>Контакты</li>
        </ul>
        <button>
          Прайс-лист
          <img src={download} alt="download" />
        </button>
      </div>
    </div>
  );
};

export default BurgerMenu;
