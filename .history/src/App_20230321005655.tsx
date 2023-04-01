import { FC } from 'react';
import './App.sass';
import Header from './components/header/Header';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Panel />
    </div>
  );
}

export default App;
