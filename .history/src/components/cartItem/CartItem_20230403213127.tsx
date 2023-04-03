import { FC } from 'react';
import './cartItem.sass';
import { useHref, useNavigate } from 'react-router-dom';
import bin from '../../images/bin.png';
import volume from '../../images/volumeIcon.png';
import weight from '../../images/weightIcon.png';
import { useAppDispatch } from '../../store/hook';
import { changeCount, ICartGood, removeGood } from '../../store/cartSlice';

interface ICartItemProps {
  item: ICartGood;
}

const CartItem: FC<ICartItemProps> = ({ item }) => {
  const { image, measureType, measureValue, description, brand, title, price, id, count, barcode } =
    item;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/catalog/${barcode}`);
    window.scrollTo(0, 0);
  };

  return (
    <li className="cartItem">
      <img onClick={() => navigateHandler()} src={image} alt="item" />
      <div className="cartItem__info">
        <h5>
          <img src={measureType === 'volume' ? volume : weight} alt="measure" />
          {measureValue}
        </h5>
        <h2>
          {brand} {title.length > 37 ? Array.from(title).slice(0, 37).join('') + '...' : title}
        </h2>
        <p>
          {description.length > 37
            ? Array.from(description).slice(0, 230).join('') + '...'
            : description}
        </p>
      </div>
      <div className="cartItem__container">
        <div className="cartItem__count">
          <button
            disabled={+count === 1 ? true : false}
            onClick={() => dispatch(changeCount(['-', id]))}>
            -
          </button>
          <span>{count}</span>
          <button onClick={() => dispatch(changeCount(['+', id]))}>+</button>
        </div>
        <h2>{(price * count).toFixed(2)} ₸</h2>
        <button onClick={() => dispatch(removeGood(id))}>
          <img src={bin} alt="bin" />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
