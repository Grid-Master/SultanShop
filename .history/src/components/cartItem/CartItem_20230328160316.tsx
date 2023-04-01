import {FC} from 'react';

const CartItem: FC = () => {
    return (
        <li>
            <img />
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
            <h2></h2>
            <button>
                <img />
            </button>
        </li>
    );
};

export default CartItem;