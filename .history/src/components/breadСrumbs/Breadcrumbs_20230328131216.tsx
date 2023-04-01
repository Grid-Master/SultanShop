 import {FC} from 'react';
 import {useLocation} from 'react-router-dom'
 import './breadcrumbs.sass'

const Breadcrumbs: FC = () => {
    const path = useLocation()
    console.log(path.pathname.split('/'))

    return (
        <div className='breadcrumbs'>
            <div className='container'>
                <div className='breadcrumbs-inner'>
                    <h4>Главная</h4>
                    <h4>{path.pathname.split('/').at(1)}</h4>
                    <p>Косметика и гигиена</p>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumbs;