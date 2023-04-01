import {FC} from 'react';
import './catalogGood.sass'
import {useHref} from 'react-router-dom'
import img from '../../images/goods/goodImage1.png'
import cart from '../../images/cart2.png'
import volumeIcon from '../../images/volumeIcon.png'
import weightIcon from '../../images/weightIcon.png'
import { IGood } from '../../data/goods';
import { useAppDispatch } from '../../store/hook';
import { removeGood } from '../../store/catalogGoodsSlice';

interface ICatalogProp  {
    good: IGood
}

const CatalogGood: FC<ICatalogProp> = ({good}) => {
    const {
        id,
        image, 
        measureValue,
        title, 
        brand,
        barcode,
        manufacturer,
        price
    } = good

    const dispatch = useAppDispatch()
    const router = useHref(barcode)

    return (
        <div className='good'>
            <img src={image} alt='good' onClick={() => router} />
            <h5 className='good__measure'>
                <img src={volumeIcon} alt='measureIcon' />
                {measureValue}
            </h5>
            <p className='good__title'>
                <span className='good__brand'>{brand}</span>
                {title}
            </p>
            <p className='good__barcode'>
            Штрихкод:
                <span>{barcode}</span>
            </p>
            <p className='good__manufacturer'>
            Производитель:
                <span>{manufacturer}</span>
            </p>
            <p className='good__brand'>
            Бренд:
                <span>{brand}</span>
            </p>
            <div>
                <h3>{price} ₸</h3>
                <button onClick={() => dispatch(removeGood(id))}>
                В КОРЗИНУ
                    <img src={cart} alt='cart' />
                </button>
            </div>
        </div>
    );
};

export default CatalogGood;