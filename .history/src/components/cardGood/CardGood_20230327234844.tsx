import {FC} from 'react';
import {useParams} from 'react-router-dom'
import './cardGood.sass'

const CardGood: FC = () => {
    const params = useParams()
    console.log(params)

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