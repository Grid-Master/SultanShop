import { FC } from 'react';

const Order: FC = () => {
  return (
    <div className="order">
      <div className="container">
        <h1>Оформление заказа</h1>
        <div className="order__inner">
          <div>
            <h3>
              <span>1</span> Контактные данные
            </h3>
            <label>
              Контактные данные
              <input type="text" placeholder="Введите ваше имя" />
            </label>
            <label>
              Телефон*
              <input type="text" placeholder="Введите ваш телефон" />
            </label>
            <label>
              E-mail*
              <input type="email" placeholder="Введите ваш E-mail" />
            </label>
            <label>
              Название организации
              <input type="text" placeholder="Введите название организации" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
