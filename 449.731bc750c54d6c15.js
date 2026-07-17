"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[449],{

/***/ 30449
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/components/p-DIE4pXMl.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mdTransitionAnimation: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _p_CmR5uXej_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./p-CmR5uXej.js */ 9361);
/* harmony import */ var _p_CtukzcyX_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./p-CtukzcyX.js */ 35143);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const i = (i, r) => {
  var a, n, e;
  const s = "40px",
    c = "back" === r.direction,
    l = r.leavingEl,
    p = (0,_p_CtukzcyX_js__WEBPACK_IMPORTED_MODULE_1__.g)(r.enteringEl),
    b = p.querySelector("ion-toolbar"),
    u = (0,_p_CmR5uXej_js__WEBPACK_IMPORTED_MODULE_0__.c)();
  if (u.addElement(p).fill("both").beforeRemoveClass("ion-page-invisible"), c ? u.duration((null !== (a = r.duration) && void 0 !== a ? a : 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)") : u.duration((null !== (n = r.duration) && void 0 !== n ? n : 0) || 280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform", `translateY(${s})`, "translateY(0px)").fromTo("opacity", .01, 1), b) {
    const o = (0,_p_CmR5uXej_js__WEBPACK_IMPORTED_MODULE_0__.c)();
    o.addElement(b), u.addAnimation(o);
  }
  if (l && c) {
    u.duration((null !== (e = r.duration) && void 0 !== e ? e : 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
    const i = (0,_p_CmR5uXej_js__WEBPACK_IMPORTED_MODULE_0__.c)();
    i.addElement((0,_p_CtukzcyX_js__WEBPACK_IMPORTED_MODULE_1__.g)(l)).onFinish(t => {
      1 === t && i.elements.length > 0 && i.elements[0].style.setProperty("display", "none");
    }).fromTo("transform", "translateY(0px)", `translateY(${s})`).fromTo("opacity", 1, 0), u.addAnimation(i);
  }
  return u;
};


/***/ }

}]);