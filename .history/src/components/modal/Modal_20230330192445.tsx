import { FC } from 'react';

interface IModalProps {
  active: boolean;
  setCtive: any;
}

const Modal: FC = () => {
  return (
    <div className="modal">
      <div className="modal__content"></div>
    </div>
  );
};

export default Modal;
