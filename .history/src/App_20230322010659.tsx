import { FC } from 'react';
import './App.sass';
import Header from './components/header/Header';
import Catalog from './components/catalog/Catalog';
import Panel from './components/panel/Panel';
import Footer from './components/footer/Footer';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Panel />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
