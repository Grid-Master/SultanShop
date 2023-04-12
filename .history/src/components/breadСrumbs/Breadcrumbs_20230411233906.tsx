import { FC, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hook';
import './breadcrumbs.sass';

const Breadcrumbs: FC = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const [careType, setCareType] = useState<string>('');
  const currentGoods = useAppSelector((state) => state.catalogGoods.goods);

  useEffect(() => {
    let good = currentGoods.find((good) => good.barcode === path.pathname.split('/').at(2));
    if (good?.careType.includes('hands')) {
      setCareType('Уход за руками');
    } else if (good?.careType.includes('body')) {
      setCareType('Уход за телом');
    }
  }, [path]);

  const navigateHandler = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="breadcrumbs-inner">
          <h4>Главная</h4>
          {path.pathname.split('/').at(2) === 'catalog' ? (
            <h4 data-testid="catalogLink" onClick={() => navigateHandler('/SultanShop/catalog')}>
              Каталог
            </h4>
          ) : null}
          {path.pathname.split('/').at(2) === 'cart' ? (
            <h4 onClick={() => navigateHandler('/SultanShop/cart')}>Корзина</h4>
          ) : null}
          {path.pathname.split('/').length > 3 && path.pathname.split('/').at(2) === 'catalog' ? (
            <p>{careType}</p>
          ) : null}
          {path.pathname.split('/').length > 3 && path.pathname.split('/').at(2) === 'cart' ? (
            <p>Оформление заказа</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
