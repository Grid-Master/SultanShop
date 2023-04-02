import { FC, useEffect, useState } from 'react';
import './App.sass';
import Header from './components/header/Header';
import Catalog from './components/catalog/Catalog';
import Panel from './components/panel/Panel';
import Footer from './components/footer/Footer';
import CardGood from './components/cardGood/CardGood';
import { Routes, Route, useNavigate, useRoutes } from 'react-router-dom';
import Breadcrumbs from './components/breadСrumbs/Breadcrumbs';
import Cart from './components/cart/Cart';
import Order from './components/order/Order';
import Panel2 from './components/panel2/Panel2';

const App: FC = () => {
  const [activeBurgerMenu, setActiveBurgerMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  // const routes = useRoutes([
  //   { path: '/catalog', element: <Catalog /> },
  //   { path: '/catalog/:id', element: <CardGood /> },
  //   { path: '/cart', element: <Cart /> },
  //   { path: '/cart/order', element: <Order /> },
  // ]);

  useEffect(() => {
    //navigate('/catalog');
  }, []);

  return (
    <div className="App">
      <Header />
      <Panel active={activeBurgerMenu} setActive={setActiveBurgerMenu} />
      <Panel2 active={activeBurgerMenu} setActive={setActiveBurgerMenu} />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<h1 onClick={() => navigate('catalog')}>главная</h1>} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CardGood />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/order" element={<Order />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
