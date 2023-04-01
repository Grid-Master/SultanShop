import {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { useAppSelector } from '../../store/hook';
import './cardGood.sass'

const CardGood: FC = () => {
    const params = useParams()
    const CurrentGoods = useAppSelector(state => state.catalogGoods.goods)

    useEffect(() => {
        console.log(params.id)
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
                <img />
                <div>

                </div>
            </div>
        </div>
    );
};

export default CardGood;