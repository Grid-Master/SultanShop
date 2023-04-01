import { FC } from 'react';
import volume from '../../images/volume.png';
import weight from '../../images/weight.png';
import './itemOrder.sass';

const OrderItem: FC = () => {
  return (
    <li className="itemOrder">
      <img alt="orderItemPhoto" />
      <div>
        <h5>
          <img src={volume} alt="measure" />
          450 мл
        </h5>
        <p>AOS средство для мытья посуды Crystal</p>
        <h2>48,76 ₸</h2>
      </div>
    </li>
  );
};

export default OrderItem;
