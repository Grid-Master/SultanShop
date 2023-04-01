import { FC, useEffect } from 'react';
import './App.sass';
import Header from './components/header/Header';
import Catalog from './components/catalog/Catalog';
import Panel from './components/panel/Panel';
import Footer from './components/footer/Footer';
import CardGood from './components/cardGood/CardGood';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Breadcrumbs from './components/breadСrumbs/Breadcrumbs';

const App: FC = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    navigate('/catalog')
  }, [])

  return (
    <div className="App">
      <Header />
      <Panel />
      <Breadcrumbs />
      <Routes>
        <Route path='/catalog'  element={<Catalog />} />  
        <Route path='/catalog/:id' element={<CardGood />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
