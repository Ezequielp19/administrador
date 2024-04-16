(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/categoria/categoria.component.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/categoria/categoria.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentCategoriaCategoriaComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">Categoria</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- barra de navegacion -->\r\n<ion-toolbar color=\"tertiary\">\r\n  <ion-title style=\"text-align: center;\">\r\n    <ion-icon name=\"home\" (click)=\"navigateToPage1()\" class=\"icon\"></ion-icon>\r\n    <ion-icon name=\"people-circle-outline\" (click)=\"navigateToPage4()\" class=\"icon\"></ion-icon>\r\n    <ion-icon name=\"pricetag\" (click)=\"navigateToPage3()\" class=\"icon\"></ion-icon>\r\n    <ion-icon name=\"ticket-outline\" (click)=\"navigateToPage5()\" class=\"icon\"></ion-icon>\r\n    <ion-icon name=\"people-outline\" (click)=\"navigateToPage7()\" class=\"icon\"></ion-icon>\r\n    <ion-icon name=\"dice-outline\" (click)=\"navigateToPage6()\" class=\"icon\"></ion-icon>\r\n  </ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n\r\n<div class=\"ion-text-center\">\r\n    <h2>Lista de Categorias</h2>\r\n    <!-- Enlace a Bootstrap desde un CDN -->\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Nombre</th>\r\n          <th scope=\"col\">Imagen</th>\r\n          \r\n          <th scope=\"col\"><button  class=\"btn btn-primary\"  (click)=\"navigateToPage8()\">Agregar</button></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let cat of listCategorias; let i = index\">\r\n          <th scope=\"row\">{{ i + 1 }}</th>\r\n          <td>{{ cat.nombre }}</td>\r\n          <td>{{ cat.imagen }}</td>\r\n          \r\n          <td>\r\n            <button class=\"btn btn-warning\"  [routerLink]=\"['/editar-categoria', cat._id]\">Editar</button>\r\n            <button class=\"btn btn-danger\" (click)=\"eliminarCategoria(cat._id)\">Eliminar</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/categorias/categorias.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/categorias/categorias.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentCategoriasCategoriasComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">Categorias</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <h1 class=\"ion-text-center\">{{ titulo | uppercase}}</h1>\r\n\r\n  <form [formGroup]=\"categoriaForm\" (ngSubmit)=\"agregarCategoria()\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Nombre</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"nombre\" required></ion-input>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Imagen</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"imagen\" required></ion-input>\r\n    </ion-item>\r\n\r\n\r\n    <ion-button expand=\"full\" type=\"submit\" color=\"primary\" onclick=\"enviar()\">Enviar</ion-button>\r\n  </form>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/comment/comment.component.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/comment/comment.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentCommentCommentComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">Comentarios</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-toolbar color=\"tertiary\">\r\n  <ion-title style=\"text-align: center;\" >\r\n    <ion-icon name=\"home\" (click)=\"navigateToPage1()\" class=\"icon\"></ion-icon>\r\n    <ion-icon name=\"people-circle-outline\" (click)=\"navigateToPage4()\" class=\"icon\"></ion-icon>\r\n    <ion-icon name=\"list\" (click)=\"navigateToPage2()\" class=\"icon\"></ion-icon>\r\n    <ion-icon name=\"business-outline\" (click)=\"navigateToPage5()\" class=\"icon\"></ion-icon>\r\n  </ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <div class=\"ion-text-center\">\r\n    <h2>Lista de comentarios</h2>\r\n    \r\n \r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">ID</th>\r\n          <th scope=\"col\">Comentario</th>\r\n          <th scope=\"col\">Puntuación</th>\r\n          <th scope=\"col\"><button  class=\"btn btn-primary\"  (click)=\"navigateToPage6()\">Agregar</button></th> \r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let com of listComentario; let i = index\">\r\n          <th scope=\"row\">{{ i + 1 }}</th>\r\n          <td>{{ com.comentario }}</td>\r\n          <td>{{ com.puntuacion }}</td>\r\n          <td>\r\n            <button class=\"btn btn-warning\"  [routerLink]=\"['/editar-comentario', com._id]\">Editar</button>\r\n            <button class=\"btn btn-danger\" (click)=\"eliminarComentario(com._id)\">Eliminar</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/comments/comments.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/comments/comments.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentCommentsCommentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">Comentario</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <h1 class=\"ion-text-center\">{{ titulo | uppercase}}</h1>\r\n\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"comentForm\" (ngSubmit)=\"agregarComentario()\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Nombre</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"nombre\"  required></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Comentario</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"comentario\" required></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Puntuacion</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"puntuacion\" required></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-button expand=\"full\" type=\"submit\" color=\"primary\">Enviar</ion-button>\r\n  </form>\r\n</ion-content>\r\n  \r\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/event/event.component.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/event/event.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentEventEventComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">Evento</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- barra de navegacion -->\r\n<ion-toolbar color=\"tertiary\">\r\n  <ion-title style=\"text-align: center;\">\r\n      <ion-icon name=\"home\" (click)=\"navigateToPage1()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"people-circle-outline\" (click)=\"navigateToPage4()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"pricetag\" (click)=\"navigateToPage3()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"people-outline\" (click)=\"navigateToPage5()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"copy-outline\" (click)=\"navigateToPage7()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"dice-outline\" (click)=\"navigateToPage6()\" class=\"icon\"></ion-icon>\r\n  </ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <div class=\"ion-text-center\">\r\n    <h2>Lista de Evento</h2>\r\n    <!-- Enlace a Bootstrap desde un CDN -->\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">ID</th>\r\n          <th scope=\"col\">Nombre</th>\r\n          <th scope=\"col\">Foto</th>\r\n          <th scope=\"col\">Fecha</th>\r\n          <th scope=\"col\">Descripcion</th>\r\n          <th scope=\"col\"><button  class=\"btn btn-primary\"  (click)=\"navigateToPage6()\">Agregar</button></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let even of listEvent; let i = index\">\r\n          <th scope=\"row\">{{ i + 1 }}</th>\r\n          <td>{{ even.nombre }}</td>\r\n          <td>{{ even.foto }}</td>\r\n          <td>{{ even.fecha }}</td>\r\n          <td>{{ even.descripcion }}</td>\r\n          <td>\r\n            <button class=\"btn btn-warning\"  [routerLink]=\"['/editar-evento', even._id]\">Editar</button>\r\n            <button class=\"btn btn-danger\" (click)=\"eliminarEvento(even._id)\">Eliminar</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/events/events.component.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/events/events.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentEventsEventsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">Evento</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <h1 class=\"ion-text-center\">{{ titulo | uppercase}}</h1>\r\n\r\n  <form [formGroup]=\"eventForm\"  (ngSubmit)=\"agregarEvento()\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Foto</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"foto\"required></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Nombre</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"nombre\"required></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Fecha</ion-label>\r\n      <ion-input type=\"date\" formControlName=\"fecha\"required></ion-input>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Descripcion</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"descripcion\" required></ion-input>\r\n    </ion-item>\r\n       \r\n    <ion-button expand=\"full\" type=\"submit\" color=\"primary\">Enviar</ion-button>\r\n  </form>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"ion-text-center\">\r\n      Bienvenido\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-card class=\"welcome-card\">\r\n    <ion-card-header>\r\n      <ion-card-title class=\"ion-text-center\">\r\n        Descripción\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"ion-text-center\">\r\n      <strong> Desde el home puede acceder a cada una de sus pantallas solamente pulsando sobre ellas  </strong> \r\n      <h4>Manual de Usuario:</h4>\r\n      <a href=\"./manual de usuario.pdf\" download=\"manual de usuario.pdf\">Descargar PDF</a>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-card (click)=\"navigateToPage1()\" class=\"centro-vertical\">\r\n          \r\n          <ion-icon name=\"copy-outline\" class=\"icono-grande\"></ion-icon>            <ion-card-header>\r\n            <ion-card-title>Categoria</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\">\r\n        <ion-card (click)=\"navigateToPage3()\" class=\"centro-vertical\">\r\n          <ion-icon name=\"pricetag\" class=\"icono-grande\"></ion-icon>\r\n          <ion-card-header>\r\n            <ion-card-title>Productos</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\">\r\n        <ion-card (click)=\"navigateToPage5()\" class=\"centro-vertical\">\r\n          <ion-icon name=\"ticket-outline\" class=\"icono-grande\" ></ion-icon>\r\n          <ion-card-header>\r\n            <ion-card-title>Eventos</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\">\r\n        <ion-card (click)=\"navigateToPage4()\" class=\"centro-vertical\">\r\n          <ion-icon name=\"bag-add-outline\" class=\"icono-grande\"></ion-icon>\r\n          <ion-card-header>\r\n            <ion-card-title>Nuevos Productos</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\">\r\n        <ion-card (click)=\"navigateToPage6()\" class=\"centro-vertical\">\r\n          <ion-icon name=\"dice-outline\" class=\"icono-grande\"></ion-icon>\r\n          <ion-card-header>\r\n            <ion-card-title>Sorteo</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\">\r\n        <ion-card (click)=\"navigateToPage7()\" class=\"centro-vertical\">\r\n          <ion-icon name=\"people-outline\" class=\"icono-grande\"></ion-icon>\r\n          <ion-card-header>\r\n            <ion-card-title>Quienes Somos</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\">\r\n        <ion-card (click)=\"navigateToPage8()\" class=\"centro-vertical\">\r\n          <ion-icon name=\"exit\" class=\"icono-grande\"></ion-icon>\r\n            <ion-card-header>\r\n            <ion-card-title>Cerrar Sesion</ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/lotery/lotery.component.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/lotery/lotery.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentLoteryLoteryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"goBack()\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title style=\"text-align: center;\">Sorteos</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-toolbar color=\"tertiary\">\r\n    <ion-title style=\"text-align: center;\" >\r\n      <ion-icon name=\"home\" (click)=\"navigateToPage1()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"people-circle-outline\" (click)=\"navigateToPage4()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"pricetag\" (click)=\"navigateToPage3()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"people-outline\" (click)=\"navigateToPage5()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"copy-outline\" (click)=\"navigateToPage7()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"ticket-outline\" (click)=\"navigateToPage6()\" class=\"icon\"></ion-icon>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  \r\n  <ion-content class=\"ion-padding\">\r\n  \r\n    <div class=\"ion-text-center\">\r\n      <h2>Lista de sorteos</h2>\r\n      \r\n   \r\n      <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">ID</th>\r\n            <th scope=\"col\">Foto</th>\r\n            <th scope=\"col\">Titulo</th>\r\n            <th scope=\"col\">Fecha</th>\r\n            <th scope=\"col\">Nombre</th>\r\n            <th scope=\"col\">Descripcion</th>\r\n            <th scope=\"col\"><button  class=\"btn btn-primary\"  (click)=\"navigateToPage6()\">Agregar</button></th> \r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let sor of listSorteo; let i = index\">\r\n            <th scope=\"row\">{{ i + 1 }}</th>\r\n            <td>{{ sor.foto }}</td>\r\n            <td>{{ sor.titulo }}</td>\r\n            <td>{{ sor.nombre }}</td>\r\n            <td>{{ sor.descripcion }}</td>\r\n            <td>\r\n              <button class=\"btn btn-warning\"  [routerLink]=\"['/editar-sorteo', sor._id]\">Editar</button>\r\n              <button class=\"btn btn-danger\" (click)=\"eliminarSorteo(sor._id)\">Eliminar</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/loteryes/loteryes.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/loteryes/loteryes.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentLoteryesLoteryesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"goBack()\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title style=\"text-align: center;\">Sorteo</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  \r\n  <ion-content class=\"ion-padding\">\r\n    <h1 class=\"ion-text-center\">{{ titulo | uppercase}}</h1>\r\n  \r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\r\n  <ion-content class=\"ion-padding\">\r\n    <form [formGroup]=\"loteryForm\" (ngSubmit)=\"agregarSorteo()\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Foto</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"foto\" required></ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item>\r\n        <ion-label position=\"floating\">Titulo</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"titulo\" required></ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nombre</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"nombre\" required></ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item>\r\n        <ion-label position=\"floating\">Fecha</ion-label>\r\n        <ion-input type=\"date\" formControlName=\"fecha\" required></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Descripcion</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"descripcion\" required></ion-input>\r\n      </ion-item>\r\n  \r\n\r\n      <ion-button expand=\"full\" type=\"submit\" color=\"primary\">Enviar</ion-button>\r\n    </form>\r\n  </ion-content>\r\n    \r\n  </ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/product/product.component.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/product/product.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">Producto</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- barra de navegacion -->\r\n<ion-toolbar color=\"tertiary\">\r\n  <ion-title style=\"text-align: center;\">\r\n      <ion-icon name=\"home\" (click)=\"navigateToPage1()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"people-circle-outline\" (click)=\"navigateToPage4()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"dice-outline\" (click)=\"navigateToPage3()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"people-outline\" (click)=\"navigateToPage5()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"copy-outline\" (click)=\"navigateToPage7()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"ticket-outline\" (click)=\"navigateToPage6()\" class=\"icon\"></ion-icon>\r\n  </ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n\r\n<div class=\"ion-text-center\">\r\n    <h2>Lista de Productos</h2>\r\n    <!-- Enlace a Bootstrap desde un CDN -->\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Nombre</th>\r\n          <th scope=\"col\">Precio</th>\r\n          <th scope=\"col\">Descuento</th>\r\n          <th scope=\"col\">PrecioFinal</th>\r\n          <th scope=\"col\"><button  class=\"btn btn-primary\"  (click)=\"navigateToPage6()\">Agregar</button></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let prod of listProductos; let i = index\">\r\n          <th scope=\"row\">{{ i + 1 }}</th>\r\n          <td>{{ prod.nombre }}</td>\r\n          <td>{{ prod.precio }}</td>\r\n          <td>{{ prod.descuento }}</td>\r\n          <td>{{ prod.precioFinal }}</td>\r\n          <td>\r\n            <button class=\"btn btn-warning\"  [routerLink]=\"['/editar-product', prod._id]\">Editar</button>\r\n            <button class=\"btn btn-danger\" (click)=\"eliminarProducto(prod._id)\">Eliminar</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/productoNuevo/productoNuevo.component.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/productoNuevo/productoNuevo.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentProductoNuevoProductoNuevoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">Nuevos Productos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- barra de navegacion -->\r\n<ion-toolbar color=\"tertiary\">\r\n  <ion-title style=\"text-align: center;\">\r\n      <ion-icon name=\"home\" (click)=\"navigateToPage1()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"people-circle-outline\" (click)=\"navigateToPage4()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"dice-outline\" (click)=\"navigateToPage3()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"people-outline\" (click)=\"navigateToPage5()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"copy-outline\" (click)=\"navigateToPage7()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"ticket-outline\" (click)=\"navigateToPage6()\" class=\"icon\"></ion-icon>\r\n  </ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n\r\n<div class=\"ion-text-center\">\r\n    <h2>Lista de Productos Nuevos</h2>\r\n    <!-- Enlace a Bootstrap desde un CDN -->\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Nombre</th>\r\n          <th scope=\"col\">Precio</th>\r\n          <th scope=\"col\">Descuento</th>\r\n          <th scope=\"col\">PrecioFinal</th>\r\n          <th scope=\"col\"><button  class=\"btn btn-primary\"  (click)=\"navigateToPage6()\">Agregar</button></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let prodN of listProductosNew; let i = index\">\r\n          <th scope=\"row\">{{ i + 1 }}</th>\r\n          <td>{{ prodN.nombre }}</td>\r\n          <td>{{ prodN.precio }}</td>\r\n          <td>{{ prodN.descuento }}</td>\r\n          <td>{{ prodN.precioFinal }}</td>\r\n          <td>\r\n            <button class=\"btn btn-warning\"  [routerLink]=\"['/editar-productoNuevo', prodN._id]\">Editar</button>\r\n            <button class=\"btn btn-danger\" (click)=\"eliminarProductoNuevo(prodN._id)\">Eliminar</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/productosNuevos/productosNuevos.component.html":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/productosNuevos/productosNuevos.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentProductosNuevosProductosNuevosComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"goBack()\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title style=\"text-align: center;\">Productos Nuevos</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content class=\"ion-padding\">\r\n    <h1 class=\"ion-text-center\">{{ titulo | uppercase}}</h1>\r\n  \r\n    <form [formGroup]=\"nuevosProductosForm\" (ngSubmit)=\"agregarProductoNuevo()\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nombre</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"nombre\" required></ion-input>\r\n      </ion-item>\r\n      \r\n      <ion-item>\r\n        <ion-label position=\"floating\">Imagen</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"imagen\" required></ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item>\r\n        <ion-label position=\"floating\">Precio</ion-label>\r\n        <ion-input type=\"number\" formControlName=\"precio\" required></ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item>\r\n        <ion-label position=\"floating\">Descuento</ion-label>\r\n        <ion-input type=\"number\" formControlName=\"descuento\"></ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item>\r\n        <ion-label position=\"floating\">Precio Final</ion-label>\r\n        <ion-input type=\"number\" formControlName=\"precioFinal\" required></ion-input>\r\n      </ion-item>\r\n  \r\n      \r\n  \r\n      <ion-button expand=\"full\" type=\"submit\" color=\"primary\">Enviar</ion-button>\r\n    </form>\r\n  </ion-content>\r\n  ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/products/products.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/products/products.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">Productos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <h1 class=\"ion-text-center\">{{ titulo | uppercase}}</h1>\r\n\r\n  <form [formGroup]=\"productoForm\" (ngSubmit)=\"agregarProducto()\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Nombre</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"nombre\" required></ion-input>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Imagen</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"imagen\" required></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Precio</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"precio\" required></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Descuento</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"descuento\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Precio Final</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"precioFinal\" required></ion-input>\r\n    </ion-item>\r\n\r\n    \r\n\r\n    <ion-button expand=\"full\" type=\"submit\" color=\"primary\">Enviar</ion-button>\r\n  </form>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/qSomo/quienesSomo.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/qSomo/quienesSomo.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentQSomoQuienesSomoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"goBack()\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title style=\"text-align: center;\">Quienes Somos</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <!-- barra de navegacion -->\r\n  <ion-toolbar color=\"tertiary\">\r\n    <ion-title style=\"text-align: center;\">\r\n      <ion-icon name=\"home\" (click)=\"navigateToPage1()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"people-circle-outline\" (click)=\"navigateToPage4()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"pricetag\" (click)=\"navigateToPage3()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"ticket-outline\" (click)=\"navigateToPage5()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"copy-outline\" (click)=\"navigateToPage7()\" class=\"icon\"></ion-icon>\r\n      <ion-icon name=\"dice-outline\" (click)=\"navigateToPage6()\" class=\"icon\"></ion-icon>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  \r\n  <ion-content class=\"ion-padding\">\r\n  \r\n  \r\n  <div class=\"ion-text-center\">\r\n      <h2>Quienes Somos</h2>\r\n      <!-- Enlace a Bootstrap desde un CDN -->\r\n      <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">Foto</th>\r\n            <th scope=\"col\">Descripción</th>\r\n            <th scope=\"col\"><button  class=\"btn btn-primary\"  (click)=\"navigateToPage6()\">Agregar</button></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let som of listSomos; let i = index\">\r\n            <th scope=\"row\">{{ i + 1 }}</th>\r\n            <td>{{ som.foto }}</td>\r\n            <td>{{ som.descripcion }}</td>\r\n            <td>\r\n              <button class=\"btn btn-warning\"  [routerLink]=\"['/editar-somos', som._id]\">Editar</button>\r\n              <button class=\"btn btn-danger\" (click)=\"eliminarSomos(som._id)\">Eliminar</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </ion-content>\r\n  ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/component/qSomos/quienesSomos.component.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/qSomos/quienesSomos.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentQSomosQuienesSomosComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"goBack()\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title style=\"text-align: center;\">Quienes Somos</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content class=\"ion-padding\">\r\n    <h1 class=\"ion-text-center\">{{ titulo | uppercase}}</h1>\r\n  \r\n    <form [formGroup]=\"somosForm\" (ngSubmit)=\"agregarSomos()\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Foto</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"foto\" required></ion-input>\r\n      </ion-item>\r\n      \r\n      <ion-item>\r\n        <ion-label position=\"floating\">Descripcion</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"descripcion\" required></ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-button expand=\"full\" type=\"submit\" color=\"primary\">Enviar</ion-button>\r\n    </form>\r\n  </ion-content>\r\n  ";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _component_home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./component/home/home.page */
      "./src/app/component/home/home.page.ts");
      /* harmony import */


      var _component_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./component/product/product.component */
      "./src/app/component/product/product.component.ts");
      /* harmony import */


      var _component_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./component/products/products.component */
      "./src/app/component/products/products.component.ts");
      /* harmony import */


      var _component_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./component/categorias/categorias.component */
      "./src/app/component/categorias/categorias.component.ts");
      /* harmony import */


      var _component_categoria_categoria_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./component/categoria/categoria.component */
      "./src/app/component/categoria/categoria.component.ts");
      /* harmony import */


      var _component_lotery_lotery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./component/lotery/lotery.component */
      "./src/app/component/lotery/lotery.component.ts");
      /* harmony import */


      var _component_loteryes_loteryes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./component/loteryes/loteryes.component */
      "./src/app/component/loteryes/loteryes.component.ts");
      /* harmony import */


      var _component_comment_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./component/comment/comment.component */
      "./src/app/component/comment/comment.component.ts");
      /* harmony import */


      var _component_comments_comments_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./component/comments/comments.component */
      "./src/app/component/comments/comments.component.ts");
      /* harmony import */


      var _component_event_event_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./component/event/event.component */
      "./src/app/component/event/event.component.ts");
      /* harmony import */


      var _component_events_events_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./component/events/events.component */
      "./src/app/component/events/events.component.ts");
      /* harmony import */


      var _component_qSomo_quienesSomo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./component/qSomo/quienesSomo.component */
      "./src/app/component/qSomo/quienesSomo.component.ts");
      /* harmony import */


      var _component_qSomos_quienesSomos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./component/qSomos/quienesSomos.component */
      "./src/app/component/qSomos/quienesSomos.component.ts");
      /* harmony import */


      var _component_productosNuevos_productosNuevos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./component/productosNuevos/productosNuevos.component */
      "./src/app/component/productosNuevos/productosNuevos.component.ts");
      /* harmony import */


      var _component_productoNuevo_productoNuevo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./component/productoNuevo/productoNuevo.component */
      "./src/app/component/productoNuevo/productoNuevo.component.ts"); // components
      // import { LoginComponent } from './component/login/login.component';


      var routes = [{
        path: 'product',
        component: _component_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"]
      }, {
        path: 'products',
        component: _component_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"]
      }, {
        path: 'editar-product/:id',
        component: _component_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"]
      }, {
        path: 'categorias',
        component: _component_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_6__["CategoriasComponent"]
      }, {
        path: 'categoria',
        component: _component_categoria_categoria_component__WEBPACK_IMPORTED_MODULE_7__["CategoriaComponent"]
      }, {
        path: 'editar-categoria/:id',
        component: _component_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_6__["CategoriasComponent"]
      }, {
        path: 'comment',
        component: _component_comment_comment_component__WEBPACK_IMPORTED_MODULE_10__["ComentarioComponent"]
      }, {
        path: 'comments',
        component: _component_comments_comments_component__WEBPACK_IMPORTED_MODULE_11__["CommentsComponent"]
      }, {
        path: 'editar-comentario/:id',
        component: _component_comments_comments_component__WEBPACK_IMPORTED_MODULE_11__["CommentsComponent"]
      }, {
        path: 'lotery',
        component: _component_lotery_lotery_component__WEBPACK_IMPORTED_MODULE_8__["SorteoComponent"]
      }, {
        path: 'loteryes',
        component: _component_loteryes_loteryes_component__WEBPACK_IMPORTED_MODULE_9__["SorteosComponent"]
      }, {
        path: 'editar-sorteo/:id',
        component: _component_loteryes_loteryes_component__WEBPACK_IMPORTED_MODULE_9__["SorteosComponent"]
      }, {
        path: 'event',
        component: _component_event_event_component__WEBPACK_IMPORTED_MODULE_12__["EventComponent"]
      }, {
        path: 'events',
        component: _component_events_events_component__WEBPACK_IMPORTED_MODULE_13__["EventsComponent"]
      }, {
        path: 'editar-events/:id',
        component: _component_events_events_component__WEBPACK_IMPORTED_MODULE_13__["EventsComponent"]
      }, {
        path: 'qSomo',
        component: _component_qSomo_quienesSomo_component__WEBPACK_IMPORTED_MODULE_14__["SomoComponent"]
      }, {
        path: 'qSomos',
        component: _component_qSomos_quienesSomos_component__WEBPACK_IMPORTED_MODULE_15__["SomosComponent"]
      }, {
        path: 'editar-somos/:id',
        component: _component_qSomos_quienesSomos_component__WEBPACK_IMPORTED_MODULE_15__["SomosComponent"]
      }, {
        path: 'home',
        component: _component_home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }, {
        path: 'productoNuevo',
        component: _component_productoNuevo_productoNuevo_component__WEBPACK_IMPORTED_MODULE_17__["ProductNuevoComponent"]
      }, {
        path: 'productosNuevo',
        component: _component_productosNuevos_productosNuevos_component__WEBPACK_IMPORTED_MODULE_16__["NuevosProductsComponent"]
      }, {
        path: 'editar-productoNuevo/:id',
        component: _component_productosNuevos_productosNuevos_component__WEBPACK_IMPORTED_MODULE_16__["NuevosProductsComponent"]
      }, // {path: 'login', component: LoginComponent},
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _component_product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./component/product/product.component */
      "./src/app/component/product/product.component.ts");
      /* harmony import */


      var _component_products_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./component/products/products.component */
      "./src/app/component/products/products.component.ts");
      /* harmony import */


      var _component_productosNuevos_productosNuevos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./component/productosNuevos/productosNuevos.component */
      "./src/app/component/productosNuevos/productosNuevos.component.ts");
      /* harmony import */


      var _component_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./component/categorias/categorias.component */
      "./src/app/component/categorias/categorias.component.ts");
      /* harmony import */


      var _component_categoria_categoria_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./component/categoria/categoria.component */
      "./src/app/component/categoria/categoria.component.ts");
      /* harmony import */


      var _component_comment_comment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./component/comment/comment.component */
      "./src/app/component/comment/comment.component.ts");
      /* harmony import */


      var _component_comments_comments_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./component/comments/comments.component */
      "./src/app/component/comments/comments.component.ts");
      /* harmony import */


      var _component_event_event_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./component/event/event.component */
      "./src/app/component/event/event.component.ts");
      /* harmony import */


      var _component_events_events_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./component/events/events.component */
      "./src/app/component/events/events.component.ts");
      /* harmony import */


      var _component_lotery_lotery_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./component/lotery/lotery.component */
      "./src/app/component/lotery/lotery.component.ts");
      /* harmony import */


      var _component_loteryes_loteryes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./component/loteryes/loteryes.component */
      "./src/app/component/loteryes/loteryes.component.ts");
      /* harmony import */


      var _component_qSomo_quienesSomo_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./component/qSomo/quienesSomo.component */
      "./src/app/component/qSomo/quienesSomo.component.ts");
      /* harmony import */


      var _component_qSomos_quienesSomos_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./component/qSomos/quienesSomos.component */
      "./src/app/component/qSomos/quienesSomos.component.ts");
      /* harmony import */


      var _component_home_home_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./component/home/home.page */
      "./src/app/component/home/home.page.ts");
      /* harmony import */


      var _component_productoNuevo_productoNuevo_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./component/productoNuevo/productoNuevo.component */
      "./src/app/component/productoNuevo/productoNuevo.component.ts");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _component_home_home_page__WEBPACK_IMPORTED_MODULE_24__["HomePage"], _component_product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"], _component_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"], _component_productosNuevos_productosNuevos_component__WEBPACK_IMPORTED_MODULE_13__["NuevosProductsComponent"], _component_productoNuevo_productoNuevo_component__WEBPACK_IMPORTED_MODULE_25__["ProductNuevoComponent"], _component_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_14__["CategoriasComponent"], _component_categoria_categoria_component__WEBPACK_IMPORTED_MODULE_15__["CategoriaComponent"], _component_comment_comment_component__WEBPACK_IMPORTED_MODULE_16__["ComentarioComponent"], _component_comments_comments_component__WEBPACK_IMPORTED_MODULE_17__["CommentsComponent"], _component_event_event_component__WEBPACK_IMPORTED_MODULE_18__["EventComponent"], _component_events_events_component__WEBPACK_IMPORTED_MODULE_19__["EventsComponent"], _component_lotery_lotery_component__WEBPACK_IMPORTED_MODULE_20__["SorteoComponent"], _component_loteryes_loteryes_component__WEBPACK_IMPORTED_MODULE_21__["SorteosComponent"], _component_qSomo_quienesSomo_component__WEBPACK_IMPORTED_MODULE_22__["SomoComponent"], _component_qSomos_quienesSomos_component__WEBPACK_IMPORTED_MODULE_23__["SomosComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/component/categoria/categoria.component.scss":
    /*!**************************************************************!*\
      !*** ./src/app/component/categoria/categoria.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentCategoriaCategoriaComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jYXRlZ29yaWEvY2F0ZWdvcmlhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/component/categoria/categoria.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/component/categoria/categoria.component.ts ***!
      \************************************************************/

    /*! exports provided: CategoriaComponent */

    /***/
    function srcAppComponentCategoriaCategoriaComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriaComponent", function () {
        return CategoriaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/categoria.service */
      "./src/app/services/categoria.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var CategoriaComponent = /*#__PURE__*/function () {
        function CategoriaComponent(router, categoriaService, alertCtrl) {
          _classCallCheck(this, CategoriaComponent);

          this.router = router;
          this.categoriaService = categoriaService;
          this.alertCtrl = alertCtrl;
        }

        _createClass(CategoriaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.obtenerCategoria();
          }
        }, {
          key: "obtenerCategoria",
          value: function obtenerCategoria() {
            var _this2 = this;

            this.categoriaService.getAllCategorias().subscribe(function (data) {
              console.log(data);
              _this2.listCategorias = data;
            });
          }
        }, {
          key: "eliminarCategoria",
          value: function eliminarCategoria(id) {
            var _this3 = this;

            this.categoriaService.deleteCategoria(id).subscribe(function () {
              _this3.obtenerCategoria();
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            window.history.back();
          }
        }, {
          key: "navigateToPage1",
          value: function navigateToPage1() {
            this.router.navigate(['/home']); // 
          }
        }, {
          key: "navigateToPage3",
          value: function navigateToPage3() {
            this.router.navigate(['/product']); //
          }
        }, {
          key: "navigateToPage4",
          value: function navigateToPage4() {
            this.router.navigate(['/productoNuevo']); //
          }
        }, {
          key: "navigateToPage5",
          value: function navigateToPage5() {
            this.router.navigate(['/event']); //
          }
        }, {
          key: "navigateToPage6",
          value: function navigateToPage6() {
            this.router.navigate(['/lotery']); //
          }
        }, {
          key: "navigateToPage7",
          value: function navigateToPage7() {
            this.router.navigate(['/qSomo']); //
          }
        }, {
          key: "navigateToPage8",
          value: function navigateToPage8() {
            this.router.navigate(['/categorias']); //
          }
        }, {
          key: "verDetalles2",
          value: function verDetalles2(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var categoriaSeleccionada, alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    categoriaSeleccionada = this.listCategorias.find(function (cat) {
                      return cat._id === id;
                    });
                    _context.next = 3;
                    return this.alertCtrl.create({
                      header: categoriaSeleccionada.nombre,
                      message: "\n      <ion-img src=\"".concat(categoriaSeleccionada.imagen, "\" alt=\"").concat(categoriaSeleccionada.nombre, "\"></ion-img>\n    "),
                      buttons: ['OK']
                    });

                  case 3:
                    alert = _context.sent;
                    _context.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }]);

        return CategoriaComponent;
      }();

      CategoriaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      CategoriaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categoria',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./categoria.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/categoria/categoria.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./categoria.component.scss */
        "./src/app/component/categoria/categoria.component.scss"))["default"]]
      })], CategoriaComponent);
      /***/
    },

    /***/
    "./src/app/component/categorias/categorias.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/component/categorias/categorias.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentCategoriasCategoriasComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jYXRlZ29yaWFzL2NhdGVnb3JpYXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/component/categorias/categorias.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/component/categorias/categorias.component.ts ***!
      \**************************************************************/

    /*! exports provided: CategoriasComponent */

    /***/
    function srcAppComponentCategoriasCategoriasComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriasComponent", function () {
        return CategoriasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_categoria_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/categoria.service */
      "./src/app/services/categoria.service.ts");

      var CategoriasComponent = /*#__PURE__*/function () {
        function CategoriasComponent(fb, router, categoriaService, activatedRoute) {
          _classCallCheck(this, CategoriasComponent);

          this.fb = fb;
          this.router = router;
          this.categoriaService = categoriaService;
          this.activatedRoute = activatedRoute;
          this.titulo = 'Crear Categoria';
          this.categoriaForm = this.fb.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imagen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.id = this.activatedRoute.snapshot.paramMap.get('id');
        }

        _createClass(CategoriasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.esEditar();
          }
        }, {
          key: "goBack",
          value: function goBack() {
            window.history.back();
          }
        }, {
          key: "agregarCategoria",
          value: function agregarCategoria() {
            var _this4 = this;

            var categoria = {
              nombre: this.categoriaForm.get('nombre').value,
              imagen: this.categoriaForm.get('imagen').value
            };

            if (this.id !== null) {
              this.categoriaService.updateCategoria(this.id, categoria).subscribe(function (data) {
                _this4.router.navigate(['/']);
              });
            } else {
              this.categoriaService.createCategoria(categoria).subscribe(function (data) {
                _this4.router.navigate(['/']);
              });
            }
          }
        }, {
          key: "enviar",
          value: function enviar() {
            this.router.navigate(['/categoria']); //
          }
        }, {
          key: "esEditar",
          value: function esEditar() {
            var _this5 = this;

            if (this.id !== null) {
              this.titulo = 'Editar Categoria';
              this.categoriaService.getCategoriaById(this.id).subscribe(function (data) {
                _this5.categoriaForm.setValue({
                  nombre: data.nombre,
                  imagen: data.imagen
                });
              });
            }
          }
        }]);

        return CategoriasComponent;
      }();

      CategoriasComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_categoria_service__WEBPACK_IMPORTED_MODULE_4__["CategoriaService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      CategoriasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categorias',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./categorias.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/categorias/categorias.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./categorias.component.scss */
        "./src/app/component/categorias/categorias.component.scss"))["default"]]
      })], CategoriasComponent);
      /***/
    },

    /***/
    "./src/app/component/comment/comment.component.scss":
    /*!**********************************************************!*\
      !*** ./src/app/component/comment/comment.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentCommentCommentComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/component/comment/comment.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/component/comment/comment.component.ts ***!
      \********************************************************/

    /*! exports provided: ComentarioComponent */

    /***/
    function srcAppComponentCommentCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComentarioComponent", function () {
        return ComentarioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_comentario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/comentario.service */
      "./src/app/services/comentario.service.ts"); // Importa el servicio


      var ComentarioComponent = /*#__PURE__*/function () {
        function ComentarioComponent(router, _comentarioService) {
          _classCallCheck(this, ComentarioComponent);

          this.router = router;
          this._comentarioService = _comentarioService;
        }

        _createClass(ComentarioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.obtenerComentario();
          }
        }, {
          key: "obtenerComentario",
          value: function obtenerComentario() {
            var _this6 = this;

            this._comentarioService.getComentario().subscribe(function (data) {
              console.log(data);
              _this6.listComentario = data;
            });
          }
        }, {
          key: "eliminarComentario",
          value: function eliminarComentario(id) {
            var _this7 = this;

            this._comentarioService.eliminarComentario(id).subscribe(function (data) {
              _this7.obtenerComentario();
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            window.history.back();
          }
        }, {
          key: "navigateToPage1",
          value: function navigateToPage1() {
            this.router.navigate(['/home']); //
          }
        }, {
          key: "navigateToPage4",
          value: function navigateToPage4() {
            this.router.navigate(['/employee']); //
          }
        }, {
          key: "navigateToPage2",
          value: function navigateToPage2() {
            this.router.navigate(['/product']); //
          }
        }, {
          key: "navigateToPage5",
          value: function navigateToPage5() {
            this.router.navigate(['/company']); //
          }
        }, {
          key: "navigateToPage6",
          value: function navigateToPage6() {
            this.router.navigate(['/administradors']);
          }
        }]);

        return ComentarioComponent;
      }();

      ComentarioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_comentario_service__WEBPACK_IMPORTED_MODULE_3__["ComentarioService"]
        }];
      };

      ComentarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comment.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/comment/comment.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comment.component.scss */
        "./src/app/component/comment/comment.component.scss"))["default"]]
      })], ComentarioComponent);
      /***/
    },

    /***/
    "./src/app/component/comments/comments.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/component/comments/comments.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentCommentsCommentsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/component/comments/comments.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/component/comments/comments.component.ts ***!
      \**********************************************************/

    /*! exports provided: CommentsComponent */

    /***/
    function srcAppComponentCommentsCommentsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentsComponent", function () {
        return CommentsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_comentario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/comentario.service */
      "./src/app/services/comentario.service.ts");

      var CommentsComponent = /*#__PURE__*/function () {
        function CommentsComponent(fb, router, _comentarioService, aRouter) {
          _classCallCheck(this, CommentsComponent);

          this.fb = fb;
          this.router = router;
          this._comentarioService = _comentarioService;
          this.aRouter = aRouter;
          this.titulo = 'Crear Comentario';
          this.comentForm = this.fb.group({
            comentario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            puntuacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.id = this.aRouter.snapshot.paramMap.get('id');
        }

        _createClass(CommentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.esEditar();
          }
        }, {
          key: "goBack",
          value: function goBack() {
            window.history.back();
          }
        }, {
          key: "agregarComentario",
          value: function agregarComentario() {
            var _this8 = this;

            var _a, _b;

            var COMENT = {
              comentario: (_a = this.comentForm.get('comentario')) === null || _a === void 0 ? void 0 : _a.value,
              puntuacion: (_b = this.comentForm.get('puntuacion')) === null || _b === void 0 ? void 0 : _b.value
            };

            if (this.id !== null) {
              // editamos producto
              this._comentarioService.editarComentario(this.id, COMENT).subscribe(function (data) {
                _this8.router.navigate(['/']);
              });
            } else {
              // agregamos producto
              console.log(COMENT);

              this._comentarioService.guardarComentario(COMENT).subscribe(function (data) {
                _this8.router.navigate(['/']);
              });
            }
          }
        }, {
          key: "esEditar",
          value: function esEditar() {
            var _this9 = this;

            if (this.id !== null) {
              this.titulo = 'Editar Comentario';

              this._comentarioService.obtenerComentario(this.id).subscribe(function (data) {
                _this9.comentForm.setValue({
                  comentario: data.comentario,
                  puntuacion: data.puntuacion
                });
              });
            }
          }
        }]);

        return CommentsComponent;
      }();

      CommentsComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_comentario_service__WEBPACK_IMPORTED_MODULE_4__["ComentarioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      CommentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comments.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/comments/comments.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comments.component.scss */
        "./src/app/component/comments/comments.component.scss"))["default"]]
      })], CommentsComponent);
      /***/
    },

    /***/
    "./src/app/component/event/event.component.scss":
    /*!******************************************************!*\
      !*** ./src/app/component/event/event.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentEventEventComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ldmVudC9ldmVudC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/component/event/event.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/component/event/event.component.ts ***!
      \****************************************************/

    /*! exports provided: EventComponent */

    /***/
    function srcAppComponentEventEventComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventComponent", function () {
        return EventComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_evento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/evento.service */
      "./src/app/services/evento.service.ts"); // Importa el servicio


      var EventComponent = /*#__PURE__*/function () {
        function EventComponent(router, _eventoService) {
          _classCallCheck(this, EventComponent);

          this.router = router;
          this._eventoService = _eventoService;
        }

        _createClass(EventComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.obtenerEvento();
          }
        }, {
          key: "obtenerEvento",
          value: function obtenerEvento() {
            var _this10 = this;

            this._eventoService.getEvento().subscribe(function (data) {
              console.log(data);
              _this10.listEvent = data;
            });
          }
        }, {
          key: "eliminarEvento",
          value: function eliminarEvento(id) {
            var _this11 = this;

            this._eventoService.eliminarEvento(id).subscribe(function (data) {
              _this11.obtenerEvento();
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            window.history.back();
          }
        }, {
          key: "navigateToPage1",
          value: function navigateToPage1() {
            this.router.navigate(['/home']); // 
          }
        }, {
          key: "navigateToPage3",
          value: function navigateToPage3() {
            this.router.navigate(['/product']); //
          }
        }, {
          key: "navigateToPage4",
          value: function navigateToPage4() {
            this.router.navigate(['/productoNuevo']); //
          }
        }, {
          key: "navigateToPage5",
          value: function navigateToPage5() {
            this.router.navigate(['/qSomo']); //
          }
        }, {
          key: "navigateToPage6",
          value: function navigateToPage6() {
            this.router.navigate(['/lotery']); //
          }
        }, {
          key: "navigateToPage7",
          value: function navigateToPage7() {
            this.router.navigate(['/categoria']); //
          }
        }]);

        return EventComponent;
      }();

      EventComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_evento_service__WEBPACK_IMPORTED_MODULE_3__["EventoService"]
        }];
      };

      EventComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./event.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/event/event.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./event.component.scss */
        "./src/app/component/event/event.component.scss"))["default"]]
      })], EventComponent);
      /***/
    },

    /***/
    "./src/app/component/events/events.component.scss":
    /*!********************************************************!*\
      !*** ./src/app/component/events/events.component.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentEventsEventsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/component/events/events.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/component/events/events.component.ts ***!
      \******************************************************/

    /*! exports provided: EventsComponent */

    /***/
    function srcAppComponentEventsEventsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsComponent", function () {
        return EventsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_evento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/evento.service */
      "./src/app/services/evento.service.ts");

      var EventsComponent = /*#__PURE__*/function () {
        function EventsComponent(fb, router, _eventoService, aRouter) {
          _classCallCheck(this, EventsComponent);

          this.fb = fb;
          this.router = router;
          this._eventoService = _eventoService;
          this.aRouter = aRouter;
          this.titulo = 'Crear Evento';
          this.eventForm = this.fb.group({
            foto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fecha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.id = this.aRouter.snapshot.paramMap.get('id');
        }

        _createClass(EventsComponent, [{
          key: "goBack",
          value: function goBack() {
            window.history.back();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.esEditar();
          }
        }, {
          key: "agregarEvento",
          value: function agregarEvento() {
            var _this12 = this;

            var _a, _b, _c, _d;

            var EVENT = {
              foto: (_a = this.eventForm.get('foto')) === null || _a === void 0 ? void 0 : _a.value,
              nombre: (_b = this.eventForm.get('nombre')) === null || _b === void 0 ? void 0 : _b.value,
              fecha: (_c = this.eventForm.get('fecha')) === null || _c === void 0 ? void 0 : _c.value,
              descripcion: (_d = this.eventForm.get('descripcion')) === null || _d === void 0 ? void 0 : _d.value
            };

            if (this.id !== null) {
              // editamos producto
              this._eventoService.editarEvento(this.id, EVENT).subscribe(function (data) {
                _this12.router.navigate(['/']);
              });
            } else {
              // agregamos producto
              console.log(EVENT);

              this._eventoService.guardarEvento(EVENT).subscribe(function (data) {
                _this12.router.navigate(['/']);
              });
            }
          }
        }, {
          key: "esEditar",
          value: function esEditar() {
            var _this13 = this;

            if (this.id !== null) {
              this.titulo = 'Editar Evento';

              this._eventoService.obtenerEvento(this.id).subscribe(function (data) {
                _this13.eventForm.setValue({
                  foto: data.foto,
                  nombre: data.nombre,
                  fecha: data.fecha,
                  descripcion: data.descripcion
                });
              });
            }
          }
        }]);

        return EventsComponent;
      }();

      EventsComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_evento_service__WEBPACK_IMPORTED_MODULE_4__["EventoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      EventsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./events.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/events/events.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./events.component.scss */
        "./src/app/component/events/events.component.scss"))["default"]]
      })], EventsComponent);
      /***/
    },

    /***/
    "./src/app/component/home/home.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/component/home/home.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\n.icono-grande {\n  font-size: 36px;\n  /* Ajusta el tamaño a tu preferencia */\n}\n.centro-vertical {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n/* Estilos para el título del header */\nion-title {\n  font-size: 24px;\n  color: white;\n  /* Cambia el color del texto */\n}\n/* Estilos para la tarjeta de bienvenida */\n.welcome-card {\n  margin: 20px;\n  padding: 20px;\n  border-radius: 15px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n/* Estilos para los elementos ion-card */\nion-card {\n  margin: 10px;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n/* Estilos para los íconos */\n.icono-grande {\n  font-size: 3em;\n  color: #3498db;\n  /* Cambia el color del ícono */\n}\n/* Estilos para los títulos de las tarjetas */\nion-card-title {\n  font-size: 18px;\n  color: #333;\n  /* Cambia el color del texto del título */\n}\n/* Estilos para el enlace de descarga PDF */\nion-card-content a {\n  display: block;\n  margin-top: 10px;\n  text-decoration: none;\n  color: #27ae60;\n  /* Cambia el color del enlace */\n  font-weight: bold;\n}\n/* Estilos cuando se pasa el ratón por encima del enlace */\nion-card-content a:hover {\n  text-decoration: underline;\n  color: #2ecc71;\n  /* Cambia el color al pasar el ratón por encima */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0Y7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGO0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQURGO0FBSUE7RUFDRSxxQkFBQTtBQURGO0FBSUE7RUFDRSxlQUFBO0VBQWlCLHNDQUFBO0FBQW5CO0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBLHNDQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUFjLDhCQUFBO0FBQ2hCO0FBRUEsMENBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQUNGO0FBRUEsd0NBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQUNGO0FBRUEsNEJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQWdCLDhCQUFBO0FBRWxCO0FBQ0EsNkNBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQWEseUNBQUE7QUFHZjtBQUFBLDJDQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFBZ0IsK0JBQUE7RUFDaEIsaUJBQUE7QUFJRjtBQURBLDBEQUFBO0FBQ0E7RUFDRSwwQkFBQTtFQUNBLGNBQUE7RUFBZ0IsaURBQUE7QUFLbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaWNvbm8tZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICAvKiBBanVzdGEgZWwgdGFtYcOxbyBhIHR1IHByZWZlcmVuY2lhICovXG59XG5cbi5jZW50cm8tdmVydGljYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgZWwgdMOtdHVsbyBkZWwgaGVhZGVyICovXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byAqL1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgbGEgdGFyamV0YSBkZSBiaWVudmVuaWRhICovXG4ud2VsY29tZS1jYXJkIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgbG9zIGVsZW1lbnRvcyBpb24tY2FyZCAqL1xuaW9uLWNhcmQge1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi8qIEVzdGlsb3MgcGFyYSBsb3Mgw61jb25vcyAqL1xuLmljb25vLWdyYW5kZSB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBjb2xvcjogIzM0OThkYjtcbiAgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCDDrWNvbm8gKi9cbn1cblxuLyogRXN0aWxvcyBwYXJhIGxvcyB0w610dWxvcyBkZSBsYXMgdGFyamV0YXMgKi9cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzMzMztcbiAgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBkZWwgdMOtdHVsbyAqL1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgZWwgZW5sYWNlIGRlIGRlc2NhcmdhIFBERiAqL1xuaW9uLWNhcmQtY29udGVudCBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMyN2FlNjA7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBkZWwgZW5sYWNlICovXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKiBFc3RpbG9zIGN1YW5kbyBzZSBwYXNhIGVsIHJhdMOzbiBwb3IgZW5jaW1hIGRlbCBlbmxhY2UgKi9cbmlvbi1jYXJkLWNvbnRlbnQgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzJlY2M3MTtcbiAgLyogQ2FtYmlhIGVsIGNvbG9yIGFsIHBhc2FyIGVsIHJhdMOzbiBwb3IgZW5jaW1hICovXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/component/home/home.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/component/home/home.page.ts ***!
      \*********************************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppComponentHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(router) {
          _classCallCheck(this, HomePage);

          this.router = router;
        }

        _createClass(HomePage, [{
          key: "navigateToPage1",
          value: function navigateToPage1() {
            this.router.navigate(['/categoria']); // 
          }
        }, {
          key: "navigateToPage3",
          value: function navigateToPage3() {
            this.router.navigate(['/product']); //
          }
        }, {
          key: "navigateToPage4",
          value: function navigateToPage4() {
            this.router.navigate(['/productoNuevo']); //
          }
        }, {
          key: "navigateToPage5",
          value: function navigateToPage5() {
            this.router.navigate(['/event']); //
          }
        }, {
          key: "navigateToPage6",
          value: function navigateToPage6() {
            this.router.navigate(['/lotery']); //
          }
        }, {
          key: "navigateToPage7",
          value: function navigateToPage7() {
            this.router.navigate(['/qSomo']); //
          }
        }, {
          key: "navigateToPage8",
          value: function navigateToPage8() {
            this.router.navigate(['/login']); //
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/component/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    },

    /***/
    "./src/app/component/lotery/lotery.component.scss":
    /*!********************************************************!*\
      !*** ./src/app/component/lotery/lotery.component.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentLoteryLoteryComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sb3RlcnkvbG90ZXJ5LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/component/lotery/lotery.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/component/lotery/lotery.component.ts ***!
      \******************************************************/

    /*! exports provided: SorteoComponent */

    /***/
    function srcAppComponentLoteryLoteryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SorteoComponent", function () {
        return SorteoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_sorteo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/sorteo.service */
      "./src/app/services/sorteo.service.ts"); // Importa el servicio


      var SorteoComponent = /*#__PURE__*/function () {
        function SorteoComponent(router, _sorteoService) {
          _classCallCheck(this, SorteoComponent);

          this.router = router;
          this._sorteoService = _sorteoService;
        }

        _createClass(SorteoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.obtenerSorteo();
          }
        }, {
          key: "obtenerSorteo",
          value: function obtenerSorteo() {
            var _this14 = this;

            this._sorteoService.getSorteo().subscribe(function (data) {
              console.log(data);
              _this14.listSorteo = data;
            });
          }
        }, {
          key: "eliminarSorteo",
          value: function eliminarSorteo(id) {
            var _this15 = this;

            this._sorteoService.eliminarSorteo(id).subscribe(function (data) {
              _this15.obtenerSorteo();
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            window.history.back();
          }
        }, {
          key: "navigateToPage1",
          value: function navigateToPage1() {
            this.router.navigate(['/home']); // 
          }
        }, {
          key: "navigateToPage3",
          value: function navigateToPage3() {
            this.router.navigate(['/product']); //
          }
        }, {
          key: "navigateToPage4",
          value: function navigateToPage4() {
            this.router.navigate(['/productoNuevo']); //
          }
        }, {
          key: "navigateToPage5",
          value: function navigateToPage5() {
            this.router.navigate(['/qSomo']); //
          }
        }, {
          key: "navigateToPage6",
          value: function navigateToPage6() {
            this.router.navigate(['/event']); //
          }
        }, {
          key: "navigateToPage7",
          value: function navigateToPage7() {
            this.router.navigate(['/categoria']); //
          }
        }]);

        return SorteoComponent;
      }();

      SorteoComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_sorteo_service__WEBPACK_IMPORTED_MODULE_3__["SorteoService"]
        }];
      };

      SorteoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lotery',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./lotery.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/lotery/lotery.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./lotery.component.scss */
        "./src/app/component/lotery/lotery.component.scss"))["default"]]
      })], SorteoComponent);
      /***/
    },

    /***/
    "./src/app/component/loteryes/loteryes.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/component/loteryes/loteryes.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentLoteryesLoteryesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sb3Rlcnllcy9sb3Rlcnllcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/component/loteryes/loteryes.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/component/loteryes/loteryes.component.ts ***!
      \**********************************************************/

    /*! exports provided: SorteosComponent */

    /***/
    function srcAppComponentLoteryesLoteryesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SorteosComponent", function () {
        return SorteosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_sorteo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/sorteo.service */
      "./src/app/services/sorteo.service.ts");

      var SorteosComponent = /*#__PURE__*/function () {
        function SorteosComponent(fb, router, _sorteoService, aRouter) {
          _classCallCheck(this, SorteosComponent);

          this.fb = fb;
          this.router = router;
          this._sorteoService = _sorteoService;
          this.aRouter = aRouter;
          this.titulo = 'Crear Sorteo';
          this.loteryForm = this.fb.group({
            foto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            titulo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fecha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.id = this.aRouter.snapshot.paramMap.get('id');
        }

        _createClass(SorteosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.esEditar();
          }
        }, {
          key: "goBack",
          value: function goBack() {
            window.history.back();
          }
        }, {
          key: "agregarSorteo",
          value: function agregarSorteo() {
            var _this16 = this;

            var _a, _b, _c, _d, _e;

            var LOTERY = {
              foto: (_a = this.loteryForm.get('foto')) === null || _a === void 0 ? void 0 : _a.value,
              titulo: (_b = this.loteryForm.get('titulo')) === null || _b === void 0 ? void 0 : _b.value,
              nombre: (_c = this.loteryForm.get('nombre')) === null || _c === void 0 ? void 0 : _c.value,
              fecha: (_d = this.loteryForm.get('fecha')) === null || _d === void 0 ? void 0 : _d.value,
              descripcion: (_e = this.loteryForm.get('descripcion')) === null || _e === void 0 ? void 0 : _e.value
            };

            if (this.id !== null) {
              // editamos producto
              this._sorteoService.editarSorteo(this.id, LOTERY).subscribe(function (data) {
                _this16.router.navigate(['/']);
              });
            } else {
              // agregamos producto
              console.log(LOTERY);

              this._sorteoService.guardarSorteo(LOTERY).subscribe(function (data) {
                _this16.router.navigate(['/']);
              });
            }
          }
        }, {
          key: "esEditar",
          value: function esEditar() {
            var _this17 = this;

            if (this.id !== null) {
              this.titulo = 'Editar Sorteo';

              this._sorteoService.obtenerSorteo(this.id).subscribe(function (data) {
                _this17.loteryForm.setValue({
                  foto: data.foto,
                  titulo: data.titulo,
                  nombre: data.nombre,
                  fecha: data.fecha,
                  descripcion: data.descripcion
                });
              });
            }
          }
        }]);

        return SorteosComponent;
      }();

      SorteosComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_sorteo_service__WEBPACK_IMPORTED_MODULE_4__["SorteoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      SorteosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loteryes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./loteryes.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/loteryes/loteryes.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./loteryes.component.scss */
        "./src/app/component/loteryes/loteryes.component.scss"))["default"]]
      })], SorteosComponent);
      /***/
    },

    /***/
    "./src/app/component/product/product.component.scss":
    /*!**********************************************************!*\
      !*** ./src/app/component/product/product.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentProductProductComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n.fixed-button {\n  position: fixed;\n  bottom: 20px;\n  /* Ajusta la distancia del botón desde la parte inferior de la pantalla */\n  left: 50%;\n  /* Opcional: si deseas alinear el botón en el centro horizontal */\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUFjLHlFQUFBO0VBQ2QsU0FBQTtFQUFXLGlFQUFBO0VBQ1gsMkJBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZml4ZWQtYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIC8qIEFqdXN0YSBsYSBkaXN0YW5jaWEgZGVsIGJvdMOzbiBkZXNkZSBsYSBwYXJ0ZSBpbmZlcmlvciBkZSBsYSBwYW50YWxsYSAqL1xuICBsZWZ0OiA1MCU7XG4gIC8qIE9wY2lvbmFsOiBzaSBkZXNlYXMgYWxpbmVhciBlbCBib3TDs24gZW4gZWwgY2VudHJvIGhvcml6b250YWwgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/component/product/product.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/component/product/product.component.ts ***!
      \********************************************************/

    /*! exports provided: ProductComponent */

    /***/
    function srcAppComponentProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
        return ProductComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/producto.service */
      "./src/app/services/producto.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ProductComponent = /*#__PURE__*/function () {
        function ProductComponent(router, productService, alertCtrl) {
          _classCallCheck(this, ProductComponent);

          this.router = router;
          this.productService = productService;
          this.alertCtrl = alertCtrl;
        }

        _createClass(ProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.obtenerProductos();
          }
        }, {
          key: "obtenerProductos",
          value: function obtenerProductos() {
            var _this18 = this;

            this.productService.getAllProductos().subscribe(function (data) {
              console.log(data);
              _this18.listProductos = data;
            });
          }
        }, {
          key: "eliminarProducto",
          value: function eliminarProducto(id) {
            var _this19 = this;

            this.productService.deleteProducto(id).subscribe(function () {
              _this19.obtenerProductos();
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            window.history.back();
          }
        }, {
          key: "navigateToPage1",
          value: function navigateToPage1() {
            this.router.navigate(['/home']); // 
          }
        }, {
          key: "navigateToPage3",
          value: function navigateToPage3() {
            this.router.navigate(['/lotery']); //
          }
        }, {
          key: "navigateToPage4",
          value: function navigateToPage4() {
            this.router.navigate(['/productoNuevo']); //
          }
        }, {
          key: "navigateToPage5",
          value: function navigateToPage5() {
            this.router.navigate(['/qSomo']); //
          }
        }, {
          key: "navigateToPage6",
          value: function navigateToPage6() {
            this.router.navigate(['/event']); //
          }
        }, {
          key: "navigateToPage7",
          value: function navigateToPage7() {
            this.router.navigate(['/categoria']); //
          }
        }, {
          key: "verDetalles2",
          value: function verDetalles2(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var productoSeleccionado, alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    productoSeleccionado = this.listProductos.find(function (prod) {
                      return prod._id === id;
                    });
                    _context2.next = 3;
                    return this.alertCtrl.create({
                      header: productoSeleccionado.nombre,
                      message: "\n      <ion-img src=\"".concat(productoSeleccionado.imagen, "\" alt=\"").concat(productoSeleccionado.nombre, "\"></ion-img>\n      <p>Precio: ").concat(productoSeleccionado.precio, "</p>\n    "),
                      buttons: ['OK']
                    });

                  case 3:
                    alert = _context2.sent;
                    _context2.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ProductComponent;
      }();

      ProductComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      ProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./product.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/product/product.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./product.component.scss */
        "./src/app/component/product/product.component.scss"))["default"]]
      })], ProductComponent);
      /***/
    },

    /***/
    "./src/app/component/productoNuevo/productoNuevo.component.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/component/productoNuevo/productoNuevo.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentProductoNuevoProductoNuevoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcm9kdWN0b051ZXZvL3Byb2R1Y3RvTnVldm8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/component/productoNuevo/productoNuevo.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/component/productoNuevo/productoNuevo.component.ts ***!
      \********************************************************************/

    /*! exports provided: ProductNuevoComponent */

    /***/
    function srcAppComponentProductoNuevoProductoNuevoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductNuevoComponent", function () {
        return ProductNuevoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_productoNuevo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/productoNuevo.service */
      "./src/app/services/productoNuevo.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ProductNuevoComponent = /*#__PURE__*/function () {
        function ProductNuevoComponent(router, nuevosProductoService, alertCtrl) {
          _classCallCheck(this, ProductNuevoComponent);

          this.router = router;
          this.nuevosProductoService = nuevosProductoService;
          this.alertCtrl = alertCtrl;
        }

        _createClass(ProductNuevoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.obtenerProductosNuevos();
          }
        }, {
          key: "obtenerProductosNuevos",
          value: function obtenerProductosNuevos() {
            var _this20 = this;

            this.nuevosProductoService.getAllProductoNuevo().subscribe(function (data) {
              console.log(data);
              _this20.listProductosNew = data;
            });
          }
        }, {
          key: "eliminarProductoNuevo",
          value: function eliminarProductoNuevo(id) {
            var _this21 = this;

            this.nuevosProductoService.deleteProductoNuevo(id).subscribe(function () {
              _this21.obtenerProductosNuevos();
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            window.history.back();
          }
        }, {
          key: "navigateToPage1",
          value: function navigateToPage1() {
            this.router.navigate(['/home']); // 
          }
        }, {
          key: "navigateToPage3",
          value: function navigateToPage3() {
            this.router.navigate(['/lotery']); //
          }
        }, {
          key: "navigateToPage4",
          value: function navigateToPage4() {
            this.router.navigate(['/productoNuevo']); //
          }
        }, {
          key: "navigateToPage5",
          value: function navigateToPage5() {
            this.router.navigate(['/qSomo']); //
          }
        }, {
          key: "navigateToPage6",
          value: function navigateToPage6() {
            this.router.navigate(['/event']); //
          }
        }, {
          key: "navigateToPage7",
          value: function navigateToPage7() {
            this.router.navigate(['/categoria']); //
          }
        }, {
          key: "verDetalles2",
          value: function verDetalles2(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var productoSeleccionado, alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    productoSeleccionado = this.listProductosNew.find(function (prod) {
                      return prod._id === id;
                    });
                    _context3.next = 3;
                    return this.alertCtrl.create({
                      header: productoSeleccionado.nombre,
                      message: "\n      <ion-img src=\"".concat(productoSeleccionado.imagen, "\" alt=\"").concat(productoSeleccionado.nombre, "\"></ion-img>\n      <p>Precio: ").concat(productoSeleccionado.precio, "</p>\n    "),
                      buttons: ['OK']
                    });

                  case 3:
                    alert = _context3.sent;
                    _context3.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }]);

        return ProductNuevoComponent;
      }();

      ProductNuevoComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_productoNuevo_service__WEBPACK_IMPORTED_MODULE_3__["NuevoProductoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      ProductNuevoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productoNuevo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./productoNuevo.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/productoNuevo/productoNuevo.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./productoNuevo.component.scss */
        "./src/app/component/productoNuevo/productoNuevo.component.scss"))["default"]]
      })], ProductNuevoComponent);
      /***/
    },

    /***/
    "./src/app/component/productosNuevos/productosNuevos.component.scss":
    /*!**************************************************************************!*\
      !*** ./src/app/component/productosNuevos/productosNuevos.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentProductosNuevosProductosNuevosComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcm9kdWN0b3NOdWV2b3MvcHJvZHVjdG9zTnVldm9zLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/component/productosNuevos/productosNuevos.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/component/productosNuevos/productosNuevos.component.ts ***!
      \************************************************************************/

    /*! exports provided: NuevosProductsComponent */

    /***/
    function srcAppComponentProductosNuevosProductosNuevosComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NuevosProductsComponent", function () {
        return NuevosProductsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_productoNuevo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/productoNuevo.service */
      "./src/app/services/productoNuevo.service.ts");

      var NuevosProductsComponent = /*#__PURE__*/function () {
        function NuevosProductsComponent(fb, router, nuevoProductoService, activatedRoute) {
          _classCallCheck(this, NuevosProductsComponent);

          this.fb = fb;
          this.router = router;
          this.nuevoProductoService = nuevoProductoService;
          this.activatedRoute = activatedRoute;
          this.titulo = 'Crear Nuevo Producto';
          this.nuevosProductosForm = this.fb.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imagen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            precio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descuento: [''],
            precioFinal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.id = this.activatedRoute.snapshot.paramMap.get('id');
        }

        _createClass(NuevosProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.esEditar();
          }
        }, {
          key: "goBack",
          value: function goBack() {
            window.history.back();
          }
        }, {
          key: "agregarProductoNuevo",
          value: function agregarProductoNuevo() {
            var _this22 = this;

            var nuevoProducto = {
              nombre: this.nuevosProductosForm.get('nombre').value,
              imagen: this.nuevosProductosForm.get('imagen').value,
              precio: this.nuevosProductosForm.get('precio').value,
              descuento: this.nuevosProductosForm.get('descuento').value,
              precioFinal: this.nuevosProductosForm.get('precioFinal').value
            };

            if (this.id !== null) {
              this.nuevoProductoService.updateProductoNuevo(this.id, nuevoProducto).subscribe(function (data) {
                _this22.router.navigate(['/']);
              });
            } else {
              this.nuevoProductoService.crearProductoNuevo(nuevoProducto).subscribe(function (data) {
                _this22.router.navigate(['/']);
              });
            }
          }
        }, {
          key: "esEditar",
          value: function esEditar() {
            var _this23 = this;

            if (this.id !== null) {
              this.titulo = 'Editar Producto';
              this.nuevoProductoService.getProductoNuevoById(this.id).subscribe(function (data) {
                _this23.nuevosProductosForm.setValue({
                  nombre: data.nombre,
                  imagen: data.imagen,
                  precio: data.precio,
                  descuento: data.descuento,
                  precioFinal: data.precioFinal
                });
              });
            }
          }
        }]);

        return NuevosProductsComponent;
      }();

      NuevosProductsComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_productoNuevo_service__WEBPACK_IMPORTED_MODULE_4__["NuevoProductoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      NuevosProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./productosNuevos.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/productosNuevos/productosNuevos.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./productosNuevos.component.scss */
        "./src/app/component/productosNuevos/productosNuevos.component.scss"))["default"]]
      })], NuevosProductsComponent);
      /***/
    },

    /***/
    "./src/app/component/products/products.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/component/products/products.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentProductsProductsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/component/products/products.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/component/products/products.component.ts ***!
      \**********************************************************/

    /*! exports provided: ProductsComponent */

    /***/
    function srcAppComponentProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
        return ProductsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/producto.service */
      "./src/app/services/producto.service.ts");

      var ProductsComponent = /*#__PURE__*/function () {
        function ProductsComponent(fb, router, productService, activatedRoute) {
          _classCallCheck(this, ProductsComponent);

          this.fb = fb;
          this.router = router;
          this.productService = productService;
          this.activatedRoute = activatedRoute;
          this.titulo = 'Crear Producto';
          this.productoForm = this.fb.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imagen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            precio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descuento: [''],
            precioFinal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.id = this.activatedRoute.snapshot.paramMap.get('id');
        }

        _createClass(ProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.esEditar();
          }
        }, {
          key: "goBack",
          value: function goBack() {
            window.history.back();
          }
        }, {
          key: "agregarProducto",
          value: function agregarProducto() {
            var _this24 = this;

            var producto = {
              nombre: this.productoForm.get('nombre').value,
              imagen: this.productoForm.get('imagen').value,
              precio: this.productoForm.get('precio').value,
              descuento: this.productoForm.get('descuento').value,
              precioFinal: this.productoForm.get('precioFinal').value
            };

            if (this.id !== null) {
              this.productService.updateProducto(this.id, producto).subscribe(function (data) {
                _this24.router.navigate(['/']);
              });
            } else {
              this.productService.createProducto(producto).subscribe(function (data) {
                _this24.router.navigate(['/']);
              });
            }
          }
        }, {
          key: "esEditar",
          value: function esEditar() {
            var _this25 = this;

            if (this.id !== null) {
              this.titulo = 'Editar Producto';
              this.productService.getProductoById(this.id).subscribe(function (data) {
                _this25.productoForm.setValue({
                  nombre: data.nombre,
                  imagen: data.imagen,
                  precio: data.precio,
                  descuento: data.descuento,
                  precioFinal: data.precioFinal
                });
              });
            }
          }
        }]);

        return ProductsComponent;
      }();

      ProductsComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./products.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/products/products.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./products.component.scss */
        "./src/app/component/products/products.component.scss"))["default"]]
      })], ProductsComponent);
      /***/
    },

    /***/
    "./src/app/component/qSomo/quienesSomo.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/component/qSomo/quienesSomo.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentQSomoQuienesSomoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9xU29tby9xdWllbmVzU29tby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/component/qSomo/quienesSomo.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/component/qSomo/quienesSomo.component.ts ***!
      \**********************************************************/

    /*! exports provided: SomoComponent */

    /***/
    function srcAppComponentQSomoQuienesSomoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SomoComponent", function () {
        return SomoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_quienesSomos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/quienesSomos.service */
      "./src/app/services/quienesSomos.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var SomoComponent = /*#__PURE__*/function () {
        function SomoComponent(router, somosService, alertCtrl) {
          _classCallCheck(this, SomoComponent);

          this.router = router;
          this.somosService = somosService;
          this.alertCtrl = alertCtrl;
        }

        _createClass(SomoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.obtenerSomos();
          }
        }, {
          key: "obtenerSomos",
          value: function obtenerSomos() {
            var _this26 = this;

            this.somosService.getSomos().subscribe(function (data) {
              console.log(data);
              _this26.listSomos = data;
            });
          }
        }, {
          key: "eliminarSomos",
          value: function eliminarSomos(id) {
            var _this27 = this;

            this.somosService.eliminarSomos(id).subscribe(function () {
              _this27.obtenerSomos();
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            window.history.back();
          }
        }, {
          key: "navigateToPage1",
          value: function navigateToPage1() {
            this.router.navigate(['/home']); // 
          }
        }, {
          key: "navigateToPage3",
          value: function navigateToPage3() {
            this.router.navigate(['/product']); //
          }
        }, {
          key: "navigateToPage4",
          value: function navigateToPage4() {
            this.router.navigate(['/productoNuevo']); //
          }
        }, {
          key: "navigateToPage5",
          value: function navigateToPage5() {
            this.router.navigate(['/event']); //
          }
        }, {
          key: "navigateToPage6",
          value: function navigateToPage6() {
            this.router.navigate(['/lotery']); //
          }
        }, {
          key: "navigateToPage7",
          value: function navigateToPage7() {
            this.router.navigate(['/categoria']); //
          }
        }]);

        return SomoComponent;
      }();

      SomoComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_quienesSomos_service__WEBPACK_IMPORTED_MODULE_3__["SomosService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      SomoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quienesSomo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./quienesSomo.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/qSomo/quienesSomo.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./quienesSomo.component.scss */
        "./src/app/component/qSomo/quienesSomo.component.scss"))["default"]]
      })], SomoComponent);
      /***/
    },

    /***/
    "./src/app/component/qSomos/quienesSomos.component.scss":
    /*!**************************************************************!*\
      !*** ./src/app/component/qSomos/quienesSomos.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentQSomosQuienesSomosComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9xU29tb3MvcXVpZW5lc1NvbW9zLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/component/qSomos/quienesSomos.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/component/qSomos/quienesSomos.component.ts ***!
      \************************************************************/

    /*! exports provided: SomosComponent */

    /***/
    function srcAppComponentQSomosQuienesSomosComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SomosComponent", function () {
        return SomosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_quienesSomos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/quienesSomos.service */
      "./src/app/services/quienesSomos.service.ts");

      var SomosComponent = /*#__PURE__*/function () {
        function SomosComponent(fb, router, quienesSomosService, activatedRoute) {
          _classCallCheck(this, SomosComponent);

          this.fb = fb;
          this.router = router;
          this.quienesSomosService = quienesSomosService;
          this.activatedRoute = activatedRoute;
          this.titulo = 'Crear Quienes Somos';
          this.somosForm = this.fb.group({
            foto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.id = this.activatedRoute.snapshot.paramMap.get('id');
        }

        _createClass(SomosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.esEditar();
          }
        }, {
          key: "goBack",
          value: function goBack() {
            window.history.back();
          }
        }, {
          key: "agregarSomos",
          value: function agregarSomos() {
            var _this28 = this;

            var somos = {
              foto: this.somosForm.get('foto').value,
              descripcion: this.somosForm.get('descripcion').value
            };

            if (this.id !== null) {
              this.quienesSomosService.editarSomos(this.id, somos).subscribe(function (data) {
                _this28.router.navigate(['/']);
              });
            } else {
              this.quienesSomosService.guardarSomos(somos).subscribe(function (data) {
                _this28.router.navigate(['/']);
              });
            }
          }
        }, {
          key: "esEditar",
          value: function esEditar() {
            var _this29 = this;

            if (this.id !== null) {
              this.titulo = 'Editar Quienes Somos';
              this.quienesSomosService.obtenerSomos(this.id).subscribe(function (data) {
                _this29.somosForm.setValue({
                  foto: data.foto,
                  descripcion: data.descripcion
                });
              });
            }
          }
        }]);

        return SomosComponent;
      }();

      SomosComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_quienesSomos_service__WEBPACK_IMPORTED_MODULE_4__["SomosService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      SomosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quienesSomo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./quienesSomos.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/component/qSomos/quienesSomos.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./quienesSomos.component.scss */
        "./src/app/component/qSomos/quienesSomos.component.scss"))["default"]]
      })], SomosComponent);
      /***/
    },

    /***/
    "./src/app/services/categoria.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/categoria.service.ts ***!
      \***********************************************/

    /*! exports provided: CategoriaService */

    /***/
    function srcAppServicesCategoriaServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriaService", function () {
        return CategoriaService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var CategoriaService = /*#__PURE__*/function () {
        function CategoriaService(http) {
          _classCallCheck(this, CategoriaService);

          this.http = http;
          this.apiUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/categoria");
        }

        _createClass(CategoriaService, [{
          key: "getAllCategorias",
          value: function getAllCategorias() {
            return this.http.get(this.apiUrl);
          }
        }, {
          key: "getCategoriaById",
          value: function getCategoriaById(id) {
            return this.http.get("".concat(this.apiUrl, "/").concat(id));
          }
        }, {
          key: "createCategoria",
          value: function createCategoria(categoria) {
            return this.http.post(this.apiUrl, categoria);
          }
        }, {
          key: "updateCategoria",
          value: function updateCategoria(id, categoria) {
            return this.http.put("".concat(this.apiUrl, "/").concat(id), categoria);
          }
        }, {
          key: "deleteCategoria",
          value: function deleteCategoria(id) {
            return this.http["delete"]("".concat(this.apiUrl, "/").concat(id));
          }
        }]);

        return CategoriaService;
      }();

      CategoriaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      CategoriaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CategoriaService);
      /***/
    },

    /***/
    "./src/app/services/comentario.service.ts":
    /*!************************************************!*\
      !*** ./src/app/services/comentario.service.ts ***!
      \************************************************/

    /*! exports provided: ComentarioService */

    /***/
    function srcAppServicesComentarioServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComentarioService", function () {
        return ComentarioService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var ComentarioService = /*#__PURE__*/function () {
        function ComentarioService(http) {
          _classCallCheck(this, ComentarioService);

          this.http = http;
          this.apiUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/comentario");
        }

        _createClass(ComentarioService, [{
          key: "getComentario",
          value: function getComentario() {
            return this.http.get(this.apiUrl);
          }
        }, {
          key: "eliminarComentario",
          value: function eliminarComentario(id) {
            return this.http["delete"]("".concat(this.apiUrl, "/").concat(id));
          }
        }, {
          key: "guardarComentario",
          value: function guardarComentario(comentario) {
            return this.http.post(this.apiUrl, comentario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              console.error('Error al guardar el comentario:', error);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));
          }
        }, {
          key: "obtenerComentario",
          value: function obtenerComentario(id) {
            return this.http.get("".concat(this.apiUrl, "/").concat(id));
          }
        }, {
          key: "editarComentario",
          value: function editarComentario(id, comentario) {
            return this.http.put("".concat(this.apiUrl, "/").concat(id), comentario);
          }
        }]);

        return ComentarioService;
      }();

      ComentarioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ComentarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], ComentarioService);
      /***/
    },

    /***/
    "./src/app/services/evento.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/evento.service.ts ***!
      \********************************************/

    /*! exports provided: EventoService */

    /***/
    function srcAppServicesEventoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventoService", function () {
        return EventoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var EventoService = /*#__PURE__*/function () {
        function EventoService(http) {
          _classCallCheck(this, EventoService);

          this.http = http;
          this.apiUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/evento");
        }

        _createClass(EventoService, [{
          key: "getEvento",
          value: function getEvento() {
            return this.http.get(this.apiUrl);
          }
        }, {
          key: "eliminarEvento",
          value: function eliminarEvento(id) {
            return this.http["delete"]("".concat(this.apiUrl, "/").concat(id));
          }
        }, {
          key: "guardarEvento",
          value: function guardarEvento(evento) {
            return this.http.post(this.apiUrl, evento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              console.error('Error al guardar el evento:', error);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }));
          }
        }, {
          key: "obtenerEvento",
          value: function obtenerEvento(id) {
            return this.http.get("".concat(this.apiUrl, "/").concat(id));
          }
        }, {
          key: "editarEvento",
          value: function editarEvento(id, evento) {
            return this.http.put("".concat(this.apiUrl, "/").concat(id), evento);
          }
        }]);

        return EventoService;
      }();

      EventoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      EventoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], EventoService);
      /***/
    },

    /***/
    "./src/app/services/producto.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/producto.service.ts ***!
      \**********************************************/

    /*! exports provided: ProductService */

    /***/
    function srcAppServicesProductoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var ProductService = /*#__PURE__*/function () {
        function ProductService(http) {
          _classCallCheck(this, ProductService);

          this.http = http;
          this.apiUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/producto");
        }

        _createClass(ProductService, [{
          key: "getAllProductos",
          value: function getAllProductos() {
            return this.http.get(this.apiUrl);
          }
        }, {
          key: "getProductoById",
          value: function getProductoById(id) {
            return this.http.get("".concat(this.apiUrl, "/").concat(id));
          }
        }, {
          key: "createProducto",
          value: function createProducto(producto) {
            return this.http.post(this.apiUrl, producto);
          }
        }, {
          key: "updateProducto",
          value: function updateProducto(id, producto) {
            return this.http.put("".concat(this.apiUrl, "/").concat(id), producto);
          }
        }, {
          key: "deleteProducto",
          value: function deleteProducto(id) {
            return this.http["delete"]("".concat(this.apiUrl, "/").concat(id));
          }
        }]);

        return ProductService;
      }();

      ProductService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ProductService);
      /***/
    },

    /***/
    "./src/app/services/productoNuevo.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/services/productoNuevo.service.ts ***!
      \***************************************************/

    /*! exports provided: NuevoProductoService */

    /***/
    function srcAppServicesProductoNuevoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NuevoProductoService", function () {
        return NuevoProductoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var NuevoProductoService = /*#__PURE__*/function () {
        function NuevoProductoService(http) {
          _classCallCheck(this, NuevoProductoService);

          this.http = http;
          this.apiUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/nuevoProducto");
        } // Método para crear un nuevo producto


        _createClass(NuevoProductoService, [{
          key: "crearProductoNuevo",
          value: function crearProductoNuevo(nuevoProducto) {
            return this.http.post(this.apiUrl, nuevoProducto);
          }
        }, {
          key: "updateProductoNuevo",
          value: function updateProductoNuevo(id, nuevoProducto) {
            return this.http.put("".concat(this.apiUrl, "/").concat(id), nuevoProducto);
          }
        }, {
          key: "deleteProductoNuevo",
          value: function deleteProductoNuevo(id) {
            return this.http["delete"]("".concat(this.apiUrl, "/").concat(id));
          }
        }, {
          key: "getProductoNuevoById",
          value: function getProductoNuevoById(id) {
            return this.http.get("".concat(this.apiUrl, "/").concat(id));
          }
        }, {
          key: "getAllProductoNuevo",
          value: function getAllProductoNuevo() {
            return this.http.get(this.apiUrl);
          }
        }]);

        return NuevoProductoService;
      }();

      NuevoProductoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      NuevoProductoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], NuevoProductoService);
      /***/
    },

    /***/
    "./src/app/services/quienesSomos.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/services/quienesSomos.service.ts ***!
      \**************************************************/

    /*! exports provided: SomosService */

    /***/
    function srcAppServicesQuienesSomosServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SomosService", function () {
        return SomosService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var SomosService = /*#__PURE__*/function () {
        function SomosService(http) {
          _classCallCheck(this, SomosService);

          this.http = http;
          this.apiUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/quienesSomos");
        }

        _createClass(SomosService, [{
          key: "getSomos",
          value: function getSomos() {
            return this.http.get(this.apiUrl);
          }
        }, {
          key: "eliminarSomos",
          value: function eliminarSomos(id) {
            return this.http["delete"]("".concat(this.apiUrl, "/").concat(id));
          }
        }, {
          key: "guardarSomos",
          value: function guardarSomos(somos) {
            return this.http.post(this.apiUrl, somos).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              console.error('Error al guardar el Quienes Somos:', error);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }));
          }
        }, {
          key: "obtenerSomos",
          value: function obtenerSomos(id) {
            return this.http.get("".concat(this.apiUrl, "/").concat(id));
          }
        }, {
          key: "editarSomos",
          value: function editarSomos(id, somos) {
            return this.http.put("".concat(this.apiUrl, "/").concat(id), somos);
          }
        }]);

        return SomosService;
      }();

      SomosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      SomosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], SomosService);
      /***/
    },

    /***/
    "./src/app/services/sorteo.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/sorteo.service.ts ***!
      \********************************************/

    /*! exports provided: SorteoService */

    /***/
    function srcAppServicesSorteoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SorteoService", function () {
        return SorteoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var SorteoService = /*#__PURE__*/function () {
        function SorteoService(http) {
          _classCallCheck(this, SorteoService);

          this.http = http;
          this.apiUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/sorteo");
        }

        _createClass(SorteoService, [{
          key: "getSorteo",
          value: function getSorteo() {
            return this.http.get(this.apiUrl);
          }
        }, {
          key: "eliminarSorteo",
          value: function eliminarSorteo(id) {
            return this.http["delete"]("".concat(this.apiUrl, "/").concat(id));
          }
        }, {
          key: "guardarSorteo",
          value: function guardarSorteo(sorteo) {
            return this.http.post(this.apiUrl, sorteo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              console.error('Error al guardar el sorteo:', error);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));
          }
        }, {
          key: "obtenerSorteo",
          value: function obtenerSorteo(id) {
            return this.http.get("".concat(this.apiUrl, "/").concat(id));
          }
        }, {
          key: "editarSorteo",
          value: function editarSorteo(id, sorteo) {
            return this.http.put("".concat(this.apiUrl, "/").concat(id), sorteo);
          }
        }]);

        return SorteoService;
      }();

      SorteoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      SorteoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], SorteoService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // apiUrl: 'http://localhost:5000'
        apiUrl: 'https://backpesca-1.onrender.com'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\chino\Desktop\FishingAdmin\administrador\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map