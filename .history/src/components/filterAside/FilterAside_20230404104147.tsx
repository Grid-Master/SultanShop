import { FC, useState, useEffect } from 'react';
import './filterAside.sass';

import search from '../../images/search.png';
import polygon from '../../images/polygon.png';
import arrow4 from '../../images/arrow4.png';
import bin from '../../images/bin.png';
import brand1 from '../../images/brand1.png';
import brand2 from '../../images/brand2.png';
import brand3 from '../../images/brand3.png';
import brand4 from '../../images/brand4.png';
import brand5 from '../../images/brand5.png';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import {
  addGoodFromAdmin,
  editGoodFromAdmin,
  filterGoods,
  filterManufacturerGoods,
  filterPriceRangeGoods,
  reloadGoods,
  sortGoodsByPrice,
  sortGoodsByTitle,
} from '../../store/catalogGoodsSlice';
import { manufacturers } from '../../data/manufacturers';
import { catalogGoods } from '../../data/goods';
import adminSlice from '../../store/adminSlice';
import { IOptions } from '../catalog/Catalog';

interface IFilterAsideProp {
  filterHandler: (type: string) => void;
  activeFilter: string;
  sorting: string;
  setSorting: React.Dispatch<React.SetStateAction<string>>;
  sortHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: IOptions[];
}

const FilterAside: FC<IFilterAsideProp> = ({
  filterHandler,
  activeFilter,
  sorting,
  setSorting,
  sortHandler,
  options,
}) => {
  const [activeParameters, setActiveParameters] = useState<boolean>(true);
  const [priceRangeMin, setPriceRangeMin] = useState<string>('');
  const [priceRangeMax, setPriceRangeMax] = useState<string>('');
  const [manufacturerSearch, setManufacturerSearch] = useState<string>('');
  const [manufacturersChecbox, setManufacturerCheckbox] = useState<string[]>([]);
  const [manufacturersChecboxMore, setManufacturerCheckboxMore] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const adminGoods = useAppSelector((state) => state.adminReducer.goods);

  useEffect(() => {
    if (!priceRangeMin && !priceRangeMax) {
      dispatch(reloadGoods(adminGoods));
      if (activeFilter) {
        dispatch(filterGoods(activeFilter));
      }
    } else {
      dispatch(reloadGoods(adminGoods));
      if (activeFilter) {
        dispatch(filterGoods(activeFilter));
      }
      dispatch(filterPriceRangeGoods([priceRangeMin, priceRangeMax]));
    }
    if (manufacturersChecbox.length) {
      dispatch(filterManufacturerGoods(manufacturersChecbox));
    }
    setSorting(sorting);

    // switch (sorting) {
    //   case 'price+':
    //     dispatch(sortGoodsByPrice('+'));
    //     break;
    //   case 'price-':
    //     dispatch(sortGoodsByPrice('-'));
    //     break;
    //   case 'title+':
    //     dispatch(sortGoodsByTitle('+'));
    //     break;
    //   case 'title-':
    //     dispatch(sortGoodsByTitle('-'));
    //     break;
  }, [priceRangeMin, priceRangeMax, manufacturersChecbox]);

  const filterPriceRangeHandlerMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRangeMin(e.target.value);
  };
  const filterPriceRangeHandlerMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRangeMax(e.target.value);
  };

  const filterManufacturerHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setManufacturerSearch('');

    const { name } = e.target;

    if (!manufacturersChecbox.includes(name)) {
      setManufacturerCheckbox([...manufacturersChecbox, name]);
    } else {
      setManufacturerCheckbox(manufacturersChecbox.filter((manufacturer) => manufacturer !== name));
    }
  };

  const filterManufacturerHandlerSeearch = (manufacturer: string) => {
    if (manufacturerSearch) {
      dispatch(reloadGoods(adminGoods));
      dispatch(filterManufacturerGoods([manufacturer.trim()]));
    }
  };

  const manufacturerCount = (manufacturer: string) => {
    let res = catalogGoods.filter((good) => good.manufacturer === manufacturer);
    return res.length;
  };

  return (
    <aside className="filter">
      <h2>
        ПОДБОР ПО ПАРАМЕТРАМ
        <span onClick={() => setActiveParameters(!activeParameters)}>
          <img className={!activeParameters ? 'rotated' : ''} src={arrow4} alt="arrow" />
        </span>
      </h2>
      {activeParameters && (
        <>
          <p>
            Цена <span>₸</span>
          </p>
          <div>
            <input
              type="number"
              placeholder="0"
              onChange={filterPriceRangeHandlerMin}
              value={priceRangeMin}
            />
            <span className="filter-span">-</span>
            <input
              type="number"
              placeholder="10000"
              onChange={filterPriceRangeHandlerMax}
              value={priceRangeMax}
            />
          </div>
          <div className="filter__manufacturer">
            <h3>Производитель</h3>
            <div className="filter__manufacturer-container">
              <input
                type="text"
                placeholder="Поиск..."
                value={manufacturerSearch}
                onChange={(e) => setManufacturerSearch(e.target.value)}
              />
              <button onClick={() => filterManufacturerHandlerSeearch(manufacturerSearch)}>
                <img src={search} alt="search" />
              </button>
            </div>
            <ul id="manufacturers">
              {manufacturersChecboxMore
                ? manufacturers.map((manufacturer) => (
                    <li key={manufacturer}>
                      <input
                        className="filter__manufacturer-checkbox"
                        type="checkbox"
                        id={manufacturer}
                        onChange={filterManufacturerHandler}
                        name={manufacturer}
                      />
                      <label htmlFor={manufacturer}>
                        {manufacturer}
                        <span>({manufacturerCount(manufacturer)})</span>
                      </label>
                    </li>
                  ))
                : manufacturers.slice(0, 4).map((manufacturer) => (
                    <li key={manufacturer}>
                      <input
                        className="filter__manufacturer-checkbox"
                        type="checkbox"
                        id={manufacturer}
                        onChange={filterManufacturerHandler}
                        name={manufacturer}
                      />
                      <label htmlFor={manufacturer}>
                        {manufacturer}
                        <span>({manufacturerCount(manufacturer)})</span>
                      </label>
                    </li>
                  ))}
            </ul>
            <p onClick={() => setManufacturerCheckboxMore(!manufacturersChecboxMore)}>
              {!manufacturersChecboxMore ? 'Показать все' : 'Скрыть'}
              <img
                className={manufacturersChecboxMore ? 'polygon polygon-rotated' : 'polygon'}
                src={polygon}
                alt="polygon"
              />
            </p>
          </div>
        </>
      )}
      <div className="filter__body">
        <h2>Тип ухода</h2>
        <ul>
          <li
            className={activeFilter == 'body' ? 'activeAside' : ''}
            onClick={() => filterHandler('body')}>
            Уход за телом
          </li>
          <li
            className={activeFilter == 'hands' ? 'activeAside' : ''}
            onClick={() => filterHandler('hands')}>
            Уход за руками
          </li>
          <li
            className={activeFilter == 'foot' ? 'activeAside' : ''}
            onClick={() => filterHandler('foot')}>
            Уход за ногами
          </li>
          <li
            className={activeFilter == 'face' ? 'activeAside' : ''}
            onClick={() => filterHandler('face')}>
            Уход за лицом
          </li>
          <li
            className={activeFilter == 'hair' ? 'activeAside' : ''}
            onClick={() => filterHandler('hair')}>
            Уход за волосами
          </li>
          <div>
            <h4>Сортировка:</h4>
            <select value={sorting} onChange={sortHandler}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        </ul>
      </div>
      {/* <div className='filter__brand'>
                <h3>Бренд</h3>
                <div className='filter__brand-container'>
                    <input type='text' placeholder='Поиск...' />
                    <button>
                        <img src={search} alt='search' />
                    </button>
                </div>
                <ul>
                    <li>
                        <input type='checkbox' id='5' />
                        <label htmlFor='5'>Nivea<span>(56)</span></label>
                    </li>
                    <li>
                        <input type='checkbox' id='6' />
                        <label htmlFor='6'>GRIFON<span>(66)</span></label>
                    </li>
                    <li>
                        <input type='checkbox' id='7' />
                        <label htmlFor='7'>Домашний сундук<span>(46)</span></label>
                    </li>
                    <li>
                        <input type='checkbox' id='8' />
                        <label htmlFor='8'>HELP<span>(21)</span></label>
                    </li>
                </ul>
                <p>Показать все <img src={polygon} alt='polygon' /></p>
                <div className='filter__brand-btns'>
                    <button className='filter__brand-btn-1'>Показать</button>
                    <button className='filter__brand-btn-2'>
                        <img src={bin} alt='bin' />
                    </button>
                </div>
            </div>
            <div className='filter__body'>
                <h2 onClick={() =>filterHandler('body')}>Уход за телом</h2>
                <ul>
                    <li>Эпиляция и депиляция</li>
                    <li>Средства для ванны и душа</li>
                    <li>Скрабы, пилинги и пр.</li>
                    <li>Мочалки и губки для тела</li>
                    <li>Кремы, лосьоны, масла</li>
                    <li>Интимный уход</li>
                    <li>Дезодоранты, антиперспиранты</li>
                    <li>Гели для душа</li>
                </ul>
            </div>
            <div className='filter__hands'>
                <h2 onClick={() =>filterHandler('hands')}>Уход за руками</h2>
                <ul>
                    <li>Увлажнение и питание</li>
                    <li>Средства для ногтей</li>
                    <li>Мыло твердое</li>
                    <li>Мыло жидкое</li>
                    <li>Крем для рук</li>
                    <li>Интимный уход</li>
                    <li>Защита рук</li>
                    <li>Жидкость для снятия лака</li>
                </ul>
            </div>
            <div className='filter__foots'>
                <h2>Уход за ногами</h2>
                <ul>
                    <li>Скрабы, пилинги</li>
                    <li>Пилки, ролики</li>
                    <li>Крем для ног</li>
                    <li>Дезодоранты для ног</li>
                </ul>
            </div>
            <div className='filter__face'>
                <h2>Уход за лицом</h2>
                <ul>
                    <li>Тональные средства</li>
                    <li>Средства для снятия макияжа</li>
                    <li>Средства для очищения</li>
                    <li>Маски, скрабы, сыворотки</li>
                    <li>Крем для лица</li>
                    <li>Крем для век</li>
                    <li>Жидкость для снятия макияжа</li>
                    <li>Гигиеническая помада</li>
                </ul>
            </div>
            <div className='filter__hair'>
                <h2>Уход за волосами</h2>
                <ul>
                    <li>Шампуни</li>
                    <li>Средства для укладки</li>
                    <li>Средства для окрашивания волос</li>
                    <li>Маски, сыворотки, масла</li>
                    <li>Кондиционеры, бальзамы</li>
                </ul>
            </div>
            <div className='filter__tan'>
                <h2>Средства для загара</h2>
                <ul>
                    <li>Средства после загара</li>
                </ul>
            </div>
            <div className='filter__shaving'>
                <h2>Средства для бритья</h2>
                <ul>
                    <li>Станки и кассеты</li>
                    <li>После бритья</li>
                    <li>Для бритья</li>
                </ul>
            </div>
            <div className='filter__kits'>
                <h2>Подарочные наборы</h2>
                <ul>
                    <li>Для мужчин</li>
                    <li>Для женщин</li>
                </ul>
            </div>
            <div className='filter__brands'>
                <h2>Бренды</h2>
                <div>
                    <div className='filter__brands-container-1'>
                        <img src={brand1} alt='brand' />
                        <img src={brand2} alt='brand' />
                    </div>
                    <img id='brand3' src={brand3} alt='brand' />
                    <div className='filter__brands-container-2'>
                        <img src={brand4} alt='brand' />
                        <img src={brand5} alt='brand' />
                    </div>
                </div>
                <p>Показать все <img src={polygon} alt='polygon' /></p>
            </div> */}
    </aside>
  );
};

export default FilterAside;
