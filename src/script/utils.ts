export const performInRAF = (callback: () => void) => {
  requestAnimationFrame(callback);
};

export const addClassNameId = (elId: string, className: string) => {
  document.getElementById(elId)?.classList.add(className);
};
