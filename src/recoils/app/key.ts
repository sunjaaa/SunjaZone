import { v1 } from "uuid";

export const key = {
  modal: `modal/${v1()}`,
  modalContents: `modalContent/${v1()}`,
  homes: `homes/${v1()}`,
  projects: `projects/${v1()}`,
};
