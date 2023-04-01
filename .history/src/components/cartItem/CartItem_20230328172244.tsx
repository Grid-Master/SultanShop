import {FC} from 'react';
import './cartItem.sass'

import bin from '../../images/bin.png'
import { IGood } from '../../data/goods';

interface ICartItemProps {
    item: IGood
}

const CartItem: FC<ICartItemProps> = ({item}) => {
    const {
        image,
        measureValue,
        description,
        brand,
        title,
        price
    } = item

    return (
        <li>
            <img src={image} alt='item' />
            <div>
                <h5></h5>
                <h2></h2>
                <p></p>
            </div>
            <div>
                <button>-</button>
                <span>3</span>
                <button>+</button>
            </div>
            <h2>22312</h2>
            <button>
                <img src={bin} alt='bin' />
            </button>
        </li>
    );
};

export default CartItem;