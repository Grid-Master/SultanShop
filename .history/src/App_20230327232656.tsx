import { FC } from 'react';
import './App.sass';
import Header from './components/header/Header';
import Catalog from './components/catalog/Catalog';
import Panel from './components/panel/Panel';
import Footer from './components/footer/Footer';
import CardGood from './components/cardGood/CardGood';
import {Routes, Route} from 'react-router-dom'

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Panel />
      <Routes>
        <Route path='/catalog'  element={<Catalog />} />  
        <Route path='/catalog/:id' element={<CardGood />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
