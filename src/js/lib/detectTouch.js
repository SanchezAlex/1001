export default function isTouchDevice() {
  return 'ontouchstart' in window       
        || navigator.maxTouchPoints && document.body.classList.add('mobile');
};
