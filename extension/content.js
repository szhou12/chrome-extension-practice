/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  console.log("testing catching message");
});
/******/ })()
;
//# sourceMappingURL=content.js.map