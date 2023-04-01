import {FC} from 'react';
import './filterAside.sass'

const FilterAside:FC = () => {
    return (
        <aside className='filter'>
            <h2>ПОДБОР ПО ПАРАМЕТРАМ</h2>
            <p>Цена <b>₸</b></p>
            <div>
                <input type='number' placeholder='0' />
                -
                <input type='number' placeholder='10000' />
            </div>
        </aside>
    );
};

export default FilterAside;