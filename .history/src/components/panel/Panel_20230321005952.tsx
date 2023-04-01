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
                </div>
            </div>
        </div>
    );
};

export default Panel;