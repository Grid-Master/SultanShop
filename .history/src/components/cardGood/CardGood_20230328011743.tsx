import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import { IGood } from '../../data/goods';
import { useAppSelector } from '../../store/hook';
import './cardGood.sass'

import volumeIcon from '../../images/volumeIcon.png'
import weightIcon from '../../images/weightIcon.png'
import cart from '../../images/cart2.png'

const CardGood: FC = () => {
    const [good, setGood] = useState<IGood>()
    const params = useParams()
    const currentGoods = useAppSelector(state => state.catalogGoods.goods)

    useEffect(() => {
        let good = currentGoods.find((good) => good.barcode === params.id)
        setGood(good)
    }, [])

    return (
        <div className='cardGood'>
            <div className='container'>
                <div className='cardGood__inner'>
                    <img src={good?.image}  alt='goodPhoto' />
                    <div>
                        <span>В наличии</span>
                        <h2>
                            <span>{good?.brand}</span>
                            {good?.title}
                        </h2>
                        <h5>
                            <img src={good?.measureType === 'volume' ? volumeIcon : weightIcon} alt='measureIcon' />
                            {good?.measureValue}
                        </h5>
                        <div>
                            <h3>{good?.price} ₸</h3>
                            <div>
                                <button>-</button>
                                <h4>1</h4>
                                <button>+</button>
                            </div>
                            <button>
                                В корзину
                                <img src={cart} alt='carts' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardGood;