 import {FC, useState, useEffect} from 'react';
 import {useLocation} from 'react-router-dom'
import { IGood } from '../../data/goods';
import { useAppSelector } from '../../store/hook';
 import './breadcrumbs.sass'

const Breadcrumbs: FC = () => {
    const path = useLocation()
    const [good, setGood] = useState<IGood>()
    const currentGoods = useAppSelector(state => state.catalogGoods.goods)

    useEffect(() => {
        let good = currentGoods.find((good) => good.barcode === path.pathname.split('/').at(2))
        setGood(good)
    }, [])

    return (
        <div className='breadcrumbs'>
            <div className='container'>
                <div className='breadcrumbs-inner'>
                    <h4>Главная</h4>
                    {path.pathname.split('/').at(1) === 'catalog' ? <h4>Каталог</h4> : '' }
                    <p>{good?.careType}</p>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumbs;