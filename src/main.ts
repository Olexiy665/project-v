import "./styles/normalize.css";
import "./styles/intro-section.css";
import { hideLoader, showReflection } from "./script/loader-handler";
import {
  runIntroSection,
  showIntroHeader,
  showIntroSection,
} from "./script/intro-section-handler";

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  setTimeout(() => {
    hideLoader();
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
  }, 5000);
});
export {};
