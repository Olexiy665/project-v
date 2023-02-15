import { addClassNameId, performInRAF } from "./utils";
export const initDisclaimer = () => {
  performInRAF(() => addClassNameId("disclaimer", "show-disclaimer"));
};
