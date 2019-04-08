webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/shared/toRoman.ts":
/*!*******************************!*\
  !*** ./src/shared/toRoman.ts ***!
  \*******************************/
/*! exports provided: numberToRoman, centuryToRoman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberToRoman", function() { return numberToRoman; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centuryToRoman", function() { return centuryToRoman; });
// taken form https://www.selftaughtjs.com/algorithm-sundays-converting-roman-numerals/
var numberToRoman = function numberToRoman(value) {
  var result = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (var i = 0; i <= decimal.length; i++) {
    while (value % decimal[i] < value) {
      result += roman[i];
      value -= decimal[i];
    }
  }

  return result;
};
var centuryToRoman = function centuryToRoman(value) {
  var sign = Math.sign(value);
  var num = Math.abs(value);

  if (sign === 0) {
    return numberToRoman(num + 1);
  }

  if (sign < 0) {
    return "".concat(numberToRoman(num + 1), " BCE");
  }

  return numberToRoman(num);
};

/***/ })

})
//# sourceMappingURL=index.js.784c77ea173b97891c22.hot-update.js.map