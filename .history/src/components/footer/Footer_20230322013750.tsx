import {FC} from 'react';
import './footer.sass'

import logo from '../../images/logo2.png'
import arrow from '../../images/arrow.png'
import download from '../../images/download.png'
import whatsapp from '../../images/whatsapp.png'
import telegram from '../../images/telegram.png'

const Footer:FC = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__inner'>
                    <div>
                        <img src={logo} alt='logo' />
                        <p>Компания «Султан» — снабжаем розничные магазины товарами 
                        "под ключ" в Кокчетаве и Акмолинской области</p>
                        <span>Подпишись на скидки и акции</span>
                        <div>
                            <input type='text' placeholder='Введите ваш E-mail' />
                            <button>
                                <img src={arrow} alt='arrow' />
                            </button>
                        </div>
                    </div>
                    <ul>
                        <h3>Меню сайта:</h3>
                        <li>О компании</li>
                        <li>Доставка и оплата</li>
                        <li>Возврат</li>   
                        <li>Контакты</li>   
                    </ul>
                    <ul>
                        <h3>Категории:</h3>
                        <li>Бытовая химия</li>
                        <li>Косметика и гигиена</li>
                        <li>Товары для дома</li>   
                        <li>Товары для детей и мам</li>
                        <li>Посуда</li>
                    </ul>
                    <div>
                        <h3>Скачать прайс-лист:</h3>
                        <button>
                            <span>Прайс-лист</span>
                            <img src={download} alt='download' />
                        </button>
                        <p>Связь в мессенджерах:</p>
                        <div>
                            <img src={whatsapp} alt='whatsapp' />
                            <img src={telegram} alt='telegram' />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;