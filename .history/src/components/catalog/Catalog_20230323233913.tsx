import {FC, useState, useEffect} from 'react';
import FilterAside from '../filterAside/FilterAside';
import { IGood } from '../../data/goods';
import ReactPaginate from 'react-paginate';
import './catalog.sass'
import CatalogGood from '../catalogGood/CatalogGood';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { filterGoods, reloadGoods, sortGoodsByPrice } from '../../store/catalogGoodsSlice';


import burger from '../../images/burger.png'
import frame2 from '../../images/frame2.png'


const Catalog: FC = () => {
    const [goods, setGoods] = useState<IGood[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1);
	const [goodsPerPage] = useState(15);

    
    const catalogGoods = useAppSelector(state => state.catalogGoods.goods)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setGoods(catalogGoods)
    }, []) 

    const indexOfLastGood = currentPage * goodsPerPage;
	const indexOfFirstGood = indexOfLastGood - goodsPerPage;
	const currentGoods = catalogGoods.slice(indexOfFirstGood, indexOfLastGood);

	const paginate = ({ selected  }:any) => {
		setCurrentPage(selected + 1);
	};

    const filterHandler = (type: string) => {
        dispatch(reloadGoods())
        dispatch(filterGoods(type))
        setGoods(catalogGoods) 
    }

    const sortHandler =() => {
        dispatch(sortGoodsByPrice())
    }

    return (
        <div className='catalog'>
            <div className='container'>
                <div className='catalog__breadcrumbs'>
                    <h4>Главная</h4>
                    <p>Косметика и гигиена</p>
                </div>
                <div className='catalog__titleblock'>
                    <h1>Косметика и гигиена</h1>
                    <div>
                        <h4 onClick={sortHandler}>Сортировка:</h4>
                        <select>Название</select>
                        <div>
                            <img src={burger} alt='burger' />
                            <div>
                                <img src={frame2} alt='frame' />
                            </div>
                        </div>
                    </div>
                </div>
                <ul className='catalog__hygienelist'>
                    <li onClick={() =>filterHandler('body')}>Уход за телом</li>
                    <li onClick={() =>filterHandler('hands')}>Уход за руками</li>
                    <li>Уход за ногами</li>
                    <li>Уход за лицом</li>
                    <li>Уход за волосами</li>
                    <li>Средства для загара</li>
                    <li>Средства для бритья</li>
                    <li>Подарочные наборы</li>
                    <li>Гигиеническая продукция</li>
                    <li>Гигиена полости рта</li>
                    <li>Бумажная продукция</li>
                </ul>
                <div className='catalog__container-goods'>
                    <FilterAside />
                    <div>
                        <div className='catalog__container-goods-grid'>
                            {currentGoods ? currentGoods.map((good) => <CatalogGood good={good} key={ good.id} />) : ''}
                        </div>
                        {goods && <ReactPaginate
						    onPageChange={paginate}
						    pageCount={Math.ceil(goods.length / goodsPerPage)}
						    previousLabel={' '}
						    nextLabel={' '}
						    containerClassName={'pagination'}
						    pageLinkClassName={'page-number'}
						    previousLinkClassName={'page-number-previous'}
						    nextLinkClassName={'page-number-next'}
						    activeLinkClassName={'active'}
					    />}
                        <p className='catalog__container-goods-descriptions'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. 
                            Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis.
                            Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;