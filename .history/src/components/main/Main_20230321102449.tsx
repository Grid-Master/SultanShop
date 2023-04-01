import {FC} from 'react';
import './main.sass'

import burger from '../../images/burger.png'
import frame2 from '../../images/frame2.png'

const Main: FC = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className='main__breadcrumbs'>
                    <h4>Главная</h4>
                    <p>Косметика и гигиена</p>
                </div>
                <div className='main__titleblock'>
                    <h1>Косметика и гигиена</h1>
                    <div>
                        <h4>Сортировка:</h4>
                        <p>Название</p>
                        <img src={burger} alt='burger' />
                        <img src={frame2} alt='frame' />
                    </div>
                </div>
                <ul className='main__hygienelist'>
                    <li>Уход за телом</li>
                    <li>Уход за руками</li>
                    <li>Уход за ногами</li>
                    <li>Уход за лицом</li>
                    <li>Уход за волосами</li>
                    <li>Средства для загара</li>
                    <li>Средства для бритья</li>
                    <li>Подарочные наборы</li>
                    <li>Гигиеническая продукция</li>
                    <li>Гигиена полости рта</li>
                    <li>Бумажная продукция</li>
                </ul>
            </div>
        </div>
    );
};

export default Main;