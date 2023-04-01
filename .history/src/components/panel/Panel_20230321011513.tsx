import { FC } from 'react';
import './panel.sass'

import logo from '../../images/logo.png'
import frame from '../../images/frame.png'
import search from '../../images/search.png'
import consultant from '../../images/consultant.png'
import download from '../../images/download.png'
import cart from '../../images/cart.png'

const Panel: FC = () => {
    return (
        <div className='panel'>
            <div className='container'>
                <div className='panel__inner'>
                    <img src={logo} alt='logo' />
                    <button className='panel__inner-catalog'>
                        <p>Каталог</p>
                        <img src={frame} alt='frame' />
                    </button>
                    <div>
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
                    <button>
                        Прайс-лист
                        <img src={download} alt='download' />
                    </button>
                    <img src={cart} alt='cart' />
                    <div>
                        <p>Корзина</p>
                        <h4>12 478 ₸ </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panel;