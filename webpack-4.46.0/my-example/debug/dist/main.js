(function(modules) {
	var installedModules = {};
	function __webpack_require__(moduleId) {
		if (installedModules[moduleId]) {
			return installedModules[moduleId].exports;
		}
		var module = (installedModules[moduleId] = {
			i: moduleId,
			l: false,
			exports: {}
		});
		modules[moduleId].call(
			module.exports,
			module,
			module.exports,
			__webpack_require__
		);
		module.l = true;
		return module.exports;
	}
	__webpack_require__.m = modules;
	__webpack_require__.c = installedModules;
	__webpack_require__.d = function(exports, name, getter) {
		if (!__webpack_require__.o(exports, name)) {
			Object.defineProperty(exports, name, { enumerable: true, get: getter });
		}
	};
	__webpack_require__.r = function(exports) {
		if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
			Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		}
		Object.defineProperty(exports, "__esModule", { value: true });
	};
	__webpack_require__.t = function(value, mode) {
		if (mode & 1) value = __webpack_require__(value);
		if (mode & 8) return value;
		if (mode & 4 && typeof value === "object" && value && value.__esModule)
			return value;
		var ns = Object.create(null);
		__webpack_require__.r(ns);
		Object.defineProperty(ns, "default", { enumerable: true, value: value });
		if (mode & 2 && typeof value !== "string")
			for (var key in value)
				__webpack_require__.d(
					ns,
					key,
					function(key) {
						return value[key];
					}.bind(null, key)
				);
		return ns;
	};
	__webpack_require__.n = function(module) {
		var getter =
			module && module.__esModule
				? function getDefault() {
						return module["default"];
				  }
				: function getModuleExports() {
						return module;
				  };
		__webpack_require__.d(getter, "a", getter);
		return getter;
	};
	__webpack_require__.o = function(object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	};
	__webpack_require__.p = "";
	return __webpack_require__((__webpack_require__.s = "./src/index.js"));
})({
	"../../node_modules/object.is/index.js": function(
		module,
		exports,
		__webpack_require__
	) {
		module.exports =
			typeof Object.is === "function"
				? Object.is
				: __webpack_require__("../../node_modules/object.is/is.js");
	},
	"../../node_modules/object.is/is.js": function(module, exports) {
		var is = function(x, y) {
			if (x === y) {
				return x !== 0 || 1 / x === 1 / y;
			} else {
				return x !== x && y !== y;
			}
		};
		module.exports = is;
	},
	"./src/index.js": function(module, __webpack_exports__, __webpack_require__) {
		"use strict";
		__webpack_require__.r(__webpack_exports__);
		var object_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
			"../../node_modules/object.is/index.js"
		);
		var object_is__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
			object_is__WEBPACK_IMPORTED_MODULE_0__
		);
		console.log("很高兴认识你，webpack");
		console.log(object_is__WEBPACK_IMPORTED_MODULE_0___default()(1, 1));
	}
});
