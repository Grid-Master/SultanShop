import { FC } from 'react';
import volume from '../../images/volumeIcon.png';
import weight from '../../images/weightIcon.png';
import photo from '../../images/goods/goodImage3.png';
import { ICartGood } from '../../store/cartSlice';
import './orderItem.sass';

interface IOrderItemPops {
  item: ICartGood;
}

const OrderItem: FC<IOrderItemPops> = ({ item }) => {
  return (
    <li className="itemOrder">
      <img src={item.image} alt="orderItemPhoto" />
      <div>
        <h5>
          <img src={item.measureType === 'volume' ? volume : weight} alt="measure" />
          {item.measureValue}
        </h5>
        <p>
          {item.brand} {item.title}
        </p>
        <h2>{item.price * item.count} ₸</h2>
      </div>
    </li>
  );
};

export default OrderItem;
