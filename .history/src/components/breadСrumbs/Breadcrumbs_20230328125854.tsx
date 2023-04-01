import {FC} from 'react';
import './breadCrumbs.sass'

const Breadcrumbs: FC = () => {
    return (
        <div className='.breadcrumbs'>
            <div className='container'>
                <h4>Главная</h4>
                <p>Косметика и гигиена</p>
            </div>
        </div>
    );
};

export default Breadcrumbs;