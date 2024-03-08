/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Test purpose for stage 5.4
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     console.log(request)
//     console.log("testing catching message")
// });
var ChatGPTExtension = /*#__PURE__*/function () {
  function ChatGPTExtension() {
    _classCallCheck(this, ChatGPTExtension);
    _defineProperty(this, "prompt1", "Please act as an experienced developer in chrome extension and assist me with a project.");
    _defineProperty(this, "prompt2", "Say hello world in 3 random languages.");
    // call handleRequest() in contructor to make it work
    // everytime this class is init, it will run handleRequest()
    this.handleRequest();
  }
  _createClass(ChatGPTExtension, [{
    key: "handleRequest",
    value: function handleRequest() {
      var _this = this;
      chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        // console.log(request)
        if (request.action == "PROMPT") _this.promptToChatGPT(_this.prompt1);
        if (request.action == "RENDER") _this.promptToChatGPT(_this.prompt2);
      });
    }

    // method that sends prompts to ChatGPT text box
  }, {
    key: "promptToChatGPT",
    value: function promptToChatGPT(prompt) {
      // console.log("prompting test")

      // get the text area bar from ChatGPT web page
      var input = document.querySelector("#prompt-textarea");
      // console.log(input)
      input.value = prompt;
      var button = document.querySelector("#prompt-textarea~button");

      // Check if the button is disabled, and if so, enable it by removing the 'disabled' attribute
      if (button.disabled) {
        button.disabled = false;
      }
      button.click(); // NOTE! The simulated clicking won't work as OpenAI prohibits it.
    }
  }]);
  return ChatGPTExtension;
}(); // Init an instance of ChatGPTExtension
var CGPTExtension = new ChatGPTExtension();
/******/ })()
;
//# sourceMappingURL=content.js.map