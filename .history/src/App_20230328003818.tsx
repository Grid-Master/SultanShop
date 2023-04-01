import { FC, useEffect } from 'react';
import './App.sass';
import Header from './components/header/Header';
import Catalog from './components/catalog/Catalog';
import Panel from './components/panel/Panel';
import Footer from './components/footer/Footer';
import CardGood from './components/cardGood/CardGood';
import {Routes, Route, useNavigate} from 'react-router-dom'

const App: FC = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    navigate('/catalog')
  }, [])

  return (
    <div className="App">
      <Header />
      <Panel />
      <ul>
        <li>Главная</li>
        <li>Косметика и гигиена</li>
        <li>Уход за руками</li>
        <li>Мыло твердое</li>
        <li>BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот, 90 г</li>
      </ul>
      <Routes>
        <Route path='/catalog'  element={<Catalog />} />  
        <Route path='/catalog/:id' element={<CardGood />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
