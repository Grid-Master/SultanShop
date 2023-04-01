import { FC } from 'react';
import './App.sass';
import Header from './components/header/Header';
import Panel from './components/panel/Panel';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Panel />
    </div>
  );
}

export default App;
