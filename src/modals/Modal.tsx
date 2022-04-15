import {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.css';

type ModalProps = {
    children: React.ReactElement
}

function Modal(props: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
      modalRef.current!.focus();
  });
  return <>
    {
      ReactDOM.
          createPortal(<div ref={modalRef} className={style.modal}>
            {props.children}
          </div>,
        document.getElementById('modal-root')!)
    }
  </>;
}

export default Modal;
