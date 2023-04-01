import { FC } from 'react';
import './App.sass';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Panel from './components/panel/Panel';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Panel />
      <Main />
    </div>
  );
}

export default App;
