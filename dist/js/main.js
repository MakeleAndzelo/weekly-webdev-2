/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/insert-css/index.js":
/*!******************************************!*\
  !*** ./node_modules/insert-css/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var inserted = [];\n\nmodule.exports = function (css) {\n    if (inserted.indexOf(css) >= 0) return;\n    inserted.push(css);\n    \n    var elem = document.createElement('style');\n    var text = document.createTextNode(css);\n    elem.appendChild(text);\n    \n    if (document.head.childNodes.length) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n    }\n    else {\n        document.head.appendChild(elem);\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/insert-css/index.js?");

/***/ }),

/***/ "./node_modules/normalize-css/index.js":
/*!*********************************************!*\
  !*** ./node_modules/normalize-css/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var insert = __webpack_require__(/*! insert-css */ \"./node_modules/insert-css/index.js\");\nvar normalize = __webpack_require__(/*! ./normalize */ \"./node_modules/normalize-css/normalize.js\");\n\ninsert(normalize);\n\n\n//# sourceURL=webpack:///./node_modules/normalize-css/index.js?");

/***/ }),

/***/ "./node_modules/normalize-css/normalize.js":
/*!*************************************************!*\
  !*** ./node_modules/normalize-css/normalize.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/*! normalize.css v2.1.3 | MIT License | git.io/normalize */\\n\\n/* ==========================================================================\\n   HTML5 display definitions\\n   ========================================================================== */\\n\\n/**\\n * Correct `block` display not defined in IE 8/9.\\n */\\n\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmain,\\nnav,\\nsection,\\nsummary {\\n    display: block;\\n}\\n\\n/**\\n * Correct `inline-block` display not defined in IE 8/9.\\n */\\n\\naudio,\\ncanvas,\\nvideo {\\n    display: inline-block;\\n}\\n\\n/**\\n * Prevent modern browsers from displaying `audio` without controls.\\n * Remove excess height in iOS 5 devices.\\n */\\n\\naudio:not([controls]) {\\n    display: none;\\n    height: 0;\\n}\\n\\n/**\\n * Address `[hidden]` styling not present in IE 8/9.\\n * Hide the `template` element in IE, Safari, and Firefox < 22.\\n */\\n\\n[hidden],\\ntemplate {\\n    display: none;\\n}\\n\\n/* ==========================================================================\\n   Base\\n   ========================================================================== */\\n\\n/**\\n * 1. Set default font family to sans-serif.\\n * 2. Prevent iOS text size adjust after orientation change, without disabling\\n *    user zoom.\\n */\\n\\nhtml {\\n    font-family: sans-serif; /* 1 */\\n    -ms-text-size-adjust: 100%; /* 2 */\\n    -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/**\\n * Remove default margin.\\n */\\n\\nbody {\\n    margin: 0;\\n}\\n\\n/* ==========================================================================\\n   Links\\n   ========================================================================== */\\n\\n/**\\n * Remove the gray background color from active links in IE 10.\\n */\\n\\na {\\n    background: transparent;\\n}\\n\\n/**\\n * Address `outline` inconsistency between Chrome and other browsers.\\n */\\n\\na:focus {\\n    outline: thin dotted;\\n}\\n\\n/**\\n * Improve readability when focused and also mouse hovered in all browsers.\\n */\\n\\na:active,\\na:hover {\\n    outline: 0;\\n}\\n\\n/* ==========================================================================\\n   Typography\\n   ========================================================================== */\\n\\n/**\\n * Address variable `h1` font-size and margin within `section` and `article`\\n * contexts in Firefox 4+, Safari 5, and Chrome.\\n */\\n\\nh1 {\\n    font-size: 2em;\\n    margin: 0.67em 0;\\n}\\n\\n/**\\n * Address styling not present in IE 8/9, Safari 5, and Chrome.\\n */\\n\\nabbr[title] {\\n    border-bottom: 1px dotted;\\n}\\n\\n/**\\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\\n */\\n\\nb,\\nstrong {\\n    font-weight: bold;\\n}\\n\\n/**\\n * Address styling not present in Safari 5 and Chrome.\\n */\\n\\ndfn {\\n    font-style: italic;\\n}\\n\\n/**\\n * Address differences between Firefox and other browsers.\\n */\\n\\nhr {\\n    -moz-box-sizing: content-box;\\n    box-sizing: content-box;\\n    height: 0;\\n}\\n\\n/**\\n * Address styling not present in IE 8/9.\\n */\\n\\nmark {\\n    background: #ff0;\\n    color: #000;\\n}\\n\\n/**\\n * Correct font family set oddly in Safari 5 and Chrome.\\n */\\n\\ncode,\\nkbd,\\npre,\\nsamp {\\n    font-family: monospace, serif;\\n    font-size: 1em;\\n}\\n\\n/**\\n * Improve readability of pre-formatted text in all browsers.\\n */\\n\\npre {\\n    white-space: pre-wrap;\\n}\\n\\n/**\\n * Set consistent quote types.\\n */\\n\\nq {\\n    quotes: \\\"\\\\201C\\\" \\\"\\\\201D\\\" \\\"\\\\2018\\\" \\\"\\\\2019\\\";\\n}\\n\\n/**\\n * Address inconsistent and variable font size in all browsers.\\n */\\n\\nsmall {\\n    font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\\n */\\n\\nsub,\\nsup {\\n    font-size: 75%;\\n    line-height: 0;\\n    position: relative;\\n    vertical-align: baseline;\\n}\\n\\nsup {\\n    top: -0.5em;\\n}\\n\\nsub {\\n    bottom: -0.25em;\\n}\\n\\n/* ==========================================================================\\n   Embedded content\\n   ========================================================================== */\\n\\n/**\\n * Remove border when inside `a` element in IE 8/9.\\n */\\n\\nimg {\\n    border: 0;\\n}\\n\\n/**\\n * Correct overflow displayed oddly in IE 9.\\n */\\n\\nsvg:not(:root) {\\n    overflow: hidden;\\n}\\n\\n/* ==========================================================================\\n   Figures\\n   ========================================================================== */\\n\\n/**\\n * Address margin not present in IE 8/9 and Safari 5.\\n */\\n\\nfigure {\\n    margin: 0;\\n}\\n\\n/* ==========================================================================\\n   Forms\\n   ========================================================================== */\\n\\n/**\\n * Define consistent border, margin, and padding.\\n */\\n\\nfieldset {\\n    border: 1px solid #c0c0c0;\\n    margin: 0 2px;\\n    padding: 0.35em 0.625em 0.75em;\\n}\\n\\n/**\\n * 1. Correct `color` not being inherited in IE 8/9.\\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\\n */\\n\\nlegend {\\n    border: 0; /* 1 */\\n    padding: 0; /* 2 */\\n}\\n\\n/**\\n * 1. Correct font family not being inherited in all browsers.\\n * 2. Correct font size not being inherited in all browsers.\\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\\n */\\n\\nbutton,\\ninput,\\nselect,\\ntextarea {\\n    font-family: inherit; /* 1 */\\n    font-size: 100%; /* 2 */\\n    margin: 0; /* 3 */\\n}\\n\\n/**\\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\\n * the UA stylesheet.\\n */\\n\\nbutton,\\ninput {\\n    line-height: normal;\\n}\\n\\n/**\\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\\n * All other form control elements do not inherit `text-transform` values.\\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\\n * Correct `select` style inheritance in Firefox 4+ and Opera.\\n */\\n\\nbutton,\\nselect {\\n    text-transform: none;\\n}\\n\\n/**\\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\\n *    and `video` controls.\\n * 2. Correct inability to style clickable `input` types in iOS.\\n * 3. Improve usability and consistency of cursor style between image-type\\n *    `input` and others.\\n */\\n\\nbutton,\\nhtml input[type=\\\"button\\\"], /* 1 */\\ninput[type=\\\"reset\\\"],\\ninput[type=\\\"submit\\\"] {\\n    -webkit-appearance: button; /* 2 */\\n    cursor: pointer; /* 3 */\\n}\\n\\n/**\\n * Re-set default cursor for disabled elements.\\n */\\n\\nbutton[disabled],\\nhtml input[disabled] {\\n    cursor: default;\\n}\\n\\n/**\\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\\n * 2. Remove excess padding in IE 8/9/10.\\n */\\n\\ninput[type=\\\"checkbox\\\"],\\ninput[type=\\\"radio\\\"] {\\n    box-sizing: border-box; /* 1 */\\n    padding: 0; /* 2 */\\n}\\n\\n/**\\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\\n *    (include `-moz` to future-proof).\\n */\\n\\ninput[type=\\\"search\\\"] {\\n    -webkit-appearance: textfield; /* 1 */\\n    -moz-box-sizing: content-box;\\n    -webkit-box-sizing: content-box; /* 2 */\\n    box-sizing: content-box;\\n}\\n\\n/**\\n * Remove inner padding and search cancel button in Safari 5 and Chrome\\n * on OS X.\\n */\\n\\ninput[type=\\\"search\\\"]::-webkit-search-cancel-button,\\ninput[type=\\\"search\\\"]::-webkit-search-decoration {\\n    -webkit-appearance: none;\\n}\\n\\n/**\\n * Remove inner padding and border in Firefox 4+.\\n */\\n\\nbutton::-moz-focus-inner,\\ninput::-moz-focus-inner {\\n    border: 0;\\n    padding: 0;\\n}\\n\\n/**\\n * 1. Remove default vertical scrollbar in IE 8/9.\\n * 2. Improve readability and alignment in all browsers.\\n */\\n\\ntextarea {\\n    overflow: auto; /* 1 */\\n    vertical-align: top; /* 2 */\\n}\\n\\n/* ==========================================================================\\n   Tables\\n   ========================================================================== */\\n\\n/**\\n * Remove most spacing between table cells.\\n */\\n\\ntable {\\n    border-collapse: collapse;\\n    border-spacing: 0;\\n}\\n\"\n\n\n//# sourceURL=webpack:///./node_modules/normalize-css/normalize.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.sass */ \"./src/sass/main.sass\");\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize-css */ \"./node_modules/normalize-css/index.js\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nlet header = document.querySelector('.header');\nlet banner = document.querySelector('.banner');\nlet hamburgerIcon = document.querySelector('.nav-btn');\nlet navItems = document.querySelectorAll('.header-nav .nav-item');\n\nif (0 < window.scrollY) {\n  header.classList.add('scroll');\n}\n\nwindow.addEventListener('scroll', () => {\n  if (0 < window.scrollY) {\n    header.classList.add('scroll');\n  } else {\n    header.classList.remove('scroll');\n  }\n});\n\nhamburgerIcon.addEventListener('click', (event) => {\n  event.preventDefault();\n  header.classList.toggle('nav-open');\n});\n\nnavItems.forEach(item => {\n  item.addEventListener('click', (event) => {\n    if (header.classList.contains('nav-open')) {\n      header.classList.remove('nav-open');\n    }\n\n    let id = event.target.href.split(\"#\")[1];\n    let offset = header.offsetHeight;\n    let target = document.querySelector(`#${id}`).offsetTop - offset;\n\n    window.scroll({\n      top: target,\n      left: 0,\n      behavior: 'smooth'\n    });\n\n    event.preventDefault();\n  });\n});\n\nwindow.addEventListener('scroll', event => {\n  navItems.forEach(item => {\n    let id = item.href.split(\"#\")[1];\n    let offset = header.offsetHeight;\n    let target = document.querySelector(`#${id}`);\n\n    item.classList.remove('active');\n\n    if ((target.offsetTop <= (window.scrollY + offset)) && ((target.offsetTop + target.offsetHeight) > (window.scrollY + offset))) {\n      item.classList.add('active');\n    }\n  });\n});\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/sass/main.sass":
/*!****************************!*\
  !*** ./src/sass/main.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/sass/main.sass?");

/***/ })

/******/ });