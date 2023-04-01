import {FC} from 'react';
import './filterAside.sass'

import search from '../../images/search.png'
import polygon from '../../images/polygon.png'
import bin from '../../images/bin.png'
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'
import brand4 from '../../images/brand4.png'
import brand5 from '../../images/brand5.png'

const FilterAside:FC = () => {
    return (
        <aside className='filter'>
            <h2>ПОДБОР ПО ПАРАМЕТРАМ</h2>
            <p>Цена <span>₸</span></p>
            <div>
                <input type='number' placeholder='0' />
                <span className='filter-span'>-</span>
                <input type='number' placeholder='10000' />
            </div>
            <div className='filter__manufacturer'>
                <h3>Производитель</h3>
                <div className='filter__manufacturer-container'>
                    <input type='text' placeholder='Поиск...' />
                    <button>
                        <img src={search} alt='search' />
                    </button>
                </div>
                <ul>
                    <li>
                        <input type='checkbox' />
                        <label>Grifon<span>(56)</span></label>
                    </li>
                    <li>
                        <input type='checkbox' />
                        <label>Boyscout<span>(66)</span></label>
                    </li>
                    <li>
                        <input type='checkbox' />
                        <label>Paclan<span>(46)</span></label>
                    </li>
                    <li>
                        <input type='checkbox' />
                        <label>Булгари Грин<span>(21)</span></label>
                    </li>
                </ul>
                <p>Показать все <img src={polygon} alt='polygon' /></p>
            </div>
            <div className='filter__brand'>
                <h3>Бренд</h3>
                <div className='filter__brand-container'>
                    <input type='text' placeholder='Поиск...' />
                    <button>
                        <img src={search} alt='search' />
                    </button>
                </div>
                <ul>
                    <li>
                        <input type='checkbox' />
                        <label>Nivea<span>(56)</span></label>
                    </li>
                    <li>
                        <input type='checkbox' />
                        <label>GRIFON<span>(66)</span></label>
                    </li>
                    <li>
                        <input type='checkbox' />
                        <label>Домашний сундук<span>(46)</span></label>
                    </li>
                    <li>
                        <input type='checkbox' />
                        <label>HELP<span>(21)</span></label>
                    </li>
                </ul>
                <p>Показать все <img src={polygon} alt='polygon' /></p>
                <div className='filter__brand-btns'>
                    <button className='filter__brand-btn-1'>Показать</button>
                    <button className='filter__brand-btn-2'>
                        <img src={bin} alt='bin' />
                    </button>
                </div>
            </div>
            <div className='filter__body'>
                <h2>Уход за телом</h2>
                <ul>
                    <li>Эпиляция и депиляция</li>
                    <li>Средства для ванны и душа</li>
                    <li>Скрабы, пилинги и пр.</li>
                    <li>Мочалки и губки для тела</li>
                    <li>Кремы, лосьоны, масла</li>
                    <li>Интимный уход</li>
                    <li>Дезодоранты, антиперспиранты</li>
                    <li>Гели для душа</li>
                </ul>
            </div>
            <div className='filter__hands'>
                <h2>Уход за руками</h2>
                <ul>
                    <li>Увлажнение и питание</li>
                    <li>Средства для ногтей</li>
                    <li>Мыло твердое</li>
                    <li>Мыло жидкое</li>
                    <li>Крем для рук</li>
                    <li>Интимный уход</li>
                    <li>Защита рук</li>
                    <li>Жидкость для снятия лака</li>
                </ul>
            </div>
            <div className='filter__foots'>
                <h2>Уход за ногами</h2>
                <ul>
                    <li>Скрабы, пилинги</li>
                    <li>Пилки, ролики</li>
                    <li>Крем для ног</li>
                    <li>Дезодоранты для ног</li>
                </ul>
            </div>
            <div className='filter__face'>
                <h2>Уход за лицом</h2>
                <ul>
                    <li>Тональные средства</li>
                    <li>Средства для снятия макияжа</li>
                    <li>Средства для очищения</li>
                    <li>Маски, скрабы, сыворотки</li>
                    <li>Крем для лица</li>
                    <li>Крем для век</li>
                    <li>Жидкость для снятия макияжа</li>
                    <li>Гигиеническая помада</li>
                </ul>
            </div>
            <div className='filter__hair'>
                <h2>Уход за волосами</h2>
                <ul>
                    <li>Шампуни</li>
                    <li>Средства для укладки</li>
                    <li>Средства для окрашивания волос</li>
                    <li>Маски, сыворотки, масла</li>
                    <li>Кондиционеры, бальзамы</li>
                </ul>
            </div>
            <div className='filter__tan'>
                <h2>Средства для загара</h2>
                <ul>
                    <li>Средства после загара</li>
                </ul>
            </div>
            <div className='filter__shaving'>
                <h2>Средства для бритья</h2>
                <ul>
                    <li>Станки и кассеты</li>
                    <li>После бритья</li>
                    <li>Для бритья</li>
                </ul>
            </div>
            <div className='filter__kits'>
                <h2>Подарочные наборы</h2>
                <ul>
                    <li>Для мужчин</li>
                    <li>Для женщин</li>
                </ul>
            </div>
            <div className='filter__brands'>
                <h2>Бренды</h2>
                <div>
                    <div>
                        <img src={brand1} alt='brand' />
                        <img src={brand2} alt='brand' />
                    </div>
                    <img src={brand3} alt='brand' />
                    <div>
                        <img src={brand4} alt='brand' />
                        <img src={brand5} alt='brand' />
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default FilterAside;