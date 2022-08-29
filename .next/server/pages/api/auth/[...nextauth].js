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

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({\n            id: \"mubaha\",\n            // The name to display on the sign in form (e.g. 'Sign in with...')\n            name: \"Credentials\",\n            // The credentials is used to generate a suitable form on the sign in page.\n            // You can specify whatever fields you are expecting to be submitted.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                phone: {\n                    label: \"Phone\",\n                    type: \"text\"\n                },\n                code: {\n                    label: \"OTP\",\n                    type: \"text\"\n                }\n            },\n            async authorize (credentials, req) {\n                const payload = {\n                    phone: credentials.phone,\n                    code: credentials.code\n                };\n                const res = await fetch(`${\"https://api-dev.mubaha.com/auth\"}/verify-login-otp`, {\n                    method: \"POST\",\n                    body: JSON.stringify(payload),\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                const response = await res.json();\n                if (response.status === 400) {\n                    const error = new Error(JSON.stringify(response));\n                    throw error;\n                }\n                // If no error and we have user data, return it\n                if (res.ok && response.data) {\n                    return response.data;\n                }\n                // Return null if user data could not be retrieved\n                return null;\n            }\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({\n            id: \"mubaha-login\",\n            name: \"Credentials-login\",\n            // The credentials is used to generate a suitable form on the sign in page.\n            // You can specify whatever fields you are expecting to be submitted.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                phone: {\n                    label: \"Phone\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"text\"\n                }\n            },\n            async authorize (credentials, req) {\n                const payload = {\n                    phone: credentials.phone,\n                    password: credentials.password\n                };\n                const res = await fetch(`${\"https://api-dev.mubaha.com/auth\"}/login`, {\n                    method: \"POST\",\n                    body: JSON.stringify(payload),\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                const response = await res.json();\n                if (response.status === 400) {\n                    const error = new Error(JSON.stringify(response));\n                    throw error;\n                }\n                // If no error and we have user data, return it\n                if (res.ok && response.data) {\n                    return response.data;\n                }\n                // Return null if user data could not be retrieved\n                return null;\n            }\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({\n            id: \"mubaha-signup\",\n            // The name to display on the sign in form (e.g. 'Sign in with...')\n            name: \"Credentials-signup\",\n            // The credentials is used to generate a suitable form on the sign in page.\n            // You can specify whatever fields you are expecting to be submitted.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                phone: {\n                    label: \"Phone\",\n                    type: \"text\"\n                },\n                code: {\n                    label: \"Password\",\n                    type: \"text\"\n                }\n            },\n            async authorize (credentials, req) {\n                const payload = {\n                    phone: credentials.phone,\n                    code: credentials.code\n                };\n                const res = await fetch(`${\"https://api-dev.mubaha.com/auth\"}/verify-register-otp`, {\n                    method: \"POST\",\n                    body: JSON.stringify(payload),\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                const response = await res.json();\n                if (response.status === 400) {\n                    const error = new Error(JSON.stringify(response));\n                    throw error;\n                }\n                // If no error and we have user data, return it\n                if (res.ok && response.data) {\n                    return response.data;\n                }\n                // Return null if user data could not be retrieved\n                return null;\n            }\n        }), \n    ],\n    callbacks: {\n        async jwt ({ token , user  }) {\n            if (user) {\n                const { account , token  } = user;\n                return {\n                    token,\n                    user: account\n                };\n            }\n            return token;\n        },\n        async session ({ session , token  }) {\n            session.user = token.user;\n            session.accessToken = token.token;\n            session.error = token.error;\n            return session;\n        }\n    },\n    secret: process.env.JWT_SECRET,\n    debug: \"development\" === \"development\"\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlFO0FBQ2pDO0FBRWhDLGlFQUFlQyxnREFBUSxDQUFDLENBQUM7SUFDdkJDLFNBQVMsRUFBRSxDQUFDO1FBQ1ZGLHNFQUFtQixDQUFDLENBQUM7WUFDbkJHLEVBQUUsRUFBRSxDQUFRO1lBQ1osRUFBbUU7WUFDbkVDLElBQUksRUFBRSxDQUFhO1lBQ25CLEVBQTJFO1lBQzNFLEVBQXFFO1lBQ3JFLEVBQW1EO1lBQ25ELEVBQXlFO1lBQ3pFQyxXQUFXLEVBQUUsQ0FBQztnQkFDWkMsS0FBSyxFQUFFLENBQUM7b0JBQUNDLEtBQUssRUFBRSxDQUFPO29CQUFFQyxJQUFJLEVBQUUsQ0FBTTtnQkFBQyxDQUFDO2dCQUN2Q0MsSUFBSSxFQUFFLENBQUM7b0JBQUNGLEtBQUssRUFBRSxDQUFLO29CQUFFQyxJQUFJLEVBQUUsQ0FBTTtnQkFBQyxDQUFDO1lBQ3RDLENBQUM7a0JBQ0tFLFNBQVMsRUFBQ0wsV0FBVyxFQUFFTSxHQUFHLEVBQUUsQ0FBQztnQkFDakMsS0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztvQkFDZk4sS0FBSyxFQUFFRCxXQUFXLENBQUNDLEtBQUs7b0JBQ3hCRyxJQUFJLEVBQUVKLFdBQVcsQ0FBQ0ksSUFBSTtnQkFDeEIsQ0FBQztnQkFDRCxLQUFLLENBQUNJLEdBQUcsR0FBRyxLQUFLLENBQUNDLEtBQUssSUFBSUMsaUNBQXdCLENBQUMsaUJBQWlCLEdBQUcsQ0FBQztvQkFDdkVHLE1BQU0sRUFBRSxDQUFNO29CQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDVCxPQUFPO29CQUM1QlUsT0FBTyxFQUFFLENBQUM7d0JBQUMsQ0FBYyxlQUFFLENBQWtCO29CQUFDLENBQUM7Z0JBQ2pELENBQUM7Z0JBQ0QsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDVixHQUFHLENBQUNXLElBQUk7Z0JBQy9CLEVBQUUs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QyxDQUFDO29CQUNORCxLQUFLO29CQUNMQyxJQUFJLEVBQUVDLE9BQU87Z0JBQ2YsQ0FBQztZQUNILENBQUM7WUFFRCxNQUFNLENBQUNGLEtBQUs7UUFDZCxDQUFDO2NBQ0tHLE9BQU8sRUFBQyxDQUFDLENBQUNBLE9BQU8sR0FBRUgsS0FBSyxFQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pDRyxPQUFPLENBQUNGLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFJO1lBQ3pCRSxPQUFPLENBQUNDLFdBQVcsR0FBR0osS0FBSyxDQUFDQSxLQUFLO1lBQ2pDRyxPQUFPLENBQUNWLEtBQUssR0FBR08sS0FBSyxDQUFDUCxLQUFLO1lBQzNCLE1BQU0sQ0FBQ1UsT0FBTztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUNERSxNQUFNLEVBQUV2QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3VCLFVBQVU7SUFDOUJDLEtBQUssRUFySVAsQ0FBYSxpQkFxSXFCLENBQWE7QUFDL0MsQ0FBQyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBpZDogXCJtdWJhaGFcIixcbiAgICAgIC8vIFRoZSBuYW1lIHRvIGRpc3BsYXkgb24gdGhlIHNpZ24gaW4gZm9ybSAoZS5nLiAnU2lnbiBpbiB3aXRoLi4uJylcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcbiAgICAgIC8vIFRoZSBjcmVkZW50aWFscyBpcyB1c2VkIHRvIGdlbmVyYXRlIGEgc3VpdGFibGUgZm9ybSBvbiB0aGUgc2lnbiBpbiBwYWdlLlxuICAgICAgLy8gWW91IGNhbiBzcGVjaWZ5IHdoYXRldmVyIGZpZWxkcyB5b3UgYXJlIGV4cGVjdGluZyB0byBiZSBzdWJtaXR0ZWQuXG4gICAgICAvLyBlLmcuIGRvbWFpbiwgdXNlcm5hbWUsIHBhc3N3b3JkLCAyRkEgdG9rZW4sIGV0Yy5cbiAgICAgIC8vIFlvdSBjYW4gcGFzcyBhbnkgSFRNTCBhdHRyaWJ1dGUgdG8gdGhlIDxpbnB1dD4gdGFnIHRocm91Z2ggdGhlIG9iamVjdC5cbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIHBob25lOiB7IGxhYmVsOiBcIlBob25lXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgIGNvZGU6IHsgbGFiZWw6IFwiT1RQXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgICBwaG9uZTogY3JlZGVudGlhbHMucGhvbmUsXG4gICAgICAgICAgY29kZTogY3JlZGVudGlhbHMuY29kZSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBJX0FVVEhfVVJMfS92ZXJpZnktbG9naW4tb3RwYCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIG5vIGVycm9yIGFuZCB3ZSBoYXZlIHVzZXIgZGF0YSwgcmV0dXJuIGl0XG4gICAgICAgIGlmIChyZXMub2sgJiYgcmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldHVybiBudWxsIGlmIHVzZXIgZGF0YSBjb3VsZCBub3QgYmUgcmV0cmlldmVkXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIGlkOiBcIm11YmFoYS1sb2dpblwiLFxuICAgICAgbmFtZTogXCJDcmVkZW50aWFscy1sb2dpblwiLFxuICAgICAgLy8gVGhlIGNyZWRlbnRpYWxzIGlzIHVzZWQgdG8gZ2VuZXJhdGUgYSBzdWl0YWJsZSBmb3JtIG9uIHRoZSBzaWduIGluIHBhZ2UuXG4gICAgICAvLyBZb3UgY2FuIHNwZWNpZnkgd2hhdGV2ZXIgZmllbGRzIHlvdSBhcmUgZXhwZWN0aW5nIHRvIGJlIHN1Ym1pdHRlZC5cbiAgICAgIC8vIGUuZy4gZG9tYWluLCB1c2VybmFtZSwgcGFzc3dvcmQsIDJGQSB0b2tlbiwgZXRjLlxuICAgICAgLy8gWW91IGNhbiBwYXNzIGFueSBIVE1MIGF0dHJpYnV0ZSB0byB0aGUgPGlucHV0PiB0YWcgdGhyb3VnaCB0aGUgb2JqZWN0LlxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgcGhvbmU6IHsgbGFiZWw6IFwiUGhvbmVcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICAgIHBob25lOiBjcmVkZW50aWFscy5waG9uZSxcbiAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LkFQSV9BVVRIX1VSTH0vbG9naW5gLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSxcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIG5vIGVycm9yIGFuZCB3ZSBoYXZlIHVzZXIgZGF0YSwgcmV0dXJuIGl0XG4gICAgICAgIGlmIChyZXMub2sgJiYgcmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldHVybiBudWxsIGlmIHVzZXIgZGF0YSBjb3VsZCBub3QgYmUgcmV0cmlldmVkXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIGlkOiBcIm11YmFoYS1zaWdudXBcIixcbiAgICAgIC8vIFRoZSBuYW1lIHRvIGRpc3BsYXkgb24gdGhlIHNpZ24gaW4gZm9ybSAoZS5nLiAnU2lnbiBpbiB3aXRoLi4uJylcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHMtc2lnbnVwXCIsXG4gICAgICAvLyBUaGUgY3JlZGVudGlhbHMgaXMgdXNlZCB0byBnZW5lcmF0ZSBhIHN1aXRhYmxlIGZvcm0gb24gdGhlIHNpZ24gaW4gcGFnZS5cbiAgICAgIC8vIFlvdSBjYW4gc3BlY2lmeSB3aGF0ZXZlciBmaWVsZHMgeW91IGFyZSBleHBlY3RpbmcgdG8gYmUgc3VibWl0dGVkLlxuICAgICAgLy8gZS5nLiBkb21haW4sIHVzZXJuYW1lLCBwYXNzd29yZCwgMkZBIHRva2VuLCBldGMuXG4gICAgICAvLyBZb3UgY2FuIHBhc3MgYW55IEhUTUwgYXR0cmlidXRlIHRvIHRoZSA8aW5wdXQ+IHRhZyB0aHJvdWdoIHRoZSBvYmplY3QuXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBwaG9uZTogeyBsYWJlbDogXCJQaG9uZVwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICBjb2RlOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgICBwaG9uZTogY3JlZGVudGlhbHMucGhvbmUsXG4gICAgICAgICAgY29kZTogY3JlZGVudGlhbHMuY29kZSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBJX0FVVEhfVVJMfS92ZXJpZnktcmVnaXN0ZXItb3RwYCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIG5vIGVycm9yIGFuZCB3ZSBoYXZlIHVzZXIgZGF0YSwgcmV0dXJuIGl0XG4gICAgICAgIGlmIChyZXMub2sgJiYgcmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldHVybiBudWxsIGlmIHVzZXIgZGF0YSBjb3VsZCBub3QgYmUgcmV0cmlldmVkXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgY29uc3QgeyBhY2NvdW50LCB0b2tlbiB9ID0gdXNlcjtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRva2VuLFxuICAgICAgICAgIHVzZXI6IGFjY291bnQsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBzZXNzaW9uLnVzZXIgPSB0b2tlbi51c2VyO1xuICAgICAgc2Vzc2lvbi5hY2Nlc3NUb2tlbiA9IHRva2VuLnRva2VuO1xuICAgICAgc2Vzc2lvbi5lcnJvciA9IHRva2VuLmVycm9yO1xuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcbn0pO1xuIl0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJOZXh0QXV0aCIsInByb3ZpZGVycyIsImlkIiwibmFtZSIsImNyZWRlbnRpYWxzIiwicGhvbmUiLCJsYWJlbCIsInR5cGUiLCJjb2RlIiwiYXV0aG9yaXplIiwicmVxIiwicGF5bG9hZCIsInJlcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIkFQSV9BVVRIX1VSTCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJvayIsImRhdGEiLCJwYXNzd29yZCIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsImFjY291bnQiLCJzZXNzaW9uIiwiYWNjZXNzVG9rZW4iLCJzZWNyZXQiLCJKV1RfU0VDUkVUIiwiZGVidWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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