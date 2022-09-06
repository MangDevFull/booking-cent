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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/api */ \"(api)/./services/api.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({\n            id: \"cent-login-otp\",\n            // The name to display on the sign in form (e.g. 'Sign in with...')\n            name: \"Credentials\",\n            // The credentials is used to generate a suitable form on the sign in page.\n            // You can specify whatever fields you are expecting to be submitted.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                phone: {\n                    label: \"Phone\",\n                    type: \"text\"\n                },\n                code: {\n                    label: \"OTP\",\n                    type: \"text\"\n                }\n            },\n            async authorize (credentials, req) {\n                const payload = {\n                    phone: credentials.phone,\n                    otp: credentials.otp\n                };\n                const res = await fetch(`${\"http://192.168.110.146:8088\"}/api/check-otp`, {\n                    method: \"POST\",\n                    body: JSON.stringify(payload),\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                const response = await res.json();\n                if (response.code === 400) {\n                    const error = new Error(JSON.stringify(response));\n                    throw error;\n                }\n                // If no error and we have user data, return it\n                if (res.ok && response.data) {\n                    return response.data;\n                }\n                // Return null if user data could not be retrieved\n                return null;\n            }\n        }), \n    ],\n    callbacks: {\n        async jwt ({ token , user  }) {\n            if (user) {\n                const { customer , token  } = user;\n                return {\n                    token,\n                    user: customer\n                };\n            }\n            return token;\n        },\n        async session ({ session , token  }) {\n            session.user = token.user;\n            session.token = token.token;\n            session.error = token.error;\n            return session;\n        }\n    },\n    secret: process.env.JWT_SECRET,\n    debug: \"development\" === \"development\"\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRTtBQUNqQztBQUNBO0FBQ2hDLGlFQUFlQyxnREFBUSxDQUFDLENBQUM7SUFDdkJFLFNBQVMsRUFBRSxDQUFDO1FBQ1ZILHNFQUFtQixDQUFDLENBQUM7WUFDbkJJLEVBQUUsRUFBRSxDQUFnQjtZQUNwQixFQUFtRTtZQUNuRUMsSUFBSSxFQUFFLENBQWE7WUFDbkIsRUFBMkU7WUFDM0UsRUFBcUU7WUFDckUsRUFBbUQ7WUFDbkQsRUFBeUU7WUFDekVDLFdBQVcsRUFBRSxDQUFDO2dCQUNaQyxLQUFLLEVBQUUsQ0FBQztvQkFBQ0MsS0FBSyxFQUFFLENBQU87b0JBQUVDLElBQUksRUFBRSxDQUFNO2dCQUFDLENBQUM7Z0JBQ3ZDQyxJQUFJLEVBQUUsQ0FBQztvQkFBQ0YsS0FBSyxFQUFFLENBQUs7b0JBQUVDLElBQUksRUFBRSxDQUFNO2dCQUFDLENBQUM7WUFDdEMsQ0FBQztrQkFDS0UsU0FBUyxFQUFDTCxXQUFXLEVBQUVNLEdBQUcsRUFBRSxDQUFDO2dCQUNqQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFDO29CQUNmTixLQUFLLEVBQUVELFdBQVcsQ0FBQ0MsS0FBSztvQkFDeEJPLEdBQUcsRUFBRVIsV0FBVyxDQUFDUSxHQUFHO2dCQUN0QixDQUFDO2dCQUNELEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxJQUFJQyw2QkFBbUIsQ0FBQyxjQUFjLEdBQUcsQ0FBQztvQkFDL0RHLE1BQU0sRUFBRSxDQUFNO29CQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDVixPQUFPO29CQUM1QlcsT0FBTyxFQUFFLENBQUM7d0JBQUMsQ0FBYyxlQUFFLENBQWtCO29CQUFDLENBQUM7Z0JBQ2pELENBQUM7Z0JBQ0QsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDVixHQUFHLENBQUNXLElBQUk7Z0JBQy9CLEVBQUUsRUFBRUQsUUFBUSxDQUFDZixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQzFCLEtBQUssQ0FBQ2lCLEtBQUssR0FBRyxHQUFHLENBQUNDLEtBQUssQ0FBQ04sSUFBSSxDQUFDQyxTQUFTLENBQUNFLFFBQVE7b0JBQy9DLEtBQUssQ0FBQ0UsS0FBSztnQkFDYixDQUFDO2dCQUNELEVBQStDO2dCQUMvQyxFQUFFLEVBQUVaLEdBQUcsQ0FBQ2MsRUFBRSxJQUFJSixRQUFRLENBQUNLLElBQUksRUFBRSxDQUFDO29CQUM1QixNQUFNLENBQUNMLFFBQVEsQ0FBQ0ssSUFBSTtnQkFDdEIsQ0FBQztnQkFDRCxFQUFrRDtnQkFDbEQsTUFBTSxDQUFDLElBQUk7WUFDYixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDREMsU0FBUyxFQUFFLENBQUM7Y0FDSkMsR0FBRyxFQUFDLENBQUMsQ0FBQ0MsS0FBSyxHQUFFQyxJQUFJLEVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDMUIsRUFBRSxFQUFFQSxJQUFJLEVBQUUsQ0FBQztnQkFDVCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEdBQUVGLEtBQUssRUFBQyxDQUFDLEdBQUdDLElBQUk7Z0JBQ2hDLE1BQU0sQ0FBQyxDQUFDO29CQUNORCxLQUFLO29CQUNMQyxJQUFJLEVBQUVDLFFBQVE7Z0JBQ2hCLENBQUM7WUFDSCxDQUFDO1lBRUQsTUFBTSxDQUFDRixLQUFLO1FBQ2QsQ0FBQztjQUNLRyxPQUFPLEVBQUMsQ0FBQyxDQUFDQSxPQUFPLEdBQUVILEtBQUssRUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNqQ0csT0FBTyxDQUFDRixJQUFJLEdBQUdELEtBQUssQ0FBQ0MsSUFBSTtZQUN6QkUsT0FBTyxDQUFDSCxLQUFLLEdBQUdBLEtBQUssQ0FBQ0EsS0FBSztZQUMzQkcsT0FBTyxDQUFDVCxLQUFLLEdBQUdNLEtBQUssQ0FBQ04sS0FBSztZQUMzQixNQUFNLENBQUNTLE9BQU87UUFDaEIsQ0FBQztJQUNILENBQUM7SUFDREMsTUFBTSxFQUFFcEIsT0FBTyxDQUFDQyxHQUFHLENBQUNvQixVQUFVO0lBQzlCQyxLQUFLLEVBN0RQLENBQWEsaUJBNkRxQixDQUFhO0FBQy9DLENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEFwaSBmcm9tIFwiQC9zZXJ2aWNlcy9hcGlcIlxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIGlkOiBcImNlbnQtbG9naW4tb3RwXCIsXG4gICAgICAvLyBUaGUgbmFtZSB0byBkaXNwbGF5IG9uIHRoZSBzaWduIGluIGZvcm0gKGUuZy4gJ1NpZ24gaW4gd2l0aC4uLicpXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICAvLyBUaGUgY3JlZGVudGlhbHMgaXMgdXNlZCB0byBnZW5lcmF0ZSBhIHN1aXRhYmxlIGZvcm0gb24gdGhlIHNpZ24gaW4gcGFnZS5cbiAgICAgIC8vIFlvdSBjYW4gc3BlY2lmeSB3aGF0ZXZlciBmaWVsZHMgeW91IGFyZSBleHBlY3RpbmcgdG8gYmUgc3VibWl0dGVkLlxuICAgICAgLy8gZS5nLiBkb21haW4sIHVzZXJuYW1lLCBwYXNzd29yZCwgMkZBIHRva2VuLCBldGMuXG4gICAgICAvLyBZb3UgY2FuIHBhc3MgYW55IEhUTUwgYXR0cmlidXRlIHRvIHRoZSA8aW5wdXQ+IHRhZyB0aHJvdWdoIHRoZSBvYmplY3QuXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBwaG9uZTogeyBsYWJlbDogXCJQaG9uZVwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICBjb2RlOiB7IGxhYmVsOiBcIk9UUFwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgICAgcGhvbmU6IGNyZWRlbnRpYWxzLnBob25lLFxuICAgICAgICAgIG90cDogY3JlZGVudGlhbHMub3RwLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9hcGkvY2hlY2stb3RwYCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBpZiAocmVzcG9uc2UuY29kZSA9PT0gNDAwKSB7XG4gICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBubyBlcnJvciBhbmQgd2UgaGF2ZSB1c2VyIGRhdGEsIHJldHVybiBpdFxuICAgICAgICBpZiAocmVzLm9rICYmIHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXR1cm4gbnVsbCBpZiB1c2VyIGRhdGEgY291bGQgbm90IGJlIHJldHJpZXZlZFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIGNvbnN0IHsgY3VzdG9tZXIsIHRva2VuIH0gPSB1c2VyO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRva2VuLFxuICAgICAgICAgIHVzZXI6IGN1c3RvbWVyLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgc2Vzc2lvbi51c2VyID0gdG9rZW4udXNlcjtcbiAgICAgIHNlc3Npb24udG9rZW4gPSB0b2tlbi50b2tlbjtcbiAgICAgIHNlc3Npb24uZXJyb3IgPSB0b2tlbi5lcnJvcjtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCxcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXG59KTtcbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiTmV4dEF1dGgiLCJBcGkiLCJwcm92aWRlcnMiLCJpZCIsIm5hbWUiLCJjcmVkZW50aWFscyIsInBob25lIiwibGFiZWwiLCJ0eXBlIiwiY29kZSIsImF1dGhvcml6ZSIsInJlcSIsInBheWxvYWQiLCJvdHAiLCJyZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJBUElfVVJMIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJFcnJvciIsIm9rIiwiZGF0YSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsImN1c3RvbWVyIiwic2Vzc2lvbiIsInNlY3JldCIsIkpXVF9TRUNSRVQiLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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