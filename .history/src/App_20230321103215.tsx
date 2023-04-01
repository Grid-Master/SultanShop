import { FC } from 'react';
import './App.sass';
import Header from './components/header/Header';
import Catalog from './components/main/Main';
import Panel from './components/panel/Panel';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Panel />
      <Catalog />
    </div>
  );
}

export default App;
