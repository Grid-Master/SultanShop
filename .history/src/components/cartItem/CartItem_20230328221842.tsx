import { FC } from 'react';
import './cartItem.sass';

import bin from '../../images/bin.png';
import volume from '../../images/volumeIcon.png';
import weight from '../../images/weightIcon.png';
import { IGood } from '../../data/goods';
import { useAppDispatch } from '../../store/hook';
import { removeGood } from '../../store/catalogGoodsSlice';

interface ICartItemProps {
  item: IGood;
}

const CartItem: FC<ICartItemProps> = ({ item }) => {
  const { image, measureType, measureValue, description, brand, title, price, id } = item;
  const dispatch = useAppDispatch();

  return (
    <li className="cartItem">
      <img src={image} alt="item" />
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
      <div className="cartItem__count">
        <button>-</button>
        <span>3</span>
        <button>+</button>
      </div>
      <h2>{price} ₸</h2>
      <button onClick={() => dispatch(removeGood(id))}>
        <img src={bin} alt="bin" />
      </button>
    </li>
  );
};

export default CartItem;
