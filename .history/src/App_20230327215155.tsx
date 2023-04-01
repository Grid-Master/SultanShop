import { FC } from 'react';
import './App.sass';
import Header from './components/header/Header';
import Catalog from './components/catalog/Catalog';
import Panel from './components/panel/Panel';
import Footer from './components/footer/Footer';
import CardGood from './components/cardGood/CardGood';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Panel />
      {/* <Catalog /> */}
      <CardGood />
      <Footer />
    </div>
  );
}

export default App;
