import "./styles/normalize.css";
import "./styles/intro-section.css";
import { hideLoader, showReflection } from "./script/loader-handler";
import {
  runIntroSection,
  showIntroHeader,
  showIntroSection,
} from "./script/intro-section-handler";
import { initCar } from "./script/car";
import { initDisclaimer } from "./script/dislaimer";

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    hideLoader();
  }, 5000);

  document
    .getElementById("loader--sun")
    ?.addEventListener("transitionend", (e) => {
      const target = e.target as HTMLDivElement;
      if (target.id === "loader--sun") {
        showIntroSection();
      }
    });
  document
    .getElementById("intro--landscape")
    ?.addEventListener("animationend", (e) => {
      if (e.animationName === "showIntro") {
        runIntroSection();
        showReflection();
        setTimeout(() => {
          showIntroHeader();
        }, 1500);
      }
    });
  document
    .getElementById("intro--header")
    ?.addEventListener("transitionend", () => {
      if (
        document
          .getElementById("intro--header")
          ?.classList.contains("show-intro--header")
      ) {
        initCar();
      }
    });
  document
    .getElementById("intro--car-wrapper")
    ?.addEventListener("transitionend", (e) => {
      const target = e.target as HTMLDivElement;
      if (target.classList.contains("show-car")) {
        initDisclaimer();
      }
    });
});
export {};
