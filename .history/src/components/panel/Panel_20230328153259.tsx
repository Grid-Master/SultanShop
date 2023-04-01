import { FC } from 'react';
import './panel.sass'

import logo from '../../images/logo.png'
import frame from '../../images/frame.png'
import search from '../../images/search.png'
import consultant from '../../images/consultant.png'
import download from '../../images/download.png'
import cart from '../../images/cart.png'
import { useAppSelector } from '../../store/hook';

const Panel: FC = () => {
    const itemsInCart = useAppSelector(state => state.cartReducer.cart.length)

    return (
        <div className='panel'>
            <div className='container'>
                <div className='panel__inner'>
                    <img className='panel__inner-logo' src={logo} alt='logo' />
                    <button className='panel__inner-catalog'>
                        <p>Каталог</p>
                        <img src={frame} alt='frame' />
                    </button>
                    <div className='panel__inner-search'>
                    <input type='text' placeholder='Поиск...' />
                    <button>
                        <img src={search} alt='search' />
                    </button>
                    </div>
                    <div className='panel__inner-consultant'>
                        <div>
                            <h4>+7 (777) 490-00-91</h4>
                            <p>время работы: 9:00-20:00</p>
                            <span>Заказать звонок</span>
                        </div>
                        <img src={consultant} alt='consultant' />
                    </div>
                    <button className='panel__inner-pricelist'>
                        Прайс-лист
                        <img src={download} alt='download' />
                    </button>
                    <div className='panel__inner-cart'>
                        <img src={cart} alt='cart' />
                        <span>{itemsInCart}</span>
                        <div>
                            <p>Корзина</p>
                            <h4>12 478 ₸ </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panel;