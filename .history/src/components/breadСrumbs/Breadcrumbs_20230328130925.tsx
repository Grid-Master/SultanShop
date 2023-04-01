 import {FC} from 'react';
 import {useLocation} from 'react-router-dom'
 import './breadcrumbs.sass'

const Breadcrumbs: FC = () => {
    const path = useLocation()
    console.log(path)

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