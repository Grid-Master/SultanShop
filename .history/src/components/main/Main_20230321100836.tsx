import {FC} from 'react';
import './main.sass'

import burger from '../../images/burger.png'
import frame2 from '../../images/frame2.png'

const Main: FC = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className='main__inner'>
                    <h4>Главная</h4>
                    <p>Косметика и гигиена</p>
                </div>
                <div>
                    <h1>Косметика и гигиена</h1>
                    <div>
                        <h4>Сортировка:</h4>
                        <p>Название</p>
                        <img src={burger} alt='burger' />
                        <img src={frame2} alt='frame' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;