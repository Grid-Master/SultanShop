import {FC} from 'react';
import './filterAside.sass'

import search from '../../images/search.png'
import polygon from '../../images/polygon.png'
import bin from '../../images/bin.png'

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
                <div>
                    <button className='filter__brand-btn-1'>Показать</button>
                    <button className='filter__brand-btn-2'>
                        <img src={bin} alt='bin' />
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default FilterAside;