import { FC } from 'react';
import './cartItem.sass';

import bin from '../../images/bin.png';
import { IGood } from '../../data/goods';

interface ICartItemProps {
  item: IGood;
}

const CartItem: FC<ICartItemProps> = ({ item }) => {
  const { image, measureValue, description, brand, title, price } = item;

  return (
    <li className="cartItem">
      <img src={image} alt="item" />
      <div>
        <h5>{measureValue}</h5>
        <h2>
          {brand} {title}
        </h2>
        <p>{description}</p>
      </div>
      <div>
        <button>-</button>
        <span>3</span>
        <button>+</button>
      </div>
      <h2>{price}</h2>
      <button>
        <img src={bin} alt="bin" />
      </button>
    </li>
  );
};

export default CartItem;
