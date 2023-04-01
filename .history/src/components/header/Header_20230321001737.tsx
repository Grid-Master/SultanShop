import {FC} from 'react'
import './header.sass';

import geo from '../../images/geo.png'
import message from '../../images/message.png'


const Header: FC = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <div className='header__inner-info'>
                        <div>
                            <img src={geo} alt='geo' />
                                <h5>
                                    г. Кокчетав, ул. Ж. Ташенова 129Б
                                    <br />
                                    <span>(Рынок Восточный)</span>
                                </h5>                        
                        </div>
                        <div>
                            <img src={message} alt='message'/>
                                <h5>
                                    opt.sultan@mail.ru 
                                    <br />
                                    <span>На связи в любое время</span>
                                </h5>                        
                        </div>
                    </div>
                    <ul className='header__inner-links'>
                        <li>О компании</li>
                        <li>Доставка и оплата</li>
                        <li>Возврат</li>
                        <li>Контакты</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;