"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://aditya_vrma:aditya_vrma@clusterx.yp8yxbz.mongodb.net/?retryWrites=true&w=majority\");\n        const db = client.db();\n        const meetupCollection = db.collection(\"meetups\");\n        const result = await meetupCollection.insertOne(data);\n        client.close();\n        res.status(201).json({\n            message: \"Meetup Inserted\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler); //t11CXYVxYm34Xb5A\n //mongodb+srv://nextapp:<password>@cluster0.l8tkh7g.mongodb.net/?retryWrites=true&w=majority\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7UUFFckIsTUFBTUMsTUFBTSxHQUFHLE1BQU1QLHdEQUFtQixDQUN0QyxpR0FBaUcsQ0FDbEc7UUFDRCxNQUFNUyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0UsRUFBRSxFQUFFO1FBRXRCLE1BQU1DLGdCQUFnQixHQUFHRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDakQsTUFBTUMsTUFBTSxHQUFHLE1BQU1GLGdCQUFnQixDQUFDRyxTQUFTLENBQUNSLElBQUksQ0FBQztRQUNyREUsTUFBTSxDQUFDTyxLQUFLLEVBQUUsQ0FBQztRQUNmWCxHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxpQkFBaUI7U0FBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZWhCLE9BQU8sRUFBQyxDQUN2QixrQkFBa0I7Q0FDbEIsNEZBQTRGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzPzczOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcblxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgICBcIm1vbmdvZGIrc3J2Oi8vYWRpdHlhX3ZybWE6YWRpdHlhX3ZybWFAY2x1c3RlcngueXA4eXhiei5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgICApO1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICBjb25zdCBtZWV0dXBDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XG4gICAgY2xpZW50LmNsb3NlKCk7XG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIk1lZXR1cCBJbnNlcnRlZFwiIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4vL3QxMUNYWVZ4WW0zNFhiNUFcbi8vbW9uZ29kYitzcnY6Ly9uZXh0YXBwOjxwYXNzd29yZD5AY2x1c3RlcjAubDh0a2g3Zy5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();