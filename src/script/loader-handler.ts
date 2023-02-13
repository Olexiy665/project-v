import { addClassNameId, performInRAF } from "./utils";
import "../styles/loader.css";
export const hideLoader = () => {
  performInRAF(() => addClassNameId("loader", "loader-loaded"));
};

export const showReflection = () => {
  performInRAF(() =>
    addClassNameId("loader--sun-container", "show-reflection")
  );
};
