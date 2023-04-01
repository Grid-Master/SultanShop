import { FC } from 'react';

interface IModalProps {
  active: boolean;
  setActive: any;
}

const Modal: FC<IModalProps> = ({ active, setActive }) => {
  return (
    <div className="modal" onClick={() => setActive(false)}>
      <div className="modal__content"></div>
    </div>
  );
};

export default Modal;
