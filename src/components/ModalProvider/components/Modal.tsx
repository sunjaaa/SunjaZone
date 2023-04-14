// components/Modal.tsx
import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { app } from "@/recoils";
import styled from "@emotion/styled";

const Modal = () => {
  const [isOpen, setIsOpen] = useRecoilState(app.modal.atomModal);
  const [modalContent, setModalContent] = useRecoilState(
    app.modalContents.atomModalContents
  );

  const closeModal = () => {
    setIsOpen(false);
  };

  const { title, description, mainAction, subAction, bgAction } =
    modalContent || {};

  if (!modalContent) return null;

  const bgActionHandler = () => {
    if (bgAction) {
      closeModal();
    } else {
      alert("팝업창의 버튼을 선택해야합니다.");
    }
  };

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalBackground onClick={bgActionHandler}></ModalBackground>
      <ModalContent>
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={() => mainAction?.onPress?.(closeModal)}>
          {mainAction?.label}
        </button>
        <button onClick={() => subAction?.onPress?.(closeModal)}>
          {subAction?.label}
        </button>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${(props: { isOpen: boolean }) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 10;
`;
