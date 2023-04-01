import {FC} from 'react';
import './catalogGood.sass'

import img from '../../images/goods/goodImage1.png'
import cart from '../../images/cart2.png'
import volumeIcon from '../../images/volumeIcon.png'
import weightIcon from '../../images/weightIcon.png'

const CatalogGood: FC = () => {
    return (
        <div className='good'>
            <img src={img} alt='good' />
            <h5 className='good__measure'>
                <img src={volumeIcon} alt='measureIcon' />
                450 мл
            </h5>
            <p className='good__title'>
                <span className='good__brand'>AOS</span>
                средство для мытья посуды Crystal
            </p>
            <p>
            Штрихкод:
                <span>4604049097548</span>
            </p>
            <p>
            Производитель:
                <span>Нэфис</span>
            </p>
            <p>
            Бренд:
                <span>AOS</span>
            </p>
            <div>
                <h3>48,76 ₸</h3>
                <button>
                В КОРЗИНУ
                    <img src={cart} alt='cart' />
                </button>
            </div>
        </div>
    );
};

export default CatalogGood;