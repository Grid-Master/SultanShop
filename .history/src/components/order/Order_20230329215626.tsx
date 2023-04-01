import { FC } from 'react';
import './order.sass';

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
            <h3>
              <span>2</span> адрес доставки
            </h3>
            <label>
              Город
              <select placeholder="Выберите ваш город">
                <option>Москва</option>
                <option>Тирасполь</option>
              </select>
            </label>
            <label>
              Адрес
              <input type="text" placeholder="Введите адрес доставки" />
            </label>
            <button>Подтверждение заказа</button>
          </div>
          <div>
            <div>
              <div>
                <img />
                <h3>Оплата</h3>
              </div>
              <p>Принимаем оплату наличными, по карте и через расчетный счет.</p>
            </div>
            <div>
              <div>
                <img />
                <h3>Доставка</h3>
              </div>
              <p>
                Бесплатная доставка от <span>10 000 ₸</span>
                по области. Наша доставка работает ежедневно.
              </p>
            </div>
            <div>
              <div>
                <img />
                <h3>возникли вопросы?</h3>
              </div>
              <p>
                Звоните: <span>+7 777 490 00 91</span> Менеджер Вам ответит на все вопросы.
              </p>
            </div>
            <h3>
              <span>3</span> Дополнительно
            </h3>
            <label>
              Комментарий
              <textarea placeholder=""></textarea>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
