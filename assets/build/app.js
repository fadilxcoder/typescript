/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/class/util.ts":
/*!***************************!*\
  !*** ./src/class/util.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.Util = void 0;
var Util = /** @class */ (function () {
    function Util() {
        this.endpoint = 'xyz';
        this.map(this.findOne(1));
    }
    Util.prototype.findOne = function (id) {
        return {
            id: 1,
            full_name: 'full_name',
            email: 'email',
            phone_number: 'phone_number',
            address: 'address',
            job: 'job',
            company: 'company',
            card_type: 'card_type',
            account_number: 'account_number'
        };
    };
    Util.prototype.map = function (user) {
        console.log(user);
    };
    return Util;
}());
exports.Util = Util;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

exports.__esModule = true;
var util_1 = __webpack_require__(/*! ./class/util */ "./src/class/util.ts");
new util_1.Util();

})();

/******/ })()
;