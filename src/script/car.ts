import "../styles/car.css";
import { addClassNameId, performInRAF } from "./utils";
export const initCar = () => {
  performInRAF(() => addClassNameId("intro--car-wrapper", "show-car"));
};
