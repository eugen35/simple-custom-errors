(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["simple-custom-errors"] = factory();
	else
		root["simple-custom-errors"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCustomErrorClass = undefined;

var _core = __webpack_require__(1);

exports.createCustomErrorClass = _core.createCustomErrorClass;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUN1c3RvbUVycm9yQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7UUFFUUEsc0IiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbW9zaGNoYW5za2l5L1dlYnN0b3JtUHJvamVjdHMvc2ltcGxlLWN1c3RvbS1lcnJvcnMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUN1c3RvbUVycm9yQ2xhc3N9IGZyb20gJy4vc3JjL2NvcmUnO1xyXG5cclxuZXhwb3J0IHtjcmVhdGVDdXN0b21FcnJvckNsYXNzfTtcclxuIl19

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.createCustomErrorClass = createCustomErrorClass;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @todo /3/ Разместить в npm
function createCustomErrorClass(className) {
      return function (_Error) {
            _inherits(_class, _Error);

            function _class(message, info) {
                  _classCallCheck(this, _class);

                  // Calling parent constructor of base Error class.
                  var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, message, info));

                  // Saving class name in the property of our custom error as a shortcut.
                  // this.name = this.constructor.name; // - in browser work good, in node returns 'Error' instead of CustomError
                  var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, message));

                  _this.name = className;

                  // Capturing stack trace, excluding constructor call from it.
                  Error.captureStackTrace(_this, _this.constructor);

                  Object.assign(_this, info); // Добавляем туда те свойства, которые захотел поместить создатель
                  return _this;
            }

            return _class;
      }(Error);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcY29yZS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVDdXN0b21FcnJvckNsYXNzIiwiY2xhc3NOYW1lIiwibWVzc2FnZSIsImluZm8iLCJuYW1lIiwiRXJyb3IiLCJjYXB0dXJlU3RhY2tUcmFjZSIsImNvbnN0cnVjdG9yIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7OztRQUNnQkEsc0IsR0FBQUEsc0I7Ozs7Ozs7O0FBRGhCO0FBQ08sU0FBU0Esc0JBQVQsQ0FBZ0NDLFNBQWhDLEVBQTBDO0FBQy9DO0FBQUE7O0FBQ0UsNEJBQWFDLE9BQWIsRUFBc0JDLElBQXRCLEVBQTRCO0FBQUE7O0FBRzFCO0FBSDBCLDhIQUNwQkQsT0FEb0IsRUFDWEMsSUFEVzs7QUFNMUI7QUFDQTtBQVAwQiw4SEFJcEJELE9BSm9COztBQVExQix3QkFBS0UsSUFBTCxHQUFZSCxTQUFaOztBQUVBO0FBQ0FJLHdCQUFNQyxpQkFBTixRQUE4QixNQUFLQyxXQUFuQzs7QUFFQUMseUJBQU9DLE1BQVAsUUFBb0JOLElBQXBCLEVBYjBCLENBYUM7QUFiRDtBQWMzQjs7QUFmSDtBQUFBLFFBQXFCRSxLQUFyQjtBQWlCRCIsImZpbGUiOiJjb3JlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL21vc2hjaGFuc2tpeS9XZWJzdG9ybVByb2plY3RzL3NpbXBsZS1jdXN0b20tZXJyb3JzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRvZG8gLzMvINCg0LDQt9C80LXRgdGC0LjRgtGMINCyIG5wbVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRXJyb3JDbGFzcyhjbGFzc05hbWUpe1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBpbmZvKSB7XHJcbiAgICAgIHN1cGVyKG1lc3NhZ2UsIGluZm8pO1xyXG5cclxuICAgICAgLy8gQ2FsbGluZyBwYXJlbnQgY29uc3RydWN0b3Igb2YgYmFzZSBFcnJvciBjbGFzcy5cclxuICAgICAgc3VwZXIobWVzc2FnZSk7XHJcblxyXG4gICAgICAvLyBTYXZpbmcgY2xhc3MgbmFtZSBpbiB0aGUgcHJvcGVydHkgb2Ygb3VyIGN1c3RvbSBlcnJvciBhcyBhIHNob3J0Y3V0LlxyXG4gICAgICAvLyB0aGlzLm5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7IC8vIC0gaW4gYnJvd3NlciB3b3JrIGdvb2QsIGluIG5vZGUgcmV0dXJucyAnRXJyb3InIGluc3RlYWQgb2YgQ3VzdG9tRXJyb3JcclxuICAgICAgdGhpcy5uYW1lID0gY2xhc3NOYW1lO1xyXG5cclxuICAgICAgLy8gQ2FwdHVyaW5nIHN0YWNrIHRyYWNlLCBleGNsdWRpbmcgY29uc3RydWN0b3IgY2FsbCBmcm9tIGl0LlxyXG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcclxuXHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5mbyk7IC8vINCU0L7QsdCw0LLQu9GP0LXQvCDRgtGD0LTQsCDRgtC1INGB0LLQvtC50YHRgtCy0LAsINC60L7RgtC+0YDRi9C1INC30LDRhdC+0YLQtdC7INC/0L7QvNC10YHRgtC40YLRjCDRgdC+0LfQtNCw0YLQtdC70YxcclxuICAgIH1cclxuICB9XHJcbn0iXX0=

/***/ })
/******/ ]);
});