import { atom } from "recoil";
import { key } from "../key";

export const atomModal = atom({
  key: key.modal,
  default: false,
});

export default atomModal;
