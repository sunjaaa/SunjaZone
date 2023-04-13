// hooks/useModal.ts
import { useRecoilState } from "recoil";
import { app } from "@/recoils";
import { Content } from "@/recoils/app/modalContents/types";

const useModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(app.modal.atomModal);
  const [, setModalContent] = useRecoilState(
    app.modalContents.atomModalContents
  );

  const open = (content: Content) => {
    const updatedContent: Content = {
      ...content,
      subAction: {
        ...content.subAction,
        onPress: content.subAction.onPress || ((close) => close()),
      },
      bgAction: content.bgAction || false,
    };
    setModalContent(updatedContent);
    setIsOpen(true);
  };

  return { isOpen, open };
};

export default useModal;
