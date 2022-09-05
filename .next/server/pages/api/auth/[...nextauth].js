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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/api */ \"(api)/./services/api.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({\n            id: \"cent-login-otp\",\n            // The name to display on the sign in form (e.g. 'Sign in with...')\n            name: \"Credentials\",\n            // The credentials is used to generate a suitable form on the sign in page.\n            // You can specify whatever fields you are expecting to be submitted.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                phone: {\n                    label: \"Phone\",\n                    type: \"text\"\n                },\n                code: {\n                    label: \"OTP\",\n                    type: \"text\"\n                }\n            },\n            async authorize (credentials, req) {\n                const payload = {\n                    phone: credentials.phone,\n                    otp: credentials.otp\n                };\n                const res = await fetch(`${\"http://192.168.110.146:8088\"}/api/check-otp`, {\n                    method: \"POST\",\n                    body: JSON.stringify(payload),\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                const response = await res.json();\n                if (response.code === 400) {\n                    const error = new Error(JSON.stringify(response));\n                    throw error;\n                }\n                // If no error and we have user data, return it\n                if (res.ok && response.data) {\n                    return response.data;\n                }\n                // Return null if user data could not be retrieved\n                return null;\n            }\n        }), \n    ],\n    callbacks: {\n        async jwt ({ token , user  }) {\n            if (user) {\n                const { customer , token  } = user;\n                console.log(\"test\");\n                return {\n                    token,\n                    user: customer\n                };\n            }\n            return token;\n        },\n        async session ({ session , token  }) {\n            session.user = token.user;\n            session.token = token.token;\n            session.error = token.error;\n            return session;\n        }\n    },\n    secret: process.env.JWT_SECRET,\n    debug: \"development\" === \"development\"\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRTtBQUNqQztBQUNBO0FBQ2hDLGlFQUFlQyxnREFBUSxDQUFDLENBQUM7SUFDdkJFLFNBQVMsRUFBRSxDQUFDO1FBQ1ZILHNFQUFtQixDQUFDLENBQUM7WUFDbkJJLEVBQUUsRUFBRSxDQUFnQjtZQUNwQixFQUFtRTtZQUNuRUMsSUFBSSxFQUFFLENBQWE7WUFDbkIsRUFBMkU7WUFDM0UsRUFBcUU7WUFDckUsRUFBbUQ7WUFDbkQsRUFBeUU7WUFDekVDLFdBQVcsRUFBRSxDQUFDO2dCQUNaQyxLQUFLLEVBQUUsQ0FBQztvQkFBQ0MsS0FBSyxFQUFFLENBQU87b0JBQUVDLElBQUksRUFBRSxDQUFNO2dCQUFDLENBQUM7Z0JBQ3ZDQyxJQUFJLEVBQUUsQ0FBQztvQkFBQ0YsS0FBSyxFQUFFLENBQUs7b0JBQUVDLElBQUksRUFBRSxDQUFNO2dCQUFDLENBQUM7WUFDdEMsQ0FBQztrQkFDS0UsU0FBUyxFQUFDTCxXQUFXLEVBQUVNLEdBQUcsRUFBRSxDQUFDO2dCQUNqQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFDO29CQUNmTixLQUFLLEVBQUVELFdBQVcsQ0FBQ0MsS0FBSztvQkFDeEJPLEdBQUcsRUFBRVIsV0FBVyxDQUFDUSxHQUFHO2dCQUN0QixDQUFDO2dCQUNELEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxJQUFJQyw2QkFBbUIsQ0FBQyxjQUFjLEdBQUcsQ0FBQztvQkFDL0RHLE1BQU0sRUFBRSxDQUFNO29CQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDVixPQUFPO29CQUM1QlcsT0FBTyxFQUFFLENBQUM7d0JBQUMsQ0FBYyxlQUFFLENBQWtCO29CQUFDLENBQUM7Z0JBQ2pELENBQUM7Z0JBQ0QsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDVixHQUFHLENBQUNXLElBQUk7Z0JBQy9CLEVBQUUsRUFBRUQsUUFBUSxDQUFDZixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQzFCLEtBQUssQ0FBQ2lCLEtBQUssR0FBRyxHQUFHLENBQUNDLEtBQUssQ0FBQ04sSUFBSSxDQUFDQyxTQUFTLENBQUNFLFFBQVE7b0JBQy9DLEtBQUssQ0FBQ0UsS0FBSztnQkFDYixDQUFDO2dCQUNELEVBQStDO2dCQUMvQyxFQUFFLEVBQUVaLEdBQUcsQ0FBQ2MsRUFBRSxJQUFJSixRQUFRLENBQUNLLElBQUksRUFBRSxDQUFDO29CQUM1QixNQUFNLENBQUNMLFFBQVEsQ0FBQ0ssSUFBSTtnQkFDdEIsQ0FBQztnQkFDRCxFQUFrRDtnQkFDbEQsTUFBTSxDQUFDLElBQUk7WUFDYixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDREMsU0FBUyxFQUFFLENBQUM7Y0FDSkMsR0FBRyxFQUFDLENBQUMsQ0FBQ0MsS0FBSyxHQUFFQyxJQUFJLEVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDMUIsRUFBRSxFQUFFQSxJQUFJLEVBQUUsQ0FBQztnQkFDVCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEdBQUVGLEtBQUssRUFBQyxDQUFDLEdBQUdDLElBQUk7Z0JBQ2hDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFNO2dCQUNsQixNQUFNLENBQUMsQ0FBQztvQkFDTkosS0FBSztvQkFDTEMsSUFBSSxFQUFFQyxRQUFRO2dCQUNoQixDQUFDO1lBQ0gsQ0FBQztZQUVELE1BQU0sQ0FBQ0YsS0FBSztRQUNkLENBQUM7Y0FDS0ssT0FBTyxFQUFDLENBQUMsQ0FBQ0EsT0FBTyxHQUFFTCxLQUFLLEVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDakNLLE9BQU8sQ0FBQ0osSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQUk7WUFDekJJLE9BQU8sQ0FBQ0wsS0FBSyxHQUFHQSxLQUFLLENBQUNBLEtBQUs7WUFDM0JLLE9BQU8sQ0FBQ1gsS0FBSyxHQUFHTSxLQUFLLENBQUNOLEtBQUs7WUFDM0IsTUFBTSxDQUFDVyxPQUFPO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBQ0RDLE1BQU0sRUFBRXRCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0IsVUFBVTtJQUM5QkMsS0FBSyxFQTlEUCxDQUFhLGlCQThEcUIsQ0FBYTtBQUMvQyxDQUFDLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBBcGkgZnJvbSBcIkAvc2VydmljZXMvYXBpXCJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBpZDogXCJjZW50LWxvZ2luLW90cFwiLFxuICAgICAgLy8gVGhlIG5hbWUgdG8gZGlzcGxheSBvbiB0aGUgc2lnbiBpbiBmb3JtIChlLmcuICdTaWduIGluIHdpdGguLi4nKVxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxuICAgICAgLy8gVGhlIGNyZWRlbnRpYWxzIGlzIHVzZWQgdG8gZ2VuZXJhdGUgYSBzdWl0YWJsZSBmb3JtIG9uIHRoZSBzaWduIGluIHBhZ2UuXG4gICAgICAvLyBZb3UgY2FuIHNwZWNpZnkgd2hhdGV2ZXIgZmllbGRzIHlvdSBhcmUgZXhwZWN0aW5nIHRvIGJlIHN1Ym1pdHRlZC5cbiAgICAgIC8vIGUuZy4gZG9tYWluLCB1c2VybmFtZSwgcGFzc3dvcmQsIDJGQSB0b2tlbiwgZXRjLlxuICAgICAgLy8gWW91IGNhbiBwYXNzIGFueSBIVE1MIGF0dHJpYnV0ZSB0byB0aGUgPGlucHV0PiB0YWcgdGhyb3VnaCB0aGUgb2JqZWN0LlxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgcGhvbmU6IHsgbGFiZWw6IFwiUGhvbmVcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgY29kZTogeyBsYWJlbDogXCJPVFBcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICAgIHBob25lOiBjcmVkZW50aWFscy5waG9uZSxcbiAgICAgICAgICBvdHA6IGNyZWRlbnRpYWxzLm90cCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vYXBpL2NoZWNrLW90cGAsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxuICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgPT09IDQwMCkge1xuICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgbm8gZXJyb3IgYW5kIHdlIGhhdmUgdXNlciBkYXRhLCByZXR1cm4gaXRcbiAgICAgICAgaWYgKHJlcy5vayAmJiByZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmV0dXJuIG51bGwgaWYgdXNlciBkYXRhIGNvdWxkIG5vdCBiZSByZXRyaWV2ZWRcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBjb25zdCB7IGN1c3RvbWVyLCB0b2tlbiB9ID0gdXNlcjtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgdXNlcjogY3VzdG9tZXIsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBzZXNzaW9uLnVzZXIgPSB0b2tlbi51c2VyO1xuICAgICAgc2Vzc2lvbi50b2tlbiA9IHRva2VuLnRva2VuO1xuICAgICAgc2Vzc2lvbi5lcnJvciA9IHRva2VuLmVycm9yO1xuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcbn0pO1xuIl0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJOZXh0QXV0aCIsIkFwaSIsInByb3ZpZGVycyIsImlkIiwibmFtZSIsImNyZWRlbnRpYWxzIiwicGhvbmUiLCJsYWJlbCIsInR5cGUiLCJjb2RlIiwiYXV0aG9yaXplIiwicmVxIiwicGF5bG9hZCIsIm90cCIsInJlcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIkFQSV9VUkwiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJlcnJvciIsIkVycm9yIiwib2siLCJkYXRhIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ1c2VyIiwiY3VzdG9tZXIiLCJjb25zb2xlIiwibG9nIiwic2Vzc2lvbiIsInNlY3JldCIsIkpXVF9TRUNSRVQiLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./services/api.js":
/*!*************************!*\
  !*** ./services/api.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst baseURL = \"http://192.168.110.146:8088\" || 0;\nconst ApiClient = ()=>{\n    const defaultOptions = {\n        baseURL\n    };\n    const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create(defaultOptions);\n    instance.interceptors.request.use(async (request)=>{\n        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();\n        if (session) {\n            request.headers.Authorization = `Bearer ${session.token}`;\n        }\n        return request;\n    });\n    instance.interceptors.response.use((response)=>{\n        return response;\n    }, (error)=>{\n        console.log(`error`, error);\n    });\n    return instance;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiClient());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9hcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFDbUI7QUFFNUMsS0FBSyxDQUFDRSxPQUFPLEdBQUdDLDZCQUFtQixJQUFJLENBQXdCO0FBRS9ELEtBQUssQ0FBQ0csU0FBUyxPQUFTLENBQUM7SUFDdkIsS0FBSyxDQUFDQyxjQUFjLEdBQUcsQ0FBQztRQUN0QkwsT0FBTztJQUNULENBQUM7SUFFRCxLQUFLLENBQUNNLFFBQVEsR0FBR1IsbURBQVksQ0FBQ08sY0FBYztJQUU1Q0MsUUFBUSxDQUFDRSxZQUFZLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxRQUFRRCxPQUFPLEdBQUssQ0FBQztRQUNwRCxLQUFLLENBQUNFLE9BQU8sR0FBRyxLQUFLLENBQUNaLDJEQUFVO1FBQ2hDLEVBQUUsRUFBRVksT0FBTyxFQUFFLENBQUM7WUFDWkYsT0FBTyxDQUFDRyxPQUFPLENBQUNDLGFBQWEsSUFBSSxPQUFPLEVBQUVGLE9BQU8sQ0FBQ0csS0FBSztRQUN6RCxDQUFDO1FBQ0QsTUFBTSxDQUFDTCxPQUFPO0lBQ2hCLENBQUM7SUFFREgsUUFBUSxDQUFDRSxZQUFZLENBQUNPLFFBQVEsQ0FBQ0wsR0FBRyxFQUMvQkssUUFBUSxHQUFLLENBQUM7UUFDYixNQUFNLENBQUNBLFFBQVE7SUFDakIsQ0FBQyxHQUNBQyxLQUFLLEdBQUssQ0FBQztRQUNWQyxPQUFPLENBQUNDLEdBQUcsRUFBRSxLQUFLLEdBQUdGLEtBQUs7SUFDNUIsQ0FBQztJQUdILE1BQU0sQ0FBQ1YsUUFBUTtBQUNqQixDQUFDO0FBRUQsaUVBQWVGLFNBQVMsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc2VydmljZXMvYXBpLmpzPzgwM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuXG5jb25zdCBiYXNlVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCB8fCAnaHR0cHM6Ly9sb2NhbGhvc3Q6MTMzNyc7XG5cbmNvbnN0IEFwaUNsaWVudCA9ICgpID0+IHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgYmFzZVVSTCxcbiAgfTtcblxuICBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZShkZWZhdWx0T3B0aW9ucyk7XG5cbiAgaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGFzeW5jIChyZXF1ZXN0KSA9PiB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKTtcbiAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgcmVxdWVzdC5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7c2Vzc2lvbi50b2tlbn1gO1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfSk7XG5cbiAgaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9LFxuICAgIChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coYGVycm9yYCwgZXJyb3IpO1xuICAgIH0sXG4gICk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBpQ2xpZW50KCk7XG5cblxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZ2V0U2Vzc2lvbiIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiQVBJX1VSTCIsIkFwaUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwiaW5zdGFuY2UiLCJjcmVhdGUiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwic2Vzc2lvbiIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJyZXNwb25zZSIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./services/api.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();