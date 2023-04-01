import {FC} from 'react';
import './filterAside.sass'

import search from '../../images/search.png'

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
            <div className='manufacturer'>
                <h3>Производитель</h3>
                <div>
                    <input type='text' placeholder='Поиск...' />
                    <button>
                        <img src={search} alt='search' />
                    </button>
                </div>
                <ul>
                    <li>
                        <input type='checkbox' />
                        <label><span></span></label>
                    </li>
                    <li>
                        <input type='checkbox' />
                        <label><span></span></label>
                    </li>
                    <li>
                        <input type='checkbox' />
                        <label><span></span></label>
                    </li>
                    <li>
                        <input type='checkbox' />
                        <label><span></span></label>
                    </li>
                </ul>
                <p></p>
            </div>
        </aside>
    );
};

export default FilterAside;