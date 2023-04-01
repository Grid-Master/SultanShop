import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import { IGood } from '../../data/goods';
import { useAppSelector } from '../../store/hook';
import './cardGood.sass'

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
                <ul>
                    <li>Главная</li>
                    <li>Косметика и гигиена</li>
                    <li>Уход за руками</li>
                    <li>Мыло твердое</li>
                    <li>BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот, 90 г</li>
                </ul>
                <div className=''>
                    <img src={good?.image}  alt='goodPhoto' />
                    <div>
                        <span>В наличии</span>
                        <h2>
                            <span>{good?.brand}</span>
                            {good?.title}
                        </h2>
                        <h5>
                            <img />
                            {good?.measureValue}
                        </h5>
                        <div>
                            <h3>{good?.price}</h3>
                            <div>
                                <button>-</button>
                                <h4>1</h4>
                                <button>+</button>
                            </div>
                            <button>
                                <img />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardGood;