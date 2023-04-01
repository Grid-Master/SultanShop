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
                    <button>Каталог</button>
                    <div>
                    <input type='text' placeholder='Поиск...' />
                    <button>
                        <img src={search} alt='serach' />
                    </button>
                    </div>
                    <div>
                        <div>
                            <h4>+7 (777) 490-00-91</h4>
                            <p>время работы: 9:00-20:00</p>
                            <span>Заказать звонок</span>
                        </div>
                        <img src={consultant} alt='consultant' />
                    </div>
                    <button>Прайс-лист</button>
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