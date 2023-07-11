/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.textarea-user-input {\n  width: 100%;\n  font-size: 20px;\n}\n\n.keyboard {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  background-color: #ff8912;\n  border: 2px solid black;\n  border-radius: 4px;\n}\n\n.keyboard--row {\n  display: flex;\n  gap: 10px;\n}\n\n.keyboard--key {\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  aspect-ratio: 1;\n  font-size: clamp(10px, 2.5vw, 16px);\n  background-color: #c1c1c1;\n  border-radius: 4px;\n  transition: 0.3s;\n}\n.keyboard--key:hover {\n  background-color: rgb(103, 102, 102);\n  color: white;\n  cursor: pointer;\n}\n\n.no-letter-key {\n  min-height: 40px;\n  min-width: fit-content;\n  flex-grow: 1;\n  background-color: #a0a0a0;\n  aspect-ratio: unset;\n}\n\n.active {\n  background-color: black;\n  color: white;\n  border-radius: 20px;\n}", "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAAF;;AAKA;EACE,WAAA;EAEA,eAAA;AAHF;;AAMA;EACE,aATa;EAWb,aAAA;EACA,sBAAA;EACA,SAba;EAeb,yBAAA;EAEA,uBAAA;EACA,kBAAA;AANF;;AASA;EACE,aAAA;EACA,SAvBa;AAiBf;;AAUA;EACE,WAFQ;EAIR,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,eAAA;EAEA,mCAAA;EAEA,yBAAA;EACA,kBAAA;EAEA,gBAAA;AAZF;AAcE;EACE,oCAAA;EACA,YAAA;EACA,eAAA;AAZJ;;AAgBA;EACE,gBAzBQ;EA0BR,sBAAA;EACA,YAAA;EACA,yBAAA;EACA,mBAAA;AAbF;;AAgBA;EACE,uBAAA;EACA,YAAA;EACA,mBAAA;AAbF","sourcesContent":[":root{\r\n  min-height: 100vh;\r\n  \r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.content-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\n$gap-btw-keys: 10px;\r\n\r\n.textarea-user-input {\r\n  width: 100%;\r\n\r\n  font-size: 20px;\r\n}\r\n\r\n.keyboard {\r\n  padding: $gap-btw-keys;\r\n  \r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: $gap-btw-keys;\r\n\r\n  background-color: #ff8912;\r\n  \r\n  border: 2px solid black;\r\n  border-radius: 4px;\r\n}\r\n\r\n.keyboard--row {\r\n  display: flex;\r\n  gap: $gap-btw-keys;\r\n}\r\n\r\n$keySize: 40px;\r\n.keyboard--key {\r\n  width: $keySize;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  \r\n  aspect-ratio: 1;\r\n\r\n  font-size: clamp(10px, calc(100vw/40), 16px);\r\n\r\n  background-color: #c1c1c1;\r\n  border-radius: 4px;\r\n\r\n  transition: 0.3s;\r\n\r\n  &:hover {\r\n    background-color: rgb(103, 102, 102);\r\n    color: white;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.no-letter-key {\r\n  min-height: $keySize;\r\n  min-width: fit-content;\r\n  flex-grow: 1;\r\n  background-color: #a0a0a0;\r\n  aspect-ratio: unset;\r\n}\r\n\r\n.active {\r\n  background-color: black;\r\n  color: white;\r\n  border-radius: calc($keySize / 2);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./computer-keyboard-wired-icon.svg */ "./src/computer-keyboard-wired-icon.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" sizes=\"any\" type=\"image/svg\">\r\n  <title>Virtual keyboard</title>\r\n</head>\r\n\r\n<body>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_input_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/input-controller */ "./src/components/input-controller.js");
/* harmony import */ var _components_langShortcut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/langShortcut */ "./src/components/langShortcut.js");
/* harmony import */ var _components_os_type_msg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/os-type-msg */ "./src/components/os-type-msg.js");
/* harmony import */ var _components_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shared */ "./src/components/shared.js");





const contentWrapper = (0,_components_shared__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', _components_shared__WEBPACK_IMPORTED_MODULE_3__.CSSCLASS.contentWrapper);
const inputController = new _components_input_controller__WEBPACK_IMPORTED_MODULE_0__.InputController();
const osTypeMsg = (0,_components_os_type_msg__WEBPACK_IMPORTED_MODULE_2__.makeOsTypeMsg)();
const langSwitchMsg = (0,_components_langShortcut__WEBPACK_IMPORTED_MODULE_1__.makeLangSwitchShortcutMsg)();
contentWrapper.append(inputController.textarea.node, inputController.keyboardNode, osTypeMsg, langSwitchMsg);

document.body.append(contentWrapper);

inputController.textarea.node.focus();

/***/ }),

/***/ "./src/components/input-controller.js":
/*!********************************************!*\
  !*** ./src/components/input-controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputController": () => (/* binding */ InputController)
/* harmony export */ });
/* harmony import */ var _keyboard_press_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard-press-controller */ "./src/components/keyboard-press-controller.js");
/* harmony import */ var _make_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./make-textarea */ "./src/components/make-textarea.js");



class InputController {
  constructor() {
    this.getInputValue = this.getInputValue.bind(this)

    this.textarea = new _make_textarea__WEBPACK_IMPORTED_MODULE_1__.Textarea();
    this.keyboardController = new _keyboard_press_controller__WEBPACK_IMPORTED_MODULE_0__.KeyboardPressController(this.getInputValue);
    this.keyboardNode = this.keyboardController.keyboard.node;

  }

  getInputValue(value) {
    value = value === 'Tab'
      ? ' ' + ' ' + ' ' + ' '
      : value;
    
    this.textarea.addChar(value);
  }
}

/***/ }),

/***/ "./src/components/keyboard-press-controller.js":
/*!*****************************************************!*\
  !*** ./src/components/keyboard-press-controller.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardPressController": () => (/* binding */ KeyboardPressController)
/* harmony export */ });
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard */ "./src/components/keyboard.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared */ "./src/components/shared.js");



class KeyboardPressController {
  constructor(sendToInput) {
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this._handleKeyUp = this._handleKeyUp.bind(this);
    this._handleShiftUp = this._handleShiftUp.bind(this);

    const paramsFromLocalStorage = JSON.parse(localStorage.getItem('params'));
    this.isShiftKey = false;
    this.isCapsKey = false;
    this.lang = paramsFromLocalStorage ? paramsFromLocalStorage.lang : 'en';
    this.keyboardKeys = this.getKeyboardKeys();
    this.keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_0__.Keyboard(this.keyboardKeys, this.handleMouseDown);
    this.sendToInput = sendToInput;

    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this._handleKeyUp);
    window.addEventListener('beforeunload', () => localStorage.setItem('params', JSON.stringify({'lang': this.lang, caps: this.isCapsKey})));
  }

  handleMouseDown(code){
    const event = new KeyboardEvent('keydown', {
      code: code,
      shiftKey: this.isShiftKey,
    });

    this.handleKeyDown(event);
    document.addEventListener('mouseup', () => this.handleMouseUp(code));
  }

  handleMouseUp(code){
    const event = new KeyboardEvent('keydown', {
      code: code
    });
    this._handleKeyUp(event);
  }

  _handleKeyUp(e) {
    if (e.code.includes('Shift')) {
      this._handleShiftUp();
    }

    if (e.code === 'CapsLock' && this.isCapsKey) return;

    this.keyboard.makeInactive(e.code);
  }

  handleKeyDown(e) {
    const keyCodes = Array.from(Object.keys(_shared__WEBPACK_IMPORTED_MODULE_1__.layout));
    if (!keyCodes.includes(e.code)) return;

    this.keyboard.makeActive(e.code);

    const saveDefaultKeyCodes = ['Backspace', 'Enter', 'Delete'];

    if (saveDefaultKeyCodes.includes(e.code)) return;

    e.preventDefault();

    if(!_shared__WEBPACK_IMPORTED_MODULE_1__.specialKeys.includes(e.code) || (e.code.includes('Arrow') || e.code === 'Tab')) this.sendToInput(this.keyboardKeys[e.code]);

    this._handleSpecKeyDown(e);
  }

  _handleSpecKeyDown(e) {
    let isParamsChanged = false;

    if (e.code === 'CapsLock') {
      this.isCapsKey = !this.isCapsKey;
      isParamsChanged = true;
    }

    if (e.code.includes('Shift')) {
      this.isShiftKey = true;
      isParamsChanged = true;
    }

    if (e.ctrlKey && e.altKey) {
      this.lang = this.lang === 'en' ? 'ru' : 'en';
      isParamsChanged = true;
    }

    if (isParamsChanged) {
      this.keyboard.updateKeyboardValues(this.getKeyboardKeys());
    }
  }

  _handleShiftUp() {
    this.isShiftKey = false;
    this.keyboard.updateKeyboardValues(this.getKeyboardKeys());
  }

  getKeyboardKeys() {
    this.keyboardKeys = {};

    for (let code in _shared__WEBPACK_IMPORTED_MODULE_1__.layout) {
      const value = _shared__WEBPACK_IMPORTED_MODULE_1__.layout[code][this._makeParams()];

      this.keyboardKeys[code] = this.isCapsKey && !_shared__WEBPACK_IMPORTED_MODULE_1__.specialKeys.includes(code)
        ? value.toUpperCase()
        : value;
    }

    return this.keyboardKeys;
  }

  _makeParams() {
    const shiftSuffix = this.isShiftKey ? 'Shift' : '';
    return this.lang + shiftSuffix;
  }
}

/***/ }),

/***/ "./src/components/keyboard.js":
/*!************************************!*\
  !*** ./src/components/keyboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keyboard": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "./src/components/shared.js");


class Keyboard {
  constructor(keyboardKeys, handleMouseClick) {
    this.handleMouseClick = handleMouseClick;
    this.node = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', _shared__WEBPACK_IMPORTED_MODULE_0__.CSSCLASS.keyboard);
    this.keyCodes = Array.from(Object.keys(keyboardKeys));
    this.keyboardKeys = keyboardKeys;
    this.keyNodes = {};

    this._makeKeyboard();
  }

  _makeKeyboard() {
    const rowLengths = [14, 15, 13, 13, 9];

    for (let curRowIdx = 0, currRowFirstIndex = 0; curRowIdx < rowLengths.length; curRowIdx++) {
      const nextRowFirstIndex = currRowFirstIndex + rowLengths[curRowIdx];
      const curRowCodes = this.keyCodes.slice(currRowFirstIndex, nextRowFirstIndex);
      this._makeRow(curRowCodes);
      currRowFirstIndex = nextRowFirstIndex;
    }
  }

  _makeRow(row) {
    const rowNode = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', _shared__WEBPACK_IMPORTED_MODULE_0__.CSSCLASS.keyboardRow);

    row.forEach(elem => {
      const key = this._makeKey(elem);
      rowNode.append(key);
    })

    this.node.append(rowNode);
  }

  _makeKey(keyCode) {
    const keyNode = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', _shared__WEBPACK_IMPORTED_MODULE_0__.CSSCLASS.keyboardKey);
    keyNode.addEventListener('mousedown', () => this.handleMouseClick(keyCode));

    if (!this.keyNodes[keyCode]) {
      this.keyNodes[keyCode] = {
        node: keyNode,
        active: false
      };
    }

    keyNode.classList.add(_shared__WEBPACK_IMPORTED_MODULE_0__.CSSCLASS.keyboardKey);
    if (_shared__WEBPACK_IMPORTED_MODULE_0__.specialKeys.includes(keyCode)) keyNode.classList.add(_shared__WEBPACK_IMPORTED_MODULE_0__.CSSCLASS.noLetterKey);
    if (this.keyNodes[keyCode].active) keyNode.classList.add(_shared__WEBPACK_IMPORTED_MODULE_0__.CSSCLASS.active);
    keyNode.textContent = this.returnKeyValue(keyCode);

    return keyNode;
  }

  makeActive(keyCode) {
    if (!this.keyCodes.includes(keyCode)) return;
    this.keyNodes[keyCode].node.classList.add(_shared__WEBPACK_IMPORTED_MODULE_0__.CSSCLASS.active);
  }

  makeInactive(keyCode) {
    if (!this.keyCodes.includes(keyCode)) return;
    this.keyNodes[keyCode].node.classList.remove(_shared__WEBPACK_IMPORTED_MODULE_0__.CSSCLASS.active);
  }

  returnKeyValue(keyCode) {
    return this.keyboardKeys[keyCode];
  }

  updateKeyboardValues(keyboardKeys) {
    this.keyboardKeys = keyboardKeys;
    this._rerenderKeyValues();
  }

  _rerenderKeyValues() {
    this.keyCodes.forEach(code => {
      this.keyNodes[code].node.textContent = this.keyboardKeys[code]
    });
  }
}

/***/ }),

/***/ "./src/components/langShortcut.js":
/*!****************************************!*\
  !*** ./src/components/langShortcut.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeLangSwitchShortcutMsg": () => (/* binding */ makeLangSwitchShortcutMsg)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "./src/components/shared.js");


function makeLangSwitchShortcutMsg(){
  const node = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', _shared__WEBPACK_IMPORTED_MODULE_0__.CSSCLASS.langSwitchShortcut);
  node.textContent = 'Для переключения языка одновременно нажмите левые Shift + Alt';
  return node;
}

/***/ }),

/***/ "./src/components/make-textarea.js":
/*!*****************************************!*\
  !*** ./src/components/make-textarea.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Textarea": () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "./src/components/shared.js");


class Textarea{
  constructor(){
    this.node = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createElement)('textarea', _shared__WEBPACK_IMPORTED_MODULE_0__.CSSCLASS.textArea);
    this._isFocused = true;
    
    this._toggleFocusState = this._toggleFocusState.bind(this);

    this.node.addEventListener('focus', this._toggleFocusState)
    this.node.addEventListener('blur', this._toggleFocusState)
  }

  get isFocused(){
    return this._isFocused;
  }

  _toggleFocusState(){
    this._isFocused = !this._isFocused;
  }

  addChar(char){
    this.node.value += char;
  }
}

/***/ }),

/***/ "./src/components/os-type-msg.js":
/*!***************************************!*\
  !*** ./src/components/os-type-msg.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeOsTypeMsg": () => (/* binding */ makeOsTypeMsg)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "./src/components/shared.js");


function makeOsTypeMsg(){
  const msgNode = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', _shared__WEBPACK_IMPORTED_MODULE_0__.CSSCLASS.osTypeMsg);
  msgNode.textContent = `Клавиатура запущена в системе ${(0,_shared__WEBPACK_IMPORTED_MODULE_0__.getOsType)()}`;
  return msgNode;
}

/***/ }),

/***/ "./src/components/shared.js":
/*!**********************************!*\
  !*** ./src/components/shared.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSCLASS": () => (/* binding */ CSSCLASS),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "getOsType": () => (/* binding */ getOsType),
/* harmony export */   "layout": () => (/* binding */ layout),
/* harmony export */   "specialKeys": () => (/* binding */ specialKeys)
/* harmony export */ });
function createElement(type, cssClass) {
  const elem = document.createElement(type);
  elem.classList.add(cssClass);
  return elem;
}

function getOsType() {
  const navPlatform = navigator.platform.toLowerCase();
  const osType = navPlatform.indexOf('win') !== -1
    ? 'Windows'
    : navPlatform.indexOf('mac') !== -1
      ? 'Mac'
      : null;

  if (!osType) throw new Error('Unknown system');

  return osType;
}

const CSSCLASS = {
  contentWrapper: 'content-wrapper',
  textArea: 'textarea-user-input',
  keyboard: 'keyboard',
  keyboardRow: 'keyboard--row',
  keyboardKey: 'keyboard--key',
  noLetterKey: 'no-letter-key',
  osTypeMsg: 'os-type-msg',
  langSwitchShortcut: 'lang-switch-shortcut',
  active: 'active'
}

const layout = {
  Backquote: { en: '`', ru: 'ё', enShift: '~', ruShift: 'Ё' },
  Digit1: { en: '1', ru: '1', enShift: '!', ruShift: '!' },
  Digit2: { en: '2', ru: '2', enShift: '@', ruShift: '"' },
  Digit3: { en: '3', ru: '3', enShift: '#', ruShift: '№' },
  Digit4: { en: '4', ru: '4', enShift: '$', ruShift: ';' },
  Digit5: { en: '5', ru: '5', enShift: '%', ruShift: '%' },
  Digit6: { en: '6', ru: '6', enShift: '^', ruShift: ':' },
  Digit7: { en: '7', ru: '7', enShift: '&', ruShift: '?' },
  Digit8: { en: '8', ru: '8', enShift: '*', ruShift: '*' },
  Digit9: { en: '9', ru: '9', enShift: '(', ruShift: '(' },
  Digit0: { en: '0', ru: '0', enShift: ')', ruShift: ')' },
  Minus: { en: '-', ru: '-', enShift: '_', ruShift: '_' },
  Equal: { en: '=', ru: '=', enShift: '+', ruShift: '+' },
  Backspace: { en: 'Backspace', ru: 'Backspace', enShift: 'Backspace', ruShift: 'Backspace' },
  Tab: { en: 'Tab', ru: 'Tab', enShift: 'Tab', ruShift: 'Tab' },
  KeyQ: { en: 'q', ru: 'й', enShift: 'Q', ruShift: 'Й' },
  KeyW: { en: 'w', ru: 'ц', enShift: 'W', ruShift: 'Ц' },
  KeyE: { en: 'e', ru: 'у', enShift: 'E', ruShift: 'У' },
  KeyR: { en: 'r', ru: 'к', enShift: 'R', ruShift: 'К' },
  KeyT: { en: 't', ru: 'е', enShift: 'T', ruShift: 'Е' },
  KeyY: { en: 'y', ru: 'н', enShift: 'Y', ruShift: 'Н' },
  KeyU: { en: 'u', ru: 'г', enShift: 'U', ruShift: 'Г' },
  KeyI: { en: 'i', ru: 'ш', enShift: 'I', ruShift: 'Ш' },
  KeyO: { en: 'o', ru: 'щ', enShift: 'O', ruShift: 'Щ' },
  KeyP: { en: 'p', ru: 'з', enShift: 'P', ruShift: 'З' },
  BracketLeft: { en: '[', ru: 'х', enShift: '{', ruShift: 'Х' },
  BracketRight: { en: ']', ru: 'ъ', enShift: '}', ruShift: 'Ъ' },
  Backslash: { en: '\\', ru: '\\', enShift: '|', ruShift: '/' },
  Delete: { en: 'Del', ru: 'Del', enShift: 'Del', ruShift: 'Del' },
  CapsLock: { en: 'Caps', ru: 'Caps', enShift: 'Caps', ruShift: 'Caps' },
  KeyA: { en: 'a', ru: 'ф', enShift: 'A', ruShift: 'Ф' },
  KeyS: { en: 's', ru: 'ы', enShift: 'S', ruShift: 'Ы' },
  KeyD: { en: 'd', ru: 'в', enShift: 'D', ruShift: 'В' },
  KeyF: { en: 'f', ru: 'а', enShift: 'F', ruShift: 'А' },
  KeyG: { en: 'g', ru: 'п', enShift: 'G', ruShift: 'П' },
  KeyH: { en: 'h', ru: 'р', enShift: 'H', ruShift: 'Р' },
  KeyJ: { en: 'j', ru: 'о', enShift: 'J', ruShift: 'О' },
  KeyK: { en: 'k', ru: 'л', enShift: 'K', ruShift: 'Л' },
  KeyL: { en: 'l', ru: 'д', enShift: 'L', ruShift: 'Д' },
  Semicolon: { en: ';', ru: 'ж', enShift: ':', ruShift: 'Ж' },
  Quote: { en: "'", ru: 'э', enShift: "\"", ruShift: 'Э' },
  Enter: { en: 'Enter', ru: 'Enter', enShift: 'Enter', ruShift: 'Enter' },
  ShiftLeft: { en: 'Shift', ru: 'Shift', enShift: 'Shift', ruShift: 'Shift' },
  KeyZ: { en: 'z', ru: 'я', enShift: 'Z', ruShift: 'Я' },
  KeyX: { en: 'x', ru: 'ч', enShift: 'X', ruShift: 'Ч' },
  KeyC: { en: 'c', ru: 'с', enShift: 'C', ruShift: 'С' },
  KeyV: { en: 'v', ru: 'м', enShift: 'V', ruShift: 'М' },
  KeyB: { en: 'b', ru: 'и', enShift: 'B', ruShift: 'И' },
  KeyN: { en: 'n', ru: 'т', enShift: 'N', ruShift: 'Т' },
  KeyM: { en: 'm', ru: 'ь', enShift: 'M', ruShift: 'Ь' },
  Comma: { en: ',', ru: 'б', enShift: '<', ruShift: 'Б' },
  Period: { en: '.', ru: 'ю', enShift: '>', ruShift: 'Ю' },
  Slash: { en: '/', ru: '.', enShift: '?', ruShift: ',' },
  ArrowUp: { en: '↑', ru: '↑', enShift: '↑', ruShift: '↑' },
  ShiftRight: { en: 'Shift', ru: 'Shift', enShift: 'Shift', ruShift: 'Shift' },
  ControlLeft: { en: 'Ctrl', ru: 'Ctrl', enShift: 'Ctrl', ruShift: 'Ctrl' },
  MetaLeft: { en: 'Win', ru: 'Win', enShift: 'Win', ruShift: 'Win' },
  AltLeft: { en: 'Alt', ru: 'Alt', enShift: 'Alt', ruShift: 'Alt' },
  Space: { en: '', ru: '', enShift: '', ruShift: '' },
  AltRight: { en: 'Alt', ru: 'Alt', enShift: 'Alt', ruShift: 'Alt' },
  ArrowLeft: { en: '←', ru: '←', enShift: '←', ruShift: '←' },
  ArrowDown: { en: '↓', ru: '↓', enShift: '↓', ruShift: '↓' },
  ArrowRight: { en: '→', ru: '→', enShift: '→', ruShift: '→' },
  ControlRight: { en: 'Ctrl', ru: 'Ctrl', enShift: 'Ctrl', ruShift: 'Ctrl' }
}

const specialKeys = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

/***/ }),

/***/ "./src/computer-keyboard-wired-icon.svg":
/*!**********************************************!*\
  !*** ./src/computer-keyboard-wired-icon.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0a516fc044a3e59c0a1.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./src/app.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvaW5kZXguc2Nzcz83MjIzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9jb21wb25lbnRzL2lucHV0LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9jb21wb25lbnRzL2tleWJvYXJkLXByZXNzLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9jb21wb25lbnRzL2tleWJvYXJkLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvY29tcG9uZW50cy9sYW5nU2hvcnRjdXQuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9jb21wb25lbnRzL21ha2UtdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9jb21wb25lbnRzL29zLXR5cGUtbXNnLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvY29tcG9uZW50cy9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4udGV4dGFyZWEtdXNlci1pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmtleWJvYXJkIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjg5MTI7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmtleWJvYXJkLS1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmtleWJvYXJkLS1rZXkge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxMHB4LCAyLjV2dywgMTZweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLmtleWJvYXJkLS1rZXk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMywgMTAyLCAxMDIpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm8tbGV0dGVyLWtleSB7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMGEwYTA7XFxuICBhc3BlY3QtcmF0aW86IHVuc2V0O1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQUY7O0FBS0E7RUFDRSxXQUFBO0VBRUEsZUFBQTtBQUhGOztBQU1BO0VBQ0UsYUFUYTtFQVdiLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBYmE7RUFlYix5QkFBQTtFQUVBLHVCQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxTQXZCYTtBQWlCZjs7QUFVQTtFQUNFLFdBRlE7RUFJUixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7RUFFQSxtQ0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtBQVpGO0FBY0U7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBWko7O0FBZ0JBO0VBQ0UsZ0JBekJRO0VBMEJSLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFiRjs7QUFnQkE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiRnYXAtYnR3LWtleXM6IDEwcHg7XFxyXFxuXFxyXFxuLnRleHRhcmVhLXVzZXItaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5rZXlib2FyZCB7XFxyXFxuICBwYWRkaW5nOiAkZ2FwLWJ0dy1rZXlzO1xcclxcbiAgXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogJGdhcC1idHcta2V5cztcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjg5MTI7XFxyXFxuICBcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ua2V5Ym9hcmQtLXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAkZ2FwLWJ0dy1rZXlzO1xcclxcbn1cXHJcXG5cXHJcXG4ka2V5U2l6ZTogNDBweDtcXHJcXG4ua2V5Ym9hcmQtLWtleSB7XFxyXFxuICB3aWR0aDogJGtleVNpemU7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgXFxyXFxuICBhc3BlY3QtcmF0aW86IDE7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IGNsYW1wKDEwcHgsIGNhbGMoMTAwdncvNDApLCAxNnB4KTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsIDEwMiwgMTAyKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5uby1sZXR0ZXIta2V5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6ICRrZXlTaXplO1xcclxcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMGEwYTA7XFxyXFxuICBhc3BlY3QtcmF0aW86IHVuc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogY2FsYygka2V5U2l6ZSAvIDIpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vY29tcHV0ZXIta2V5Ym9hcmQtd2lyZWQtaWNvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXHJcXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxyXFxuXFxyXFxuPGhlYWQ+XFxyXFxuICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxyXFxuICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiPlxcclxcbiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcclxcbiAgPGxpbmsgcmVsPVxcXCJpY29uXFxcIiBocmVmPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgc2l6ZXM9XFxcImFueVxcXCIgdHlwZT1cXFwiaW1hZ2Uvc3ZnXFxcIj5cXHJcXG4gIDx0aXRsZT5WaXJ0dWFsIGtleWJvYXJkPC90aXRsZT5cXHJcXG48L2hlYWQ+XFxyXFxuXFxyXFxuPGJvZHk+XFxyXFxuPC9ib2R5PlxcclxcblxcclxcbjwvaHRtbD5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgSW5wdXRDb250cm9sbGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBtYWtlTGFuZ1N3aXRjaFNob3J0Y3V0TXNnIH0gZnJvbSAnLi9jb21wb25lbnRzL2xhbmdTaG9ydGN1dCc7XHJcbmltcG9ydCB7IG1ha2VPc1R5cGVNc2cgfSBmcm9tICcuL2NvbXBvbmVudHMvb3MtdHlwZS1tc2cnO1xyXG5pbXBvcnQgeyBDU1NDTEFTUywgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQnO1xyXG5cclxuY29uc3QgY29udGVudFdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBDU1NDTEFTUy5jb250ZW50V3JhcHBlcik7XHJcbmNvbnN0IGlucHV0Q29udHJvbGxlciA9IG5ldyBJbnB1dENvbnRyb2xsZXIoKTtcclxuY29uc3Qgb3NUeXBlTXNnID0gbWFrZU9zVHlwZU1zZygpO1xyXG5jb25zdCBsYW5nU3dpdGNoTXNnID0gbWFrZUxhbmdTd2l0Y2hTaG9ydGN1dE1zZygpO1xyXG5jb250ZW50V3JhcHBlci5hcHBlbmQoaW5wdXRDb250cm9sbGVyLnRleHRhcmVhLm5vZGUsIGlucHV0Q29udHJvbGxlci5rZXlib2FyZE5vZGUsIG9zVHlwZU1zZywgbGFuZ1N3aXRjaE1zZyk7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChjb250ZW50V3JhcHBlcik7XHJcblxyXG5pbnB1dENvbnRyb2xsZXIudGV4dGFyZWEubm9kZS5mb2N1cygpOyIsImltcG9ydCB7IEtleWJvYXJkUHJlc3NDb250cm9sbGVyIH0gZnJvbSBcIi4va2V5Ym9hcmQtcHJlc3MtY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCIuL21ha2UtdGV4dGFyZWFcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5nZXRJbnB1dFZhbHVlID0gdGhpcy5nZXRJbnB1dFZhbHVlLmJpbmQodGhpcylcclxuXHJcbiAgICB0aGlzLnRleHRhcmVhID0gbmV3IFRleHRhcmVhKCk7XHJcbiAgICB0aGlzLmtleWJvYXJkQ29udHJvbGxlciA9IG5ldyBLZXlib2FyZFByZXNzQ29udHJvbGxlcih0aGlzLmdldElucHV0VmFsdWUpO1xyXG4gICAgdGhpcy5rZXlib2FyZE5vZGUgPSB0aGlzLmtleWJvYXJkQ29udHJvbGxlci5rZXlib2FyZC5ub2RlO1xyXG5cclxuICB9XHJcblxyXG4gIGdldElucHV0VmFsdWUodmFsdWUpIHtcclxuICAgIHZhbHVlID0gdmFsdWUgPT09ICdUYWInXHJcbiAgICAgID8gJyAnICsgJyAnICsgJyAnICsgJyAnXHJcbiAgICAgIDogdmFsdWU7XHJcbiAgICBcclxuICAgIHRoaXMudGV4dGFyZWEuYWRkQ2hhcih2YWx1ZSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tIFwiLi9rZXlib2FyZFwiO1xyXG5pbXBvcnQgeyBsYXlvdXQsIHNwZWNpYWxLZXlzIH0gZnJvbSBcIi4vc2hhcmVkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRQcmVzc0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKHNlbmRUb0lucHV0KSB7XHJcbiAgICB0aGlzLmhhbmRsZU1vdXNlRG93biA9IHRoaXMuaGFuZGxlTW91c2VEb3duLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZU1vdXNlVXAgPSB0aGlzLmhhbmRsZU1vdXNlVXAuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5faGFuZGxlS2V5VXAgPSB0aGlzLl9oYW5kbGVLZXlVcC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5faGFuZGxlU2hpZnRVcCA9IHRoaXMuX2hhbmRsZVNoaWZ0VXAuYmluZCh0aGlzKTtcclxuXHJcbiAgICBjb25zdCBwYXJhbXNGcm9tTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFyYW1zJykpO1xyXG4gICAgdGhpcy5pc1NoaWZ0S2V5ID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzQ2Fwc0tleSA9IGZhbHNlO1xyXG4gICAgdGhpcy5sYW5nID0gcGFyYW1zRnJvbUxvY2FsU3RvcmFnZSA/IHBhcmFtc0Zyb21Mb2NhbFN0b3JhZ2UubGFuZyA6ICdlbic7XHJcbiAgICB0aGlzLmtleWJvYXJkS2V5cyA9IHRoaXMuZ2V0S2V5Ym9hcmRLZXlzKCk7XHJcbiAgICB0aGlzLmtleWJvYXJkID0gbmV3IEtleWJvYXJkKHRoaXMua2V5Ym9hcmRLZXlzLCB0aGlzLmhhbmRsZU1vdXNlRG93bik7XHJcbiAgICB0aGlzLnNlbmRUb0lucHV0ID0gc2VuZFRvSW5wdXQ7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2hhbmRsZUtleVVwKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFyYW1zJywgSlNPTi5zdHJpbmdpZnkoeydsYW5nJzogdGhpcy5sYW5nLCBjYXBzOiB0aGlzLmlzQ2Fwc0tleX0pKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVNb3VzZURvd24oY29kZSl7XHJcbiAgICBjb25zdCBldmVudCA9IG5ldyBLZXlib2FyZEV2ZW50KCdrZXlkb3duJywge1xyXG4gICAgICBjb2RlOiBjb2RlLFxyXG4gICAgICBzaGlmdEtleTogdGhpcy5pc1NoaWZ0S2V5LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVLZXlEb3duKGV2ZW50KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB0aGlzLmhhbmRsZU1vdXNlVXAoY29kZSkpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTW91c2VVcChjb2RlKXtcclxuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEtleWJvYXJkRXZlbnQoJ2tleWRvd24nLCB7XHJcbiAgICAgIGNvZGU6IGNvZGVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5faGFuZGxlS2V5VXAoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUtleVVwKGUpIHtcclxuICAgIGlmIChlLmNvZGUuaW5jbHVkZXMoJ1NoaWZ0JykpIHtcclxuICAgICAgdGhpcy5faGFuZGxlU2hpZnRVcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLmNvZGUgPT09ICdDYXBzTG9jaycgJiYgdGhpcy5pc0NhcHNLZXkpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmtleWJvYXJkLm1ha2VJbmFjdGl2ZShlLmNvZGUpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlS2V5RG93bihlKSB7XHJcbiAgICBjb25zdCBrZXlDb2RlcyA9IEFycmF5LmZyb20oT2JqZWN0LmtleXMobGF5b3V0KSk7XHJcbiAgICBpZiAoIWtleUNvZGVzLmluY2x1ZGVzKGUuY29kZSkpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmtleWJvYXJkLm1ha2VBY3RpdmUoZS5jb2RlKTtcclxuXHJcbiAgICBjb25zdCBzYXZlRGVmYXVsdEtleUNvZGVzID0gWydCYWNrc3BhY2UnLCAnRW50ZXInLCAnRGVsZXRlJ107XHJcblxyXG4gICAgaWYgKHNhdmVEZWZhdWx0S2V5Q29kZXMuaW5jbHVkZXMoZS5jb2RlKSkgcmV0dXJuO1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZighc3BlY2lhbEtleXMuaW5jbHVkZXMoZS5jb2RlKSB8fCAoZS5jb2RlLmluY2x1ZGVzKCdBcnJvdycpIHx8IGUuY29kZSA9PT0gJ1RhYicpKSB0aGlzLnNlbmRUb0lucHV0KHRoaXMua2V5Ym9hcmRLZXlzW2UuY29kZV0pO1xyXG5cclxuICAgIHRoaXMuX2hhbmRsZVNwZWNLZXlEb3duKGUpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVNwZWNLZXlEb3duKGUpIHtcclxuICAgIGxldCBpc1BhcmFtc0NoYW5nZWQgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoZS5jb2RlID09PSAnQ2Fwc0xvY2snKSB7XHJcbiAgICAgIHRoaXMuaXNDYXBzS2V5ID0gIXRoaXMuaXNDYXBzS2V5O1xyXG4gICAgICBpc1BhcmFtc0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLmNvZGUuaW5jbHVkZXMoJ1NoaWZ0JykpIHtcclxuICAgICAgdGhpcy5pc1NoaWZ0S2V5ID0gdHJ1ZTtcclxuICAgICAgaXNQYXJhbXNDaGFuZ2VkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS5jdHJsS2V5ICYmIGUuYWx0S2V5KSB7XHJcbiAgICAgIHRoaXMubGFuZyA9IHRoaXMubGFuZyA9PT0gJ2VuJyA/ICdydScgOiAnZW4nO1xyXG4gICAgICBpc1BhcmFtc0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1BhcmFtc0NoYW5nZWQpIHtcclxuICAgICAgdGhpcy5rZXlib2FyZC51cGRhdGVLZXlib2FyZFZhbHVlcyh0aGlzLmdldEtleWJvYXJkS2V5cygpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9oYW5kbGVTaGlmdFVwKCkge1xyXG4gICAgdGhpcy5pc1NoaWZ0S2V5ID0gZmFsc2U7XHJcbiAgICB0aGlzLmtleWJvYXJkLnVwZGF0ZUtleWJvYXJkVmFsdWVzKHRoaXMuZ2V0S2V5Ym9hcmRLZXlzKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0S2V5Ym9hcmRLZXlzKCkge1xyXG4gICAgdGhpcy5rZXlib2FyZEtleXMgPSB7fTtcclxuXHJcbiAgICBmb3IgKGxldCBjb2RlIGluIGxheW91dCkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGxheW91dFtjb2RlXVt0aGlzLl9tYWtlUGFyYW1zKCldO1xyXG5cclxuICAgICAgdGhpcy5rZXlib2FyZEtleXNbY29kZV0gPSB0aGlzLmlzQ2Fwc0tleSAmJiAhc3BlY2lhbEtleXMuaW5jbHVkZXMoY29kZSlcclxuICAgICAgICA/IHZhbHVlLnRvVXBwZXJDYXNlKClcclxuICAgICAgICA6IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmtleWJvYXJkS2V5cztcclxuICB9XHJcblxyXG4gIF9tYWtlUGFyYW1zKCkge1xyXG4gICAgY29uc3Qgc2hpZnRTdWZmaXggPSB0aGlzLmlzU2hpZnRLZXkgPyAnU2hpZnQnIDogJyc7XHJcbiAgICByZXR1cm4gdGhpcy5sYW5nICsgc2hpZnRTdWZmaXg7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgc3BlY2lhbEtleXMsIENTU0NMQVNTIH0gZnJvbSBcIi4vc2hhcmVkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQge1xyXG4gIGNvbnN0cnVjdG9yKGtleWJvYXJkS2V5cywgaGFuZGxlTW91c2VDbGljaykge1xyXG4gICAgdGhpcy5oYW5kbGVNb3VzZUNsaWNrID0gaGFuZGxlTW91c2VDbGljaztcclxuICAgIHRoaXMubm9kZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIENTU0NMQVNTLmtleWJvYXJkKTtcclxuICAgIHRoaXMua2V5Q29kZXMgPSBBcnJheS5mcm9tKE9iamVjdC5rZXlzKGtleWJvYXJkS2V5cykpO1xyXG4gICAgdGhpcy5rZXlib2FyZEtleXMgPSBrZXlib2FyZEtleXM7XHJcbiAgICB0aGlzLmtleU5vZGVzID0ge307XHJcblxyXG4gICAgdGhpcy5fbWFrZUtleWJvYXJkKCk7XHJcbiAgfVxyXG5cclxuICBfbWFrZUtleWJvYXJkKCkge1xyXG4gICAgY29uc3Qgcm93TGVuZ3RocyA9IFsxNCwgMTUsIDEzLCAxMywgOV07XHJcblxyXG4gICAgZm9yIChsZXQgY3VyUm93SWR4ID0gMCwgY3VyclJvd0ZpcnN0SW5kZXggPSAwOyBjdXJSb3dJZHggPCByb3dMZW5ndGhzLmxlbmd0aDsgY3VyUm93SWR4KyspIHtcclxuICAgICAgY29uc3QgbmV4dFJvd0ZpcnN0SW5kZXggPSBjdXJyUm93Rmlyc3RJbmRleCArIHJvd0xlbmd0aHNbY3VyUm93SWR4XTtcclxuICAgICAgY29uc3QgY3VyUm93Q29kZXMgPSB0aGlzLmtleUNvZGVzLnNsaWNlKGN1cnJSb3dGaXJzdEluZGV4LCBuZXh0Um93Rmlyc3RJbmRleCk7XHJcbiAgICAgIHRoaXMuX21ha2VSb3coY3VyUm93Q29kZXMpO1xyXG4gICAgICBjdXJyUm93Rmlyc3RJbmRleCA9IG5leHRSb3dGaXJzdEluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX21ha2VSb3cocm93KSB7XHJcbiAgICBjb25zdCByb3dOb2RlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgQ1NTQ0xBU1Mua2V5Ym9hcmRSb3cpO1xyXG5cclxuICAgIHJvdy5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSB0aGlzLl9tYWtlS2V5KGVsZW0pO1xyXG4gICAgICByb3dOb2RlLmFwcGVuZChrZXkpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLm5vZGUuYXBwZW5kKHJvd05vZGUpO1xyXG4gIH1cclxuXHJcbiAgX21ha2VLZXkoa2V5Q29kZSkge1xyXG4gICAgY29uc3Qga2V5Tm9kZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIENTU0NMQVNTLmtleWJvYXJkS2V5KTtcclxuICAgIGtleU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gdGhpcy5oYW5kbGVNb3VzZUNsaWNrKGtleUNvZGUpKTtcclxuXHJcbiAgICBpZiAoIXRoaXMua2V5Tm9kZXNba2V5Q29kZV0pIHtcclxuICAgICAgdGhpcy5rZXlOb2Rlc1trZXlDb2RlXSA9IHtcclxuICAgICAgICBub2RlOiBrZXlOb2RlLFxyXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBrZXlOb2RlLmNsYXNzTGlzdC5hZGQoQ1NTQ0xBU1Mua2V5Ym9hcmRLZXkpO1xyXG4gICAgaWYgKHNwZWNpYWxLZXlzLmluY2x1ZGVzKGtleUNvZGUpKSBrZXlOb2RlLmNsYXNzTGlzdC5hZGQoQ1NTQ0xBU1Mubm9MZXR0ZXJLZXkpO1xyXG4gICAgaWYgKHRoaXMua2V5Tm9kZXNba2V5Q29kZV0uYWN0aXZlKSBrZXlOb2RlLmNsYXNzTGlzdC5hZGQoQ1NTQ0xBU1MuYWN0aXZlKTtcclxuICAgIGtleU5vZGUudGV4dENvbnRlbnQgPSB0aGlzLnJldHVybktleVZhbHVlKGtleUNvZGUpO1xyXG5cclxuICAgIHJldHVybiBrZXlOb2RlO1xyXG4gIH1cclxuXHJcbiAgbWFrZUFjdGl2ZShrZXlDb2RlKSB7XHJcbiAgICBpZiAoIXRoaXMua2V5Q29kZXMuaW5jbHVkZXMoa2V5Q29kZSkpIHJldHVybjtcclxuICAgIHRoaXMua2V5Tm9kZXNba2V5Q29kZV0ubm9kZS5jbGFzc0xpc3QuYWRkKENTU0NMQVNTLmFjdGl2ZSk7XHJcbiAgfVxyXG5cclxuICBtYWtlSW5hY3RpdmUoa2V5Q29kZSkge1xyXG4gICAgaWYgKCF0aGlzLmtleUNvZGVzLmluY2x1ZGVzKGtleUNvZGUpKSByZXR1cm47XHJcbiAgICB0aGlzLmtleU5vZGVzW2tleUNvZGVdLm5vZGUuY2xhc3NMaXN0LnJlbW92ZShDU1NDTEFTUy5hY3RpdmUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuS2V5VmFsdWUoa2V5Q29kZSkge1xyXG4gICAgcmV0dXJuIHRoaXMua2V5Ym9hcmRLZXlzW2tleUNvZGVdO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlS2V5Ym9hcmRWYWx1ZXMoa2V5Ym9hcmRLZXlzKSB7XHJcbiAgICB0aGlzLmtleWJvYXJkS2V5cyA9IGtleWJvYXJkS2V5cztcclxuICAgIHRoaXMuX3JlcmVuZGVyS2V5VmFsdWVzKCk7XHJcbiAgfVxyXG5cclxuICBfcmVyZW5kZXJLZXlWYWx1ZXMoKSB7XHJcbiAgICB0aGlzLmtleUNvZGVzLmZvckVhY2goY29kZSA9PiB7XHJcbiAgICAgIHRoaXMua2V5Tm9kZXNbY29kZV0ubm9kZS50ZXh0Q29udGVudCA9IHRoaXMua2V5Ym9hcmRLZXlzW2NvZGVdXHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDU1NDTEFTUywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3NoYXJlZFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VMYW5nU3dpdGNoU2hvcnRjdXRNc2coKXtcclxuICBjb25zdCBub2RlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgQ1NTQ0xBU1MubGFuZ1N3aXRjaFNob3J0Y3V0KTtcclxuICBub2RlLnRleHRDb250ZW50ID0gJ9CU0LvRjyDQv9C10YDQtdC60LvRjtGH0LXQvdC40Y8g0Y/Qt9GL0LrQsCDQvtC00L3QvtCy0YDQtdC80LXQvdC90L4g0L3QsNC20LzQuNGC0LUg0LvQtdCy0YvQtSBTaGlmdCArIEFsdCc7XHJcbiAgcmV0dXJuIG5vZGU7XHJcbn0iLCJpbXBvcnQgeyBDU1NDTEFTUywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3NoYXJlZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRhcmVhe1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLm5vZGUgPSBjcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIENTU0NMQVNTLnRleHRBcmVhKTtcclxuICAgIHRoaXMuX2lzRm9jdXNlZCA9IHRydWU7XHJcbiAgICBcclxuICAgIHRoaXMuX3RvZ2dsZUZvY3VzU3RhdGUgPSB0aGlzLl90b2dnbGVGb2N1c1N0YXRlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fdG9nZ2xlRm9jdXNTdGF0ZSlcclxuICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fdG9nZ2xlRm9jdXNTdGF0ZSlcclxuICB9XHJcblxyXG4gIGdldCBpc0ZvY3VzZWQoKXtcclxuICAgIHJldHVybiB0aGlzLl9pc0ZvY3VzZWQ7XHJcbiAgfVxyXG5cclxuICBfdG9nZ2xlRm9jdXNTdGF0ZSgpe1xyXG4gICAgdGhpcy5faXNGb2N1c2VkID0gIXRoaXMuX2lzRm9jdXNlZDtcclxuICB9XHJcblxyXG4gIGFkZENoYXIoY2hhcil7XHJcbiAgICB0aGlzLm5vZGUudmFsdWUgKz0gY2hhcjtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDU1NDTEFTUywgY3JlYXRlRWxlbWVudCwgZ2V0T3NUeXBlIH0gZnJvbSBcIi4vc2hhcmVkXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZU9zVHlwZU1zZygpe1xyXG4gIGNvbnN0IG1zZ05vZGUgPSBjcmVhdGVFbGVtZW50KCdwJywgQ1NTQ0xBU1Mub3NUeXBlTXNnKTtcclxuICBtc2dOb2RlLnRleHRDb250ZW50ID0gYNCa0LvQsNCy0LjQsNGC0YPRgNCwINC30LDQv9GD0YnQtdC90LAg0LIg0YHQuNGB0YLQtdC80LUgJHtnZXRPc1R5cGUoKX1gO1xyXG4gIHJldHVybiBtc2dOb2RlO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY3NzQ2xhc3MpIHtcclxuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICBlbGVtLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xyXG4gIHJldHVybiBlbGVtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3NUeXBlKCkge1xyXG4gIGNvbnN0IG5hdlBsYXRmb3JtID0gbmF2aWdhdG9yLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCk7XHJcbiAgY29uc3Qgb3NUeXBlID0gbmF2UGxhdGZvcm0uaW5kZXhPZignd2luJykgIT09IC0xXHJcbiAgICA/ICdXaW5kb3dzJ1xyXG4gICAgOiBuYXZQbGF0Zm9ybS5pbmRleE9mKCdtYWMnKSAhPT0gLTFcclxuICAgICAgPyAnTWFjJ1xyXG4gICAgICA6IG51bGw7XHJcblxyXG4gIGlmICghb3NUeXBlKSB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gc3lzdGVtJyk7XHJcblxyXG4gIHJldHVybiBvc1R5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDU1NDTEFTUyA9IHtcclxuICBjb250ZW50V3JhcHBlcjogJ2NvbnRlbnQtd3JhcHBlcicsXHJcbiAgdGV4dEFyZWE6ICd0ZXh0YXJlYS11c2VyLWlucHV0JyxcclxuICBrZXlib2FyZDogJ2tleWJvYXJkJyxcclxuICBrZXlib2FyZFJvdzogJ2tleWJvYXJkLS1yb3cnLFxyXG4gIGtleWJvYXJkS2V5OiAna2V5Ym9hcmQtLWtleScsXHJcbiAgbm9MZXR0ZXJLZXk6ICduby1sZXR0ZXIta2V5JyxcclxuICBvc1R5cGVNc2c6ICdvcy10eXBlLW1zZycsXHJcbiAgbGFuZ1N3aXRjaFNob3J0Y3V0OiAnbGFuZy1zd2l0Y2gtc2hvcnRjdXQnLFxyXG4gIGFjdGl2ZTogJ2FjdGl2ZSdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxheW91dCA9IHtcclxuICBCYWNrcXVvdGU6IHsgZW46ICdgJywgcnU6ICfRkScsIGVuU2hpZnQ6ICd+JywgcnVTaGlmdDogJ9CBJyB9LFxyXG4gIERpZ2l0MTogeyBlbjogJzEnLCBydTogJzEnLCBlblNoaWZ0OiAnIScsIHJ1U2hpZnQ6ICchJyB9LFxyXG4gIERpZ2l0MjogeyBlbjogJzInLCBydTogJzInLCBlblNoaWZ0OiAnQCcsIHJ1U2hpZnQ6ICdcIicgfSxcclxuICBEaWdpdDM6IHsgZW46ICczJywgcnU6ICczJywgZW5TaGlmdDogJyMnLCBydVNoaWZ0OiAn4oSWJyB9LFxyXG4gIERpZ2l0NDogeyBlbjogJzQnLCBydTogJzQnLCBlblNoaWZ0OiAnJCcsIHJ1U2hpZnQ6ICc7JyB9LFxyXG4gIERpZ2l0NTogeyBlbjogJzUnLCBydTogJzUnLCBlblNoaWZ0OiAnJScsIHJ1U2hpZnQ6ICclJyB9LFxyXG4gIERpZ2l0NjogeyBlbjogJzYnLCBydTogJzYnLCBlblNoaWZ0OiAnXicsIHJ1U2hpZnQ6ICc6JyB9LFxyXG4gIERpZ2l0NzogeyBlbjogJzcnLCBydTogJzcnLCBlblNoaWZ0OiAnJicsIHJ1U2hpZnQ6ICc/JyB9LFxyXG4gIERpZ2l0ODogeyBlbjogJzgnLCBydTogJzgnLCBlblNoaWZ0OiAnKicsIHJ1U2hpZnQ6ICcqJyB9LFxyXG4gIERpZ2l0OTogeyBlbjogJzknLCBydTogJzknLCBlblNoaWZ0OiAnKCcsIHJ1U2hpZnQ6ICcoJyB9LFxyXG4gIERpZ2l0MDogeyBlbjogJzAnLCBydTogJzAnLCBlblNoaWZ0OiAnKScsIHJ1U2hpZnQ6ICcpJyB9LFxyXG4gIE1pbnVzOiB7IGVuOiAnLScsIHJ1OiAnLScsIGVuU2hpZnQ6ICdfJywgcnVTaGlmdDogJ18nIH0sXHJcbiAgRXF1YWw6IHsgZW46ICc9JywgcnU6ICc9JywgZW5TaGlmdDogJysnLCBydVNoaWZ0OiAnKycgfSxcclxuICBCYWNrc3BhY2U6IHsgZW46ICdCYWNrc3BhY2UnLCBydTogJ0JhY2tzcGFjZScsIGVuU2hpZnQ6ICdCYWNrc3BhY2UnLCBydVNoaWZ0OiAnQmFja3NwYWNlJyB9LFxyXG4gIFRhYjogeyBlbjogJ1RhYicsIHJ1OiAnVGFiJywgZW5TaGlmdDogJ1RhYicsIHJ1U2hpZnQ6ICdUYWInIH0sXHJcbiAgS2V5UTogeyBlbjogJ3EnLCBydTogJ9C5JywgZW5TaGlmdDogJ1EnLCBydVNoaWZ0OiAn0JknIH0sXHJcbiAgS2V5VzogeyBlbjogJ3cnLCBydTogJ9GGJywgZW5TaGlmdDogJ1cnLCBydVNoaWZ0OiAn0KYnIH0sXHJcbiAgS2V5RTogeyBlbjogJ2UnLCBydTogJ9GDJywgZW5TaGlmdDogJ0UnLCBydVNoaWZ0OiAn0KMnIH0sXHJcbiAgS2V5UjogeyBlbjogJ3InLCBydTogJ9C6JywgZW5TaGlmdDogJ1InLCBydVNoaWZ0OiAn0JonIH0sXHJcbiAgS2V5VDogeyBlbjogJ3QnLCBydTogJ9C1JywgZW5TaGlmdDogJ1QnLCBydVNoaWZ0OiAn0JUnIH0sXHJcbiAgS2V5WTogeyBlbjogJ3knLCBydTogJ9C9JywgZW5TaGlmdDogJ1knLCBydVNoaWZ0OiAn0J0nIH0sXHJcbiAgS2V5VTogeyBlbjogJ3UnLCBydTogJ9CzJywgZW5TaGlmdDogJ1UnLCBydVNoaWZ0OiAn0JMnIH0sXHJcbiAgS2V5STogeyBlbjogJ2knLCBydTogJ9GIJywgZW5TaGlmdDogJ0knLCBydVNoaWZ0OiAn0KgnIH0sXHJcbiAgS2V5TzogeyBlbjogJ28nLCBydTogJ9GJJywgZW5TaGlmdDogJ08nLCBydVNoaWZ0OiAn0KknIH0sXHJcbiAgS2V5UDogeyBlbjogJ3AnLCBydTogJ9C3JywgZW5TaGlmdDogJ1AnLCBydVNoaWZ0OiAn0JcnIH0sXHJcbiAgQnJhY2tldExlZnQ6IHsgZW46ICdbJywgcnU6ICfRhScsIGVuU2hpZnQ6ICd7JywgcnVTaGlmdDogJ9ClJyB9LFxyXG4gIEJyYWNrZXRSaWdodDogeyBlbjogJ10nLCBydTogJ9GKJywgZW5TaGlmdDogJ30nLCBydVNoaWZ0OiAn0KonIH0sXHJcbiAgQmFja3NsYXNoOiB7IGVuOiAnXFxcXCcsIHJ1OiAnXFxcXCcsIGVuU2hpZnQ6ICd8JywgcnVTaGlmdDogJy8nIH0sXHJcbiAgRGVsZXRlOiB7IGVuOiAnRGVsJywgcnU6ICdEZWwnLCBlblNoaWZ0OiAnRGVsJywgcnVTaGlmdDogJ0RlbCcgfSxcclxuICBDYXBzTG9jazogeyBlbjogJ0NhcHMnLCBydTogJ0NhcHMnLCBlblNoaWZ0OiAnQ2FwcycsIHJ1U2hpZnQ6ICdDYXBzJyB9LFxyXG4gIEtleUE6IHsgZW46ICdhJywgcnU6ICfRhCcsIGVuU2hpZnQ6ICdBJywgcnVTaGlmdDogJ9CkJyB9LFxyXG4gIEtleVM6IHsgZW46ICdzJywgcnU6ICfRiycsIGVuU2hpZnQ6ICdTJywgcnVTaGlmdDogJ9CrJyB9LFxyXG4gIEtleUQ6IHsgZW46ICdkJywgcnU6ICfQsicsIGVuU2hpZnQ6ICdEJywgcnVTaGlmdDogJ9CSJyB9LFxyXG4gIEtleUY6IHsgZW46ICdmJywgcnU6ICfQsCcsIGVuU2hpZnQ6ICdGJywgcnVTaGlmdDogJ9CQJyB9LFxyXG4gIEtleUc6IHsgZW46ICdnJywgcnU6ICfQvycsIGVuU2hpZnQ6ICdHJywgcnVTaGlmdDogJ9CfJyB9LFxyXG4gIEtleUg6IHsgZW46ICdoJywgcnU6ICfRgCcsIGVuU2hpZnQ6ICdIJywgcnVTaGlmdDogJ9CgJyB9LFxyXG4gIEtleUo6IHsgZW46ICdqJywgcnU6ICfQvicsIGVuU2hpZnQ6ICdKJywgcnVTaGlmdDogJ9CeJyB9LFxyXG4gIEtleUs6IHsgZW46ICdrJywgcnU6ICfQuycsIGVuU2hpZnQ6ICdLJywgcnVTaGlmdDogJ9CbJyB9LFxyXG4gIEtleUw6IHsgZW46ICdsJywgcnU6ICfQtCcsIGVuU2hpZnQ6ICdMJywgcnVTaGlmdDogJ9CUJyB9LFxyXG4gIFNlbWljb2xvbjogeyBlbjogJzsnLCBydTogJ9C2JywgZW5TaGlmdDogJzonLCBydVNoaWZ0OiAn0JYnIH0sXHJcbiAgUXVvdGU6IHsgZW46IFwiJ1wiLCBydTogJ9GNJywgZW5TaGlmdDogXCJcXFwiXCIsIHJ1U2hpZnQ6ICfQrScgfSxcclxuICBFbnRlcjogeyBlbjogJ0VudGVyJywgcnU6ICdFbnRlcicsIGVuU2hpZnQ6ICdFbnRlcicsIHJ1U2hpZnQ6ICdFbnRlcicgfSxcclxuICBTaGlmdExlZnQ6IHsgZW46ICdTaGlmdCcsIHJ1OiAnU2hpZnQnLCBlblNoaWZ0OiAnU2hpZnQnLCBydVNoaWZ0OiAnU2hpZnQnIH0sXHJcbiAgS2V5WjogeyBlbjogJ3onLCBydTogJ9GPJywgZW5TaGlmdDogJ1onLCBydVNoaWZ0OiAn0K8nIH0sXHJcbiAgS2V5WDogeyBlbjogJ3gnLCBydTogJ9GHJywgZW5TaGlmdDogJ1gnLCBydVNoaWZ0OiAn0KcnIH0sXHJcbiAgS2V5QzogeyBlbjogJ2MnLCBydTogJ9GBJywgZW5TaGlmdDogJ0MnLCBydVNoaWZ0OiAn0KEnIH0sXHJcbiAgS2V5VjogeyBlbjogJ3YnLCBydTogJ9C8JywgZW5TaGlmdDogJ1YnLCBydVNoaWZ0OiAn0JwnIH0sXHJcbiAgS2V5QjogeyBlbjogJ2InLCBydTogJ9C4JywgZW5TaGlmdDogJ0InLCBydVNoaWZ0OiAn0JgnIH0sXHJcbiAgS2V5TjogeyBlbjogJ24nLCBydTogJ9GCJywgZW5TaGlmdDogJ04nLCBydVNoaWZ0OiAn0KInIH0sXHJcbiAgS2V5TTogeyBlbjogJ20nLCBydTogJ9GMJywgZW5TaGlmdDogJ00nLCBydVNoaWZ0OiAn0KwnIH0sXHJcbiAgQ29tbWE6IHsgZW46ICcsJywgcnU6ICfQsScsIGVuU2hpZnQ6ICc8JywgcnVTaGlmdDogJ9CRJyB9LFxyXG4gIFBlcmlvZDogeyBlbjogJy4nLCBydTogJ9GOJywgZW5TaGlmdDogJz4nLCBydVNoaWZ0OiAn0K4nIH0sXHJcbiAgU2xhc2g6IHsgZW46ICcvJywgcnU6ICcuJywgZW5TaGlmdDogJz8nLCBydVNoaWZ0OiAnLCcgfSxcclxuICBBcnJvd1VwOiB7IGVuOiAn4oaRJywgcnU6ICfihpEnLCBlblNoaWZ0OiAn4oaRJywgcnVTaGlmdDogJ+KGkScgfSxcclxuICBTaGlmdFJpZ2h0OiB7IGVuOiAnU2hpZnQnLCBydTogJ1NoaWZ0JywgZW5TaGlmdDogJ1NoaWZ0JywgcnVTaGlmdDogJ1NoaWZ0JyB9LFxyXG4gIENvbnRyb2xMZWZ0OiB7IGVuOiAnQ3RybCcsIHJ1OiAnQ3RybCcsIGVuU2hpZnQ6ICdDdHJsJywgcnVTaGlmdDogJ0N0cmwnIH0sXHJcbiAgTWV0YUxlZnQ6IHsgZW46ICdXaW4nLCBydTogJ1dpbicsIGVuU2hpZnQ6ICdXaW4nLCBydVNoaWZ0OiAnV2luJyB9LFxyXG4gIEFsdExlZnQ6IHsgZW46ICdBbHQnLCBydTogJ0FsdCcsIGVuU2hpZnQ6ICdBbHQnLCBydVNoaWZ0OiAnQWx0JyB9LFxyXG4gIFNwYWNlOiB7IGVuOiAnJywgcnU6ICcnLCBlblNoaWZ0OiAnJywgcnVTaGlmdDogJycgfSxcclxuICBBbHRSaWdodDogeyBlbjogJ0FsdCcsIHJ1OiAnQWx0JywgZW5TaGlmdDogJ0FsdCcsIHJ1U2hpZnQ6ICdBbHQnIH0sXHJcbiAgQXJyb3dMZWZ0OiB7IGVuOiAn4oaQJywgcnU6ICfihpAnLCBlblNoaWZ0OiAn4oaQJywgcnVTaGlmdDogJ+KGkCcgfSxcclxuICBBcnJvd0Rvd246IHsgZW46ICfihpMnLCBydTogJ+KGkycsIGVuU2hpZnQ6ICfihpMnLCBydVNoaWZ0OiAn4oaTJyB9LFxyXG4gIEFycm93UmlnaHQ6IHsgZW46ICfihpInLCBydTogJ+KGkicsIGVuU2hpZnQ6ICfihpInLCBydVNoaWZ0OiAn4oaSJyB9LFxyXG4gIENvbnRyb2xSaWdodDogeyBlbjogJ0N0cmwnLCBydTogJ0N0cmwnLCBlblNoaWZ0OiAnQ3RybCcsIHJ1U2hpZnQ6ICdDdHJsJyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzcGVjaWFsS2V5cyA9IFsnQmFja3NwYWNlJywgJ1RhYicsICdEZWxldGUnLCAnQ2Fwc0xvY2snLCAnRW50ZXInLCAnU2hpZnRMZWZ0JywgJ0Fycm93VXAnLCAnU2hpZnRSaWdodCcsICdDb250cm9sTGVmdCcsICdNZXRhTGVmdCcsICdBbHRMZWZ0JywgJ1NwYWNlJywgJ0FsdFJpZ2h0JywgJ0Fycm93TGVmdCcsICdBcnJvd0Rvd24nLCAnQXJyb3dSaWdodCcsICdDb250cm9sUmlnaHQnXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9pbmRleC5odG1sJztcclxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG5pbXBvcnQgJy4vYXBwJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=