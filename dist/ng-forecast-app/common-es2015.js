(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/components/fav/services/fav.service.ts":
/*!********************************************************!*\
  !*** ./src/app/components/fav/services/fav.service.ts ***!
  \********************************************************/
/*! exports provided: FavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavService", function() { return FavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngrx_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngrx-data */ "./node_modules/ngrx-data/fesm2015/ngrx-data.js");



let FavService = class FavService extends ngrx_data__WEBPACK_IMPORTED_MODULE_2__["EntityCollectionServiceBase"] {
    constructor(serviceElementsFactory) {
        super('Fav', serviceElementsFactory);
    }
    createDb() {
        let favs = [];
        return { favs };
    }
};
FavService.ctorParameters = () => [
    { type: ngrx_data__WEBPACK_IMPORTED_MODULE_2__["EntityCollectionServiceElementsFactory"] }
];
FavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngrx_data__WEBPACK_IMPORTED_MODULE_2__["EntityCollectionServiceElementsFactory"]])
], FavService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map