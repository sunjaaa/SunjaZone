import { atom } from "recoil";
import { key } from "../key";

import { Content } from "./types";

export const atomModalContents = atom<Content | null>({
  key: key.modalContents,
  default: null,
});
