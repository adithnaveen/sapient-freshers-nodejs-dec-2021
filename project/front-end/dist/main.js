/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script/action.js":
/*!**************************!*\
  !*** ./script/action.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\n * \n * @param {http://localhost:3322/users} url \n * @param {RegisterObject} obj \n * @author Navene \n * @see to post the user to server \n */\nexports.registerUserAction = (url, obj) => {\n    fetch(url, {\n        method:\"POST\",\n       \n        body:JSON.stringify(obj),\n        headers: {\n            \"Content-Type\" :\"application/json\"\n        }\n    })\n        .then(resp => resp.json())\n        .then(data => {\n            console.log(data);\n            location.href =\"../index.html\";\n        })\n        .catch(err => console.log(\"Error Register \" + err));\n}\n\n//# sourceURL=webpack://front-end/./script/action.js?");

/***/ }),

/***/ "./script/app.js":
/*!***********************!*\
  !*** ./script/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// many require goes here \nconst {validateRegisterEmail}  = __webpack_require__(/*! ./util */ \"./script/util.js\");\nconst {registerUserAction} = __webpack_require__(/*! ./action */ \"./script/action.js\");\n\nconst initApp =() => {\n    const registerBtn = document.querySelector(\"#regBtn\"); \n    registerBtn.addEventListener(\"click\", registerUser);\n}\n\nconst registerUser = (event) => {\n    // this will stop to submit the server side \n    event.preventDefault();\n\n    let obj = {}; \n    obj.email = document.querySelector(\"#inputEmail\").value; \n    obj.password = document.querySelector(\"#inputPassword\").value;\n\n    if(!validateRegisterEmail(obj))\n        return false; \n\n\n    registerUserAction(\"http://localhost:3322/users\", obj)\n\n}\n\ninitApp();\n\n\n//# sourceURL=webpack://front-end/./script/app.js?");

/***/ }),

/***/ "./script/util.js":
/*!************************!*\
  !*** ./script/util.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("// all you validation code shall go here \n\n// simiple function to validate the name lenght \n\n/**\n * @author Naveen \n * @see to say hi \n */\nexports.hi =() => {\n    console.log(\"hi\");\n}\n\n/**\n * \n * @param {*} registerObj \n * @returns boolean value \n * @author Naveen \n * @see to validate email address and return value based on the condition \n */\nexports.validateRegisterEmail = (registerObj) => {\n    console.log(registerObj);\n    return registerObj.email.length>8;\n}\n\n//# sourceURL=webpack://front-end/./script/util.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script/app.js");
/******/ 	
/******/ })()
;