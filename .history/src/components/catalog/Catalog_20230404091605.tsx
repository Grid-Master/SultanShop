import { FC, useState, useEffect } from 'react';
import FilterAside from '../filterAside/FilterAside';
import { IGood } from '../../data/goods';
import ReactPaginate from 'react-paginate';
import './catalog.sass';
import CatalogGood from '../catalogGood/CatalogGood';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import {
  filterGoods,
  reloadGoods,
  sortGoodsByPrice,
  sortGoodsByTitle,
} from '../../store/catalogGoodsSlice';

import burger from '../../images/burger.png';
import frame2 from '../../images/frame2.png';

interface IOptions {
  value: string;
  text: string;
}

const Catalog: FC = () => {
  const options: IOptions[] = [
    { value: '', text: 'Выберите...' },
    { value: 'price+', text: 'Цена (возр)' },
    { value: 'price-', text: 'Цена (убыв)' },
    { value: 'title+', text: 'Название (возр)' },
    { value: 'title-', text: 'Название (убыв)' },
  ];

  const [goods, setGoods] = useState<IGood[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [goodsPerPage] = useState(15);
  const [sorting, setSorting] = useState<string>(options[0].value);
  const [activeFilter, setActiveFilter] = useState<string>('');

  const catalogGoods = useAppSelector((state) => state.catalogGoods.goods);
  const adminGoods = useAppSelector((state) => state.adminReducer.goods);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setGoods(adminGoods);
    localStorage.setItem('goods', JSON.stringify(goods));
  }, []);

  const indexOfLastGood = currentPage * goodsPerPage;
  const indexOfFirstGood = indexOfLastGood - goodsPerPage;
  const currentGoods = catalogGoods.slice(indexOfFirstGood, indexOfLastGood);

  const paginate = ({ selected }: any) => {
    setCurrentPage(selected + 1);
  };

  const filterHandler = (type: string) => {
    if (activeFilter !== type) {
      dispatch(reloadGoods(adminGoods));
      dispatch(filterGoods(type));
      setGoods(catalogGoods);
      setActiveFilter(type);
    } else {
      dispatch(reloadGoods(adminGoods));
      setActiveFilter('');
    }
  };

  const sortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSorting(e.target.value);

    switch (e.target.value) {
      case 'price+':
        dispatch(sortGoodsByPrice('+'));
        break;
      case 'price-':
        dispatch(sortGoodsByPrice('-'));
        break;
      case 'title+':
        dispatch(sortGoodsByTitle('+'));
        break;
      case 'title-':
        dispatch(sortGoodsByTitle('-'));
        break;
    }
  };

  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog__titleblock">
          <h1>Косметика и гигиена</h1>
          <div>
            <h4>Сортировка:</h4>
            <select value={sorting} onChange={sortHandler}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            {/* <div>
                            <img src={burger} alt='burger' />
                            <div>
                                <img src={frame2} alt='frame' />
                            </div>
                        </div> */}
          </div>
        </div>
        <ul className="catalog__hygienelist">
          <li
            className={activeFilter === 'body' ? 'activeFilter' : ''}
            onClick={() => filterHandler('body')}>
            Уход за телом
          </li>
          <li
            className={activeFilter === 'hands' ? 'activeFilter' : ''}
            onClick={() => filterHandler('hands')}>
            Уход за руками
          </li>
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
        <div className="catalog__container-goods">
          <FilterAside filterHandler={filterHandler} activeFilter={activeFilter} />
          <div>
            <div className="catalog__container-goods-grid">
              {currentGoods
                ? currentGoods.map((good) => <CatalogGood good={good} key={good.id} />)
                : ''}
            </div>
            {goods && (
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
            )}
            <p className="catalog__container-goods-descriptions">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo,
              vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum
              duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue
              mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
