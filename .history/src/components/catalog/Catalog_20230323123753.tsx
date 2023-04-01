import {FC, useState, useEffect} from 'react';
import FilterAside from '../filterAside/FilterAside';
import { catalogGoods, IGood } from '../../data/goods';
import ReactPaginate from 'react-paginate';
import {useSelector} from 'react-redux'
import './catalog.sass'

import burger from '../../images/burger.png'
import frame2 from '../../images/frame2.png'
import CatalogGood from '../catalogGood/CatalogGood';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { filterGoods } from '../../store/catalogGoodsSlice';


const Catalog: FC = () => {
    const [goods, setGoods] = useState<IGood[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1);
	const [goodsPerPage] = useState(15);

    const catalogGoods = useAppSelector( state => state.catalogGoods)
    const dispatch = useAppDispatch()

    const indexOfLastGood = currentPage * goodsPerPage;
	const indexOfFirstGood = indexOfLastGood - goodsPerPage;
	const currentGoods = goods.slice(indexOfFirstGood, indexOfLastGood);

	const paginate = ({ selected  }:any) => {
        console.log(currentGoods)
		setCurrentPage(selected + 1);
	};

    useEffect(() => {
        console.log(1)
        setGoods(catalogGoods)
    }, [])

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
                        <h4>Сортировка:</h4>
                        <p>Название</p>
                        <div>
                            <img src={burger} alt='burger' />
                            <div>
                                <img src={frame2} alt='frame' />
                            </div>
                        </div>
                    </div>
                </div>
                <ul className='catalog__hygienelist'>
                    <li onClick={() => dispatch(filterGoods('body'))}>Уход за телом</li>
                    <li>Уход за руками</li>
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
                        <ReactPaginate
						    onPageChange={paginate}
						    pageCount={Math.ceil(goods.length / goodsPerPage)}
						    previousLabel={' '}
						    nextLabel={' '}
						    containerClassName={'pagination'}
						    pageLinkClassName={'page-number'}
						    previousLinkClassName={'page-number-previous'}
						    nextLinkClassName={'page-number-next'}
						    activeLinkClassName={'active'}
					    />
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