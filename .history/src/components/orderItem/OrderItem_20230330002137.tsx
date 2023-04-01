import { FC } from 'react';
import volume from '../../images/volumeIcon.png';
import weight from '../../images/weightIcon.png';
import photo from '../../images/goods/goodImage3.png';
import './orderItem.sass';

const OrderItem: FC = () => {
  return (
    <li className="itemOrder">
      <img src={photo} alt="orderItemPhoto" />
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
