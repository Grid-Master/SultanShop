import {FC, useState, useEffect} from 'react';
import FilterAside from '../filterAside/FilterAside';
import { catalogGoods, IGood } from '../../data/goods';
import './catalog.sass'

import burger from '../../images/burger.png'
import frame2 from '../../images/frame2.png'


const Catalog: FC = () => {
    const [goods, setGoods] = useState<IGood[]>(catalogGoods)

   

    return (
        <div className='catalog'>
            <div className='container'>
                <div className='catalog__breadcrumbs'>
                    <h4>Главная</h4>
                    <p>Косметика и гигиена</p>
                </div>
                <div className='catalog__titleblock'>
                    <h1>Косметика и гигиена</h1>
                    <div>
                        <h4>Сортировка:</h4>
                        <p>Название</p>
                        <div>
                            <img src={burger} alt='burger' />
                            <div>
                                <img src={frame2} alt='frame' />
                            </div>
                        </div>
                    </div>
                </div>
                <ul className='catalog__hygienelist'>
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
                <div className='catalaog__container'>
                    <FilterAside />
                    {goods ? goods.map(() => <div>1</div>) : ''}
                </div>
            </div>
        </div>
    );
};

export default Catalog;