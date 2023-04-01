import {FC} from 'react';

const Cart: FC = () => {
    return (
        <div className='cart'>
            <div className='container'>
                <div className='cart__inner'>
                    <h1>Корзина</h1>
                    <ul></ul>
                    <div>
                        <button>Оформить заказ</button>
                        <h2>1 348,76 ₸</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;