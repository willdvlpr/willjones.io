"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/PreviewItem.tsx":
/*!****************************************!*\
  !*** ./src/components/PreviewItem.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _utils_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/device */ \"./src/utils/device.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/WilliamJones/GitHub/willdvlpr/willjonesio/src/components/PreviewItem.tsx\",\n    _this = undefined;\n\n\n\n\nvar ItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"PreviewItem__ItemContainer\",\n  componentId: \"sc-14dvog7-0\"\n})([\"padding:0;position:relative;height:180px;width:800px;margin-top:50px;margin-left:calc(50% - 400px);border-radius:25px;box-shadow:0px 8px 15px rgba(0,0,0,0.1);cursor:pointer;outline:none;opacity:0.7;background-color:\", \" transition:all 0.3s ease 0s;&:hover{transform:translateY(0.1rem);opacity:1;}&:active{transform:translateY(-0.4rem);}a{text-decoration:none;color:#000;}@media \", \"{width:450px;margin-left:calc(50% - 220px);}@media \", \"{width:280px;height:190px;margin-left:calc(50% - 140px);}\"], function (props) {\n  return props.color;\n}, _utils_device__WEBPACK_IMPORTED_MODULE_1__.device.md, _utils_device__WEBPACK_IMPORTED_MODULE_1__.device.sm);\n_c = ItemContainer;\nvar PreviewType = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"PreviewItem__PreviewType\",\n  componentId: \"sc-14dvog7-1\"\n})([\"position:absolute;height:60px;width:100%;text-align:left;line-height:60px;font-size:18px;padding-left:40px;color:#fff;font-weight:400;@media \", \"{font-size:14px;}@media \", \"{font-size:12px;padding-left:25px;}\"], _utils_device__WEBPACK_IMPORTED_MODULE_1__.device.md, _utils_device__WEBPACK_IMPORTED_MODULE_1__.device.sm);\n_c2 = PreviewType;\nvar PreviewTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"PreviewItem__PreviewTitle\",\n  componentId: \"sc-14dvog7-2\"\n})([\"position:absolute;height:60px;width:100%;margin-top:60px;line-height:60px;font-weight:bold;font-size:20px;padding-left:40px;@media \", \"{font-size:18px;line-height:40px;padding-right:40px;margin-top:50px;}@media \", \"{font-size:14px;line-height:25px;padding-left:25px;}\"], _utils_device__WEBPACK_IMPORTED_MODULE_1__.device.md, _utils_device__WEBPACK_IMPORTED_MODULE_1__.device.sm);\n_c3 = PreviewTitle;\nvar PreviewDate = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"PreviewItem__PreviewDate\",\n  componentId: \"sc-14dvog7-3\"\n})([\"position:absolute;height:60px;width:100%;margin-top:120px;line-height:60px;padding-left:40px;color:#fff;font-weight:400;font-size:16px;@media \", \"{font-size:14px;}@media \", \"{font-size:12px;margin-top:125px;padding-left:25px;}\"], _utils_device__WEBPACK_IMPORTED_MODULE_1__.device.md, _utils_device__WEBPACK_IMPORTED_MODULE_1__.device.sm);\n_c4 = PreviewDate;\n\nvar PreviewItem = function PreviewItem(_ref) {\n  var href = _ref.href,\n      type = _ref.type,\n      title = _ref.title,\n      date = _ref.date;\n  var color;\n\n  if (type === \"Article\") {\n    color = \"#a7d9d1\";\n  } else if (type === \"Open Source Code\") {\n    color = \"blue\";\n  } else {\n    color = \"#f4f4f4\";\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemContainer, {\n    color: color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: href,\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PreviewType, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 9\n    }\n  }, type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PreviewTitle, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 9\n    }\n  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PreviewDate, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 9\n    }\n  }, date)));\n};\n\n_c5 = PreviewItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PreviewItem);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"ItemContainer\");\n$RefreshReg$(_c2, \"PreviewType\");\n$RefreshReg$(_c3, \"PreviewTitle\");\n$RefreshReg$(_c4, \"PreviewDate\");\n$RefreshReg$(_c5, \"PreviewItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QcmV2aWV3SXRlbS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUcsYUFBYSxHQUFHRix3RUFBSDtBQUFBO0FBQUE7QUFBQSx1ZkFhRyxVQUFDSSxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFqQjtBQUFBLENBYkgsRUE4QlJKLG9EQTlCUSxFQW1DUkEsb0RBbkNRLENBQW5CO0tBQU1DO0FBMENOLElBQU1NLFdBQVcsR0FBR1Isd0VBQUg7QUFBQTtBQUFBO0FBQUEseU5BV05DLG9EQVhNLEVBZU5BLG9EQWZNLENBQWpCO01BQU1PO0FBcUJOLElBQU1DLFlBQVksR0FBR1Qsd0VBQUg7QUFBQTtBQUFBO0FBQUEsb1JBVVBDLG9EQVZPLEVBaUJQQSxvREFqQk8sQ0FBbEI7TUFBTVE7QUF3Qk4sSUFBTUMsV0FBVyxHQUFHVix3RUFBSDtBQUFBO0FBQUE7QUFBQSwyT0FXTkMsb0RBWE0sRUFlTkEsb0RBZk0sQ0FBakI7TUFBTVM7O0FBNEJOLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQTRDO0FBQUEsTUFBekNDLElBQXlDLFFBQXpDQSxJQUF5QztBQUFBLE1BQW5DQyxJQUFtQyxRQUFuQ0EsSUFBbUM7QUFBQSxNQUE3QkMsS0FBNkIsUUFBN0JBLEtBQTZCO0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUM5RCxNQUFJVixLQUFKOztBQUNBLE1BQUlRLElBQUksS0FBSyxTQUFiLEVBQXdCO0FBQ3RCUixJQUFBQSxLQUFLLEdBQUcsU0FBUjtBQUNELEdBRkQsTUFFTyxJQUFJUSxJQUFJLEtBQUssa0JBQWIsRUFBaUM7QUFDdENSLElBQUFBLEtBQUssR0FBRyxNQUFSO0FBQ0QsR0FGTSxNQUVBO0FBQ0xBLElBQUFBLEtBQUssR0FBRyxTQUFSO0FBQ0Q7O0FBQ0Qsc0JBQ0UsMkRBQUMsYUFBRDtBQUFlLFNBQUssRUFBRUEsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRTtBQUFHLFFBQUksRUFBRU8sSUFBVDtBQUFlLFVBQU0sRUFBQyxRQUF0QjtBQUErQixPQUFHLEVBQUMsWUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRSwyREFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBY0MsSUFBZCxDQURGLGVBRUUsMkRBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWVDLEtBQWYsQ0FGRixlQUdFLDJEQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjQyxJQUFkLENBSEYsQ0FERixDQURGO0FBU0QsQ0FsQkQ7O01BQU1KO0FBb0JOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1ByZXZpZXdJdGVtLnRzeD9hNThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwiLi4vdXRpbHMvZGV2aWNlXCI7XG5cbmNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQuZGl2PHsgY29sb3I6IHN0cmluZyB9PmBcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDE4MHB4O1xuICB3aWR0aDogODAwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDQwMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBvcGFjaXR5OiAwLjc7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNhN2Q5ZDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn1cbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC4xcmVtKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC40cmVtKTtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuXG4gIEBtZWRpYSAke2RldmljZS5tZH0ge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSAyMjBweCk7XG4gIH1cblxuICBAbWVkaWEgJHtkZXZpY2Uuc219IHtcbiAgICB3aWR0aDogMjgwcHg7XG4gICAgaGVpZ2h0OiAxOTBweDtcbiAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSAxNDBweCk7XG4gIH1cbmA7XG5cbmNvbnN0IFByZXZpZXdUeXBlID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuXG4gIEBtZWRpYSAke2RldmljZS5tZH0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIEBtZWRpYSAke2RldmljZS5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFByZXZpZXdUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcblxuICBAbWVkaWEgJHtkZXZpY2UubWR9IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG5cbiAgQG1lZGlhICR7ZGV2aWNlLnNtfSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgfVxuYDtcblxuY29uc3QgUHJldmlld0RhdGUgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIEBtZWRpYSAke2RldmljZS5tZH0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIEBtZWRpYSAke2RldmljZS5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiAxMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIH1cbmA7XG5cbmludGVyZmFjZSBJdGVtUHJvcHMge1xuICBocmVmOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xufVxuY29uc3QgUHJldmlld0l0ZW0gPSAoeyBocmVmLCB0eXBlLCB0aXRsZSwgZGF0ZSB9OiBJdGVtUHJvcHMpID0+IHtcbiAgbGV0IGNvbG9yOiBzdHJpbmc7XG4gIGlmICh0eXBlID09PSBcIkFydGljbGVcIikge1xuICAgIGNvbG9yID0gXCIjYTdkOWQxXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJPcGVuIFNvdXJjZSBDb2RlXCIpIHtcbiAgICBjb2xvciA9IFwiYmx1ZVwiO1xuICB9IGVsc2Uge1xuICAgIGNvbG9yID0gXCIjZjRmNGY0XCI7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8SXRlbUNvbnRhaW5lciBjb2xvcj17Y29sb3J9PlxuICAgICAgPGEgaHJlZj17aHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICA8UHJldmlld1R5cGU+e3R5cGV9PC9QcmV2aWV3VHlwZT5cbiAgICAgICAgPFByZXZpZXdUaXRsZT57dGl0bGV9PC9QcmV2aWV3VGl0bGU+XG4gICAgICAgIDxQcmV2aWV3RGF0ZT57ZGF0ZX08L1ByZXZpZXdEYXRlPlxuICAgICAgPC9hPlxuICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByZXZpZXdJdGVtO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiZGV2aWNlIiwiSXRlbUNvbnRhaW5lciIsImRpdiIsInByb3BzIiwiY29sb3IiLCJtZCIsInNtIiwiUHJldmlld1R5cGUiLCJQcmV2aWV3VGl0bGUiLCJQcmV2aWV3RGF0ZSIsIlByZXZpZXdJdGVtIiwiaHJlZiIsInR5cGUiLCJ0aXRsZSIsImRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/PreviewItem.tsx\n");

/***/ })

});