import {FC} from 'react'
import './header.sass';


const Header: FC = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <div>
                        <div>
                            <img />
                                <h5>
                                г. Кокчетав, ул. Ж. Ташенова 129Б<br /> <span>(Рынок Восточный)</span>
                                </h5>                        
                        </div>
                        <div>
                            <img />
                            <div>
                                <h5></h5>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;