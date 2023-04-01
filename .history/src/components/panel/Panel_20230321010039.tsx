import { FC } from 'react';
import './panel.sass'

const Panel: FC = () => {
    return (
        <div className='panel'>
            <div className='container'>
                <div className='panel__inner'>
                    <img />
                    <button></button>
                    <input />
                    <div>
                        <div>
                            <h4></h4>
                            <p></p>
                            <span></span>
                        </div>
                        <img />
                    </div>
                    <button></button>
                    <img />
                    <div>
                        <p></p>
                        <h4></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panel;