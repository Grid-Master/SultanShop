import { FC, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import deliver from '../../images/deliver.png';
import payment from '../../images/payment.png';
import question from '../../images/question.png';
import edit from '../../images/edit.png';
import orderIcon from '../../images/orderIcon.png';
import cross from '../../images/cross.png';
import './order.sass';
import OrderItem from '../orderItem/OrderItem';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import Modal from '../modal/Modal';
import { clearCart } from '../../store/cartSlice';

const Order: FC = () => {
  const [thanksModal, setThanksModal] = useState<boolean>(false);
  const cart = useAppSelector((state) => state.cartReducer.cart);
  const prevIsToggleOnRef = useRef<boolean | undefined>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    prevIsToggleOnRef.current = thanksModal;
  }, [thanksModal]);

  const prevIsToggleOn = prevIsToggleOnRef.current;

  useEffect(() => {
    if (prevIsToggleOn !== undefined && thanksModal !== prevIsToggleOn && thanksModal === false) {
      dispatch(clearCart());
    }
  }, [thanksModal, prevIsToggleOn]);

  const getTotalSum = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.count;
    });
    return total.toFixed(2);
  };

  const navigateHandler = () => {
    navigate('/cart');
    window.scrollTo(0, 0);
  };

  return (
    <div className="order">
      <div className="container">
        <h1>Оформление заказа</h1>
        <div className="order__inner">
          <div className="order__inner-container-1">
            <h3 className="order__inner-point">
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
            <h3 className="order__inner-point">
              <span>2</span> адрес доставки
            </h3>
            <label>
              Город
              <select placeholder="Выберите ваш город">
                <option selected disabled>
                  Выберите ваш город
                </option>
                <option>Москва</option>
                <option>Тирасполь</option>
              </select>
            </label>
            <label>
              Адрес
              <input type="text" placeholder="Введите адрес доставки" />
            </label>
            <button onClick={() => setThanksModal(true)}>Подтверждение заказа</button>
          </div>
          <div className="order__inner-container-2">
            <div className="order__inner-container-2-info">
              <div>
                <span>
                  <img src={payment} alt="payment" />
                </span>
                <h3>Оплата</h3>
              </div>
              <p>Принимаем оплату наличными, по карте и через расчетный счет.</p>
            </div>
            <div className="order__inner-container-2-info">
              <div>
                <span>
                  <img src={deliver} alt="deliver" />
                </span>
                <h3>Доставка</h3>
              </div>
              <p>
                Бесплатная доставка от <span>10 000 ₸ </span>
                по области. Наша доставка работает ежедневно.
              </p>
            </div>
            <div className="order__inner-container-2-info">
              <div>
                <span>
                  <img className="order-img-question" src={question} alt="question" />
                </span>
                <h3>возникли вопросы?</h3>
              </div>
              <p>
                Звоните: <span>+7 777 490 00 91</span> Менеджер Вам ответит на все вопросы.
              </p>
            </div>
            <h3 className="order__inner-point">
              <span>3</span> Дополнительно
            </h3>
            <label>
              Комментарий
              <textarea placeholder="Введите ваш комментарий"></textarea>
            </label>
          </div>
          <div className="order__inner-container-3">
            <h2>Ваш заказ</h2>
            <ul>
              {cart.map((item) => (
                <OrderItem key={item.id} item={item} />
              ))}
            </ul>
            <div>
              <span>ИТОГО</span>
              <span>{getTotalSum()} ₸</span>
            </div>
            <button onClick={() => navigateHandler()}>
              Редактировать заказ
              <img src={edit} alt="edit" />
            </button>
          </div>
        </div>
      </div>
      <Modal active={thanksModal} setActive={setThanksModal}>
        <div>
          <img src={cross} alt="cross" />
          <span>
            <img src={orderIcon} alt="orderIcon" />
          </span>
          <h1>Спасибо за заказ</h1>
          <p>Наш менеджер свяжется с вами в ближайшее время</p>
        </div>
      </Modal>
    </div>
  );
};

export default Order;
