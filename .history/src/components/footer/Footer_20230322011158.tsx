import {FC} from 'react';
import './footer.sass'

import logo from '../../images/logo2.png'
import arrow from '../../images/arrow.png'

const Footer:FC = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__inner'>
                    <div>
                        <img src={logo} alt='logo' />
                        <p></p>
                        <span></span>
                        <div>
                            <input type='text' />
                            <button>
                                <img src={arrow} alt='arrow' />
                            </button>
                        </div>
                    </div>
                    <ul></ul>
                    <ul></ul>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;