import React from "react";
import Modal from "./components/Modal";

interface ModalProviderProps {
  children: React.ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  return (
    <>
      {children}
      <Modal />
    </>
  );
};

export default ModalProvider;
