/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-starter-file/./src/scss/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/scss/index.scss\");\n\n\n\n\nconst searchBtn = document.querySelector(\".search-btn\");\nconst searchBar = document.querySelector(\".search-bar\");\nconst closeBtn = document.querySelector(\".search-bar-close\");\nconst headerTwo = document.querySelector(\".header-two\");\nsearchBtn.addEventListener(\"click\", () => {\n  searchBar.classList.toggle(\"active\");\n});\n\ncloseBtn.addEventListener(\"click\", () => {\n  searchBar.classList.remove(\"active\");\n});\n\ndocument.addEventListener(\"click\", (e) => {\n  if (!searchBar.contains(e.target) && !searchBtn.contains(e.target)) {\n    searchBar.classList.remove(\"active\");\n  }\n});\n\ndocument.addEventListener(\"keyup\", (e) => {\n  if (e.key === \"Escape\") {\n    searchBar.classList.remove(\"active\");\n  }\n});\n\n// add active class on hover\nwindow.addEventListener(\"scroll\", (e) => {\n  if(headerTwo){\n    if (window.scrollY >= 150) {\n      headerTwo.classList.add(\"active\");\n    } else {\n      headerTwo.classList.remove(\"active\");\n    }\n  }\n})\ndocument.querySelectorAll(\".dropdown-btn\").forEach(button => {\n  button.addEventListener(\"click\", function () {\n    const parent = this.closest(\".dropdown-item\");\n    const isActive = parent.classList.contains(\"active\");\n\n    // Close all dropdowns\n    document.querySelectorAll(\".dropdown-item\").forEach(item => item.classList.remove(\"active\"));\n\n    // Toggle the clicked dropdown\n    if (!isActive) parent.classList.add(\"active\");\n  });\n});\n\n// menu btn\nconst menuBtn = document.querySelector(\".menu-btn\");\nconst menu = document.querySelector(\".menu\");\nmenuBtn.addEventListener(\"click\", () => {\n  menu.classList.toggle(\"active\");\n});\n\n// close menu on click outside\ndocument.addEventListener(\"click\", (e) => {\n  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {\n    menu.classList.remove(\"active\");\n  }\n});\n\n//# sourceURL=webpack://webpack-starter-file/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;