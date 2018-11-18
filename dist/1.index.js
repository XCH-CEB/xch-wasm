(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./xch_wasm.js":
/*!*********************!*\
  !*** ./xch_wasm.js ***!
  \*********************/
/*! exports provided: balance, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"balance\", function() { return balance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _xch_wasm_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xch_wasm_bg */ \"./xch_wasm_bg.wasm\");\n/* tslint:disable */\n\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _xch_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_xch_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction passStringToWasm(arg) {\n\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = _xch_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    return [ptr, buf.length];\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8');\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nlet cachedGlobalArgumentPtr = null;\nfunction globalArgumentPtr() {\n    if (cachedGlobalArgumentPtr === null) {\n        cachedGlobalArgumentPtr = _xch_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_global_argument_ptr\"]();\n    }\n    return cachedGlobalArgumentPtr;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _xch_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_xch_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n/**\n* @param {string} arg0\n* @returns {string}\n*/\nfunction balance(arg0) {\n    const [ptr0, len0] = passStringToWasm(arg0);\n    const retptr = globalArgumentPtr();\n    try {\n        _xch_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"balance\"](retptr, ptr0, len0);\n        const mem = getUint32Memory();\n        const rustptr = mem[retptr / 4];\n        const rustlen = mem[retptr / 4 + 1];\n\n        const realRet = getStringFromWasm(rustptr, rustlen).slice();\n        _xch_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](rustptr, rustlen * 1);\n        return realRet;\n\n\n    } finally {\n        _xch_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr0, len0 * 1);\n\n    }\n\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n\n//# sourceURL=webpack:///./xch_wasm.js?");

/***/ }),

/***/ "./xch_wasm_bg.wasm":
/*!**************************!*\
  !*** ./xch_wasm_bg.wasm ***!
  \**************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, balance, __wbindgen_global_argument_ptr, __wbindgen_malloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./xch_wasm */ \"./xch_wasm.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./xch_wasm_bg.wasm?");

/***/ })

}]);