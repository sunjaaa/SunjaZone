import { atom } from "recoil";
import { key } from "../key";
import { recoilPersist } from "recoil-persist";

const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "sunjas_homes",
  storage: localStorage,
});

export const atomHomes = atom<any>({
  key: key.homes,
  default: [],
  effects_UNSTABLE: [persistAtom],
});
