// Modal.js
import { useContext } from 'react';
import { ModalContext } from './ModalContext';
import './Modal.css'; // 필요한 스타일 정의

const Modal = () => {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  if (!isModalOpen) return null;

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Modal With Context API</h2>
        <p>Context API는 세 가지만 기억해라</p>
        <ul>
          <li>만든다</li>
          <li>사용한다</li>
          <li>범위를 지정해서 값을 내려준다</li>
        </ul>
        <button onClick={closeModal}>모달 닫기</button>
      </div>
    </div>
  );
};

export default Modal;
