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
        <div>
            <ul>
                <li>Главная</li>
                <li>Косметика и гигиена</li>
                <li>Уход за руками</li>
                <li>Мыло твердое</li>
                <li>BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот, 90 г</li>
            </ul>
            <div>
                <img src={good?.image}  alt='goodPhoto' />
                <div>

                </div>
            </div>
        </div>
    );
};

export default CardGood;