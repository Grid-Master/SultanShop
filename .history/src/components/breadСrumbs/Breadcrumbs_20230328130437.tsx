 import {FC} from 'react';
 import './breadcrumbs.sass'

const Breadcrumbs: FC = () => {
    return (
        <div className='breadcrumbs'>
            <div className='container'>
                <div className='breadcrumbs-inner'>
                    <h4>Главная</h4>
                    <p>Косметика и гигиена</p>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumbs;