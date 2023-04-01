import { FC } from 'react';
import './panel2.sass';

const Panel2: FC = () => {
  return (
    <div className="panel2">
      <div className="container">
        <div className="panel2__inner">
          <h3>
            <img />
            Каталог
          </h3>
          <h3>
            <img />
            Поиск
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Panel2;
