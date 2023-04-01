import { FC } from 'react';
import search from '../../images/search2.png';
import frame from '../../images/frame2.png';
import './panel2.sass';

const Panel2: FC = () => {
  return (
    <div className="panel2">
      <div className="container">
        <div className="panel2__inner">
          <h3>
            <img src={frame} alt="frame" />
            Каталог
          </h3>
          <h3>
            <img src={search} alt="search" />
            Поиск
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Panel2;
