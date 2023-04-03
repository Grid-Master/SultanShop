import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IGood } from '../../data/goods';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import './cardGood.sass';
import volumeIcon from '../../images/volumeIcon.png';
import weightIcon from '../../images/weightIcon.png';
import download from '../../images/download2.png';
import graph from '../../images/graph.png';
import cart from '../../images/cart2.png';
import { addGood } from '../../store/cartSlice';

const CardGood: FC = () => {
  const [good, setGood] = useState<IGood>();
  const [goodsCount, setGoodsCount] = useState<number>(1);
  const params = useParams();
  const currentGoods = useAppSelector((state) => state.catalogGoods.goods);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let good = currentGoods.find((good) => good.barcode === params.id);
    setGood(good);
  }, []);

  const addGoodToCartHandler = (good: IGood | undefined) => {
    if (good) dispatch(addGood({ ...good, count: goodsCount }));
  };

  return (
    <div className="cardGood">
      <div className="container">
        <div className="cardGood__inner">
          <div className="cardGood__inner-image">
            <img src={good?.image} alt="goodPhoto" />
          </div>
          <div>
            <span>В наличии</span>
            <h2>
              <span>{good?.brand}</span>
              {good?.title}
            </h2>
            <h5>
              <img
                src={good?.measureType === 'volume' ? volumeIcon : weightIcon}
                alt="measureIcon"
              />
              {good?.measureValue}
            </h5>
            <div className="cardGood__inner-container-1">
              <h3>{good?.price} ₸</h3>
              <div>
                <button
                  disabled={goodsCount === 1 ? true : false}
                  onClick={() => setGoodsCount(goodsCount - 1)}>
                  -
                </button>
                <h4>{goodsCount}</h4>
                <button onClick={() => setGoodsCount(goodsCount + 1)}>+</button>
              </div>
              <button onClick={() => addGoodToCartHandler(good)}>
                В корзину
                <img src={cart} alt="carts" />
              </button>
            </div>
            <div className="cardGood__inner-container-2">
              <button
                className="cardGood__inner-container-2-btn-3"
                onClick={() => addGoodToCartHandler(good)}>
                В корзину
                <img src={cart} alt="carts" />
              </button>
              <button className="cardGood__inner-container-2-btn-1">
                <img src={graph} alt="graph" />
              </button>
              <div>
                <p>
                  При покупке от <span>10 000 ₸</span> бесплатная доставка по Кокчетаву и области
                </p>
                <button className="cardGood__inner-container-2-btn-2">
                  Прайс-лист
                  <img src={download} alt="download" />
                </button>
              </div>
            </div>
            <ul className="cardGood__inner-info">
              <li>
                Производитель: <span>{good?.manufacturer}</span>
              </li>
              <li>
                Бренд: <span>{good?.brand}</span>
              </li>
              <li>
                Артикул: <span>{good?.barcode.slice(0, 6)}</span>
              </li>
              <li>
                Штрихкод: <span>{good?.barcode}</span>
              </li>
            </ul>
            <p className="cardGood__inner-description">
              <h3>Описание</h3>
              {good?.description}
            </p>
            <ul className="cardGood__inner-characteristics">
              <h3>Характеристики</h3>
              <li>
                Назначение: <span>{good?.brand}</span>
              </li>
              <li>
                Тип: <span>{good?.barcode}</span>
              </li>
              <li>
                Производитель: <span>{good?.manufacturer}</span>
              </li>
              <li>
                Бренд: <span>{good?.brand}</span>
              </li>
              <li>
                Штрихкод: <span>{good?.barcode.slice(0, 6)}</span>
              </li>
              <li>
                Штрихкод: <span>{good?.barcode}</span>
              </li>
              <li>
                Вес: <span>{good?.measureValue}</span>
              </li>
              <li>
                Объем: <span>{good?.measureValue}</span>
              </li>
              <li>
                Кол-во в коробке: <span>{good?.measureValue}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGood;
