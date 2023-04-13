import { atom } from "recoil";
import { key } from "../key";
import { recoilPersist } from "recoil-persist";

const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "sunjas_projects",
  storage: localStorage,
});

export const atomProjects = atom<any>({
  key: key.projects,
  default: [],
  effects_UNSTABLE: [persistAtom],
});
