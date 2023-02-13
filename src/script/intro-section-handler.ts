import { addClassNameId, performInRAF } from "./utils";

export const showIntroSection = () => {
  performInRAF(() => addClassNameId("intro-section", "show-intro"));
};

export const runIntroSection = () => {
  performInRAF(() => addClassNameId("intro-section", "run-intro"));
};

export const showIntroHeader = () => {
  performInRAF(() => addClassNameId("intro--header", "show-intro--header"));
};
