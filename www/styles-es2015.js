(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/global.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--14-3!./node_modules/sass-loader/dist/cjs.js??ref--14-4!./src/global.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\n/* Core CSS required for Ionic components to work properly */\nhtml.ios {\r\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\r\n}\nhtml.md {\r\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\r\n}\nhtml {\r\n  --ion-font-family: var(--ion-default-font);\r\n}\nbody {\r\n  background: var(--ion-background-color);\r\n}\nbody.backdrop-no-scroll {\r\n  overflow: hidden;\r\n}\nhtml.ios ion-modal.modal-card .ion-page > ion-header > ion-toolbar:first-of-type {\r\n  padding-top: 0px;\r\n}\nhtml.ios ion-modal .ion-page {\r\n  border-radius: inherit;\r\n}\n.ion-color-primary {\r\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\r\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\r\n}\n.ion-color-secondary {\r\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\r\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\r\n}\n.ion-color-tertiary {\r\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\r\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\r\n}\n.ion-color-success {\r\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\r\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\r\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\r\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\r\n}\n.ion-color-warning {\r\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\r\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\r\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\r\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\r\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\r\n}\n.ion-color-danger {\r\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\r\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\r\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\r\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\r\n}\n.ion-color-light {\r\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\r\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\r\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\r\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\r\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\r\n}\n.ion-color-medium {\r\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\r\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\r\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\r\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\r\n}\n.ion-color-dark {\r\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\r\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\r\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\r\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\r\n}\n.ion-page {\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  position: absolute;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  contain: layout size style;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n}\n.split-pane-visible > .ion-page.split-pane-main {\r\n  position: relative;\r\n}\nion-route,\r\nion-route-redirect,\r\nion-router,\r\nion-select-option,\r\nion-nav-controller,\r\nion-menu-controller,\r\nion-action-sheet-controller,\r\nion-alert-controller,\r\nion-loading-controller,\r\nion-modal-controller,\r\nion-picker-controller,\r\nion-popover-controller,\r\nion-toast-controller,\r\n.ion-page-hidden,\r\n[hidden] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  display: none !important;\r\n}\n.ion-page-invisible {\r\n  opacity: 0;\r\n}\n.can-go-back > ion-header ion-back-button {\r\n  display: block;\r\n}\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\r\n  --ion-statusbar-padding: 20px;\r\n}\n@supports (padding-top: 20px) {\r\n  html {\r\n    --ion-safe-area-top: var(--ion-statusbar-padding);\r\n  }\r\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: constant(safe-area-inset-top);\r\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\r\n    --ion-safe-area-left: constant(safe-area-inset-left);\r\n    --ion-safe-area-right: constant(safe-area-inset-right);\r\n  }\r\n}\n@supports (padding-top: env(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: env(safe-area-inset-top);\r\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\r\n    --ion-safe-area-left: env(safe-area-inset-left);\r\n    --ion-safe-area-right: env(safe-area-inset-right);\r\n  }\r\n}\nion-card.ion-color .ion-inherit-color,\r\nion-card-header.ion-color .ion-inherit-color {\r\n  color: inherit;\r\n}\n.menu-content {\r\n  transform: translate3d(0,  0,  0);\r\n}\n.menu-content-open {\r\n  cursor: pointer;\r\n  touch-action: manipulation;\r\n  pointer-events: none;\r\n}\n.ios .menu-content-reveal {\r\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\r\n}\n[dir=rtl].ios .menu-content-reveal {\r\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\r\n}\n.md .menu-content-reveal {\r\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\r\n}\n.md .menu-content-push {\r\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\r\n}\nion-input input::-webkit-date-and-time-value {\r\n  text-align: start;\r\n}\n/* Basic CSS for apps built with Ionic */\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  vertical-align: baseline;\r\n}\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\nimg {\r\n  max-width: 100%;\r\n  border: 0;\r\n}\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\nfigure {\r\n  margin: 1em 40px;\r\n}\nhr {\r\n  height: 1px;\r\n  border-width: 0;\r\n  box-sizing: content-box;\r\n}\npre {\r\n  overflow: auto;\r\n}\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\nlabel,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  line-height: normal;\r\n}\ntextarea {\r\n  overflow: auto;\r\n  height: auto;\r\n  font: inherit;\r\n  color: inherit;\r\n}\ntextarea::-moz-placeholder {\r\n  padding-left: 2px;\r\n}\ntextarea::placeholder {\r\n  padding-left: 2px;\r\n}\nform,\r\ninput,\r\noptgroup,\r\nselect {\r\n  margin: 0;\r\n  font: inherit;\r\n  color: inherit;\r\n}\nhtml input[type=button],\r\ninput[type=reset],\r\ninput[type=submit] {\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\na,\r\na div,\r\na span,\r\na ion-icon,\r\na ion-label,\r\nbutton,\r\nbutton div,\r\nbutton span,\r\nbutton ion-icon,\r\nbutton ion-label,\r\n.ion-tappable,\r\n[tappable],\r\n[tappable] div,\r\n[tappable] span,\r\n[tappable] ion-icon,\r\n[tappable] ion-label,\r\ninput,\r\ntextarea {\r\n  touch-action: manipulation;\r\n}\na ion-label,\r\nbutton ion-label {\r\n  pointer-events: none;\r\n}\nbutton {\r\n  border: 0;\r\n  border-radius: 0;\r\n  font-family: inherit;\r\n  font-style: inherit;\r\n  font-variant: inherit;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\n[tappable] {\r\n  cursor: pointer;\r\n}\na[disabled],\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\ninput[type=checkbox],\r\ninput[type=radio] {\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\ntd,\r\nth {\r\n  padding: 0;\r\n}\n* {\r\n  box-sizing: border-box;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-touch-callout: none;\r\n}\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-text-size-adjust: 100%;\r\n     -moz-text-size-adjust: 100%;\r\n          text-size-adjust: 100%;\r\n}\nhtml:not(.hydrated) body {\r\n  display: none;\r\n}\nhtml.plt-pwa {\r\n  height: 100vh;\r\n}\nbody {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  position: fixed;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  text-rendering: optimizeLegibility;\r\n  overflow: hidden;\r\n  touch-action: manipulation;\r\n  -webkit-user-drag: none;\r\n  -ms-content-zooming: none;\r\n  word-wrap: break-word;\r\n  overscroll-behavior-y: none;\r\n  -webkit-text-size-adjust: none;\r\n     -moz-text-size-adjust: none;\r\n          text-size-adjust: none;\r\n}\nhtml {\r\n  font-family: var(--ion-font-family);\r\n}\na {\r\n  background-color: transparent;\r\n  color: var(--ion-color-primary, #3880ff);\r\n}\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin-top: 16px;\r\n  margin-bottom: 10px;\r\n  font-weight: 500;\r\n  line-height: 1.2;\r\n}\nh1 {\r\n  margin-top: 20px;\r\n  font-size: 26px;\r\n}\nh2 {\r\n  margin-top: 18px;\r\n  font-size: 24px;\r\n}\nh3 {\r\n  font-size: 22px;\r\n}\nh4 {\r\n  font-size: 20px;\r\n}\nh5 {\r\n  font-size: 18px;\r\n}\nh6 {\r\n  font-size: 16px;\r\n}\nsmall {\r\n  font-size: 75%;\r\n}\nsub,\r\nsup {\r\n  position: relative;\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  vertical-align: baseline;\r\n}\nsup {\r\n  top: -0.5em;\r\n}\nsub {\r\n  bottom: -0.25em;\r\n}\n.ion-hide {\r\n  display: none !important;\r\n}\n.ion-hide-up {\r\n  display: none !important;\r\n}\n.ion-hide-down {\r\n  display: none !important;\r\n}\n@media (min-width: 576px) {\r\n  .ion-hide-sm-up {\r\n    display: none !important;\r\n  }\r\n}\n@media (max-width: 575.98px) {\r\n  .ion-hide-sm-down {\r\n    display: none !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-hide-md-up {\r\n    display: none !important;\r\n  }\r\n}\n@media (max-width: 767.98px) {\r\n  .ion-hide-md-down {\r\n    display: none !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-hide-lg-up {\r\n    display: none !important;\r\n  }\r\n}\n@media (max-width: 991.98px) {\r\n  .ion-hide-lg-down {\r\n    display: none !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-hide-xl-up {\r\n    display: none !important;\r\n  }\r\n}\n@media (max-width: 1199.98px) {\r\n  .ion-hide-xl-down {\r\n    display: none !important;\r\n  }\r\n}\n/* Optional CSS utils that can be commented out */\n.ion-no-padding {\r\n  --padding-start: 0;\r\n  --padding-end: 0;\r\n  --padding-top: 0;\r\n  --padding-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n}\n.ion-padding {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-padding {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-padding-top {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n}\n.ion-padding-start {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-padding-start {\r\n    padding-left: unset;\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-padding-end {\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-padding-end {\r\n    padding-right: unset;\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-padding-bottom {\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\n.ion-padding-vertical {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\n.ion-padding-horizontal {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-padding-horizontal {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-no-margin {\r\n  --margin-start: 0;\r\n  --margin-end: 0;\r\n  --margin-top: 0;\r\n  --margin-bottom: 0;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\n.ion-margin {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-margin {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-margin-top {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n}\n.ion-margin-start {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-margin-start {\r\n    margin-left: unset;\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-margin-end {\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-margin-end {\r\n    margin-right: unset;\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-margin-bottom {\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\n.ion-margin-vertical {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\n.ion-margin-horizontal {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-margin-horizontal {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-float-left {\r\n  float: left !important;\r\n}\n.ion-float-right {\r\n  float: right !important;\r\n}\n.ion-float-start {\r\n  float: left !important;\r\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\r\n  float: right !important;\r\n}\n.ion-float-end {\r\n  float: right !important;\r\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\r\n  float: left !important;\r\n}\n@media (min-width: 576px) {\r\n  .ion-float-sm-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-sm-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\r\n    float: left !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-float-md-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-md-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\r\n    float: left !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-float-lg-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-lg-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\r\n    float: left !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-float-xl-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-xl-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\r\n    float: left !important;\r\n  }\r\n}\n.ion-text-center {\r\n  text-align: center !important;\r\n}\n.ion-text-justify {\r\n  text-align: justify !important;\r\n}\n.ion-text-start {\r\n  text-align: start !important;\r\n}\n.ion-text-end {\r\n  text-align: end !important;\r\n}\n.ion-text-left {\r\n  text-align: left !important;\r\n}\n.ion-text-right {\r\n  text-align: right !important;\r\n}\n.ion-text-nowrap {\r\n  white-space: nowrap !important;\r\n}\n.ion-text-wrap {\r\n  white-space: normal !important;\r\n}\n@media (min-width: 576px) {\r\n  .ion-text-sm-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-sm-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-sm-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-sm-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-sm-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-sm-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-sm-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-sm-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-text-md-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-md-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-md-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-md-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-md-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-md-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-md-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-md-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-text-lg-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-lg-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-lg-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-lg-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-lg-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-lg-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-lg-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-lg-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-text-xl-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-xl-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-xl-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-xl-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-xl-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-xl-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-xl-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-xl-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\n.ion-text-uppercase {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: uppercase !important;\r\n}\n.ion-text-lowercase {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: lowercase !important;\r\n}\n.ion-text-capitalize {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: capitalize !important;\r\n}\n@media (min-width: 576px) {\r\n  .ion-text-sm-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-sm-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-sm-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-text-md-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-md-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-md-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-text-lg-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-lg-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-lg-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-text-xl-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-xl-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-xl-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n.ion-align-self-start {\r\n  align-self: flex-start !important;\r\n}\n.ion-align-self-end {\r\n  align-self: flex-end !important;\r\n}\n.ion-align-self-center {\r\n  align-self: center !important;\r\n}\n.ion-align-self-stretch {\r\n  align-self: stretch !important;\r\n}\n.ion-align-self-baseline {\r\n  align-self: baseline !important;\r\n}\n.ion-align-self-auto {\r\n  align-self: auto !important;\r\n}\n.ion-wrap {\r\n  flex-wrap: wrap !important;\r\n}\n.ion-nowrap {\r\n  flex-wrap: nowrap !important;\r\n}\n.ion-wrap-reverse {\r\n  flex-wrap: wrap-reverse !important;\r\n}\n.ion-justify-content-start {\r\n  justify-content: flex-start !important;\r\n}\n.ion-justify-content-center {\r\n  justify-content: center !important;\r\n}\n.ion-justify-content-end {\r\n  justify-content: flex-end !important;\r\n}\n.ion-justify-content-around {\r\n  justify-content: space-around !important;\r\n}\n.ion-justify-content-between {\r\n  justify-content: space-between !important;\r\n}\n.ion-justify-content-evenly {\r\n  justify-content: space-evenly !important;\r\n}\n.ion-align-items-start {\r\n  align-items: flex-start !important;\r\n}\n.ion-align-items-center {\r\n  align-items: center !important;\r\n}\n.ion-align-items-end {\r\n  align-items: flex-end !important;\r\n}\n.ion-align-items-stretch {\r\n  align-items: stretch !important;\r\n}\n.ion-align-items-baseline {\r\n  align-items: baseline !important;\r\n}\n/* Estilo para el contenedor de iconos */\n.ion-title-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/* Estilo para los iconos */\n.icon {\n  font-size: 30px;\n  /* Tamaño de fuente más grande */\n  margin-right: 10px;\n  /* Separación entre los iconos */\n}", "",{"version":3,"sources":["global.scss","../node_modules/@ionic/angular/src/css/core.scss","../node_modules/@ionic/angular/css/core.css","../node_modules/@ionic/angular/src/themes/ionic.mixins.scss","../node_modules/@ionic/angular/src/themes/ionic.globals.scss","../node_modules/@ionic/angular/src/components/menu/menu.ios.vars.scss","../node_modules/@ionic/angular/src/components/menu/menu.md.vars.scss","../node_modules/@ionic/angular/src/css/normalize.scss","../node_modules/@ionic/angular/css/normalize.css","../node_modules/@ionic/angular/src/css/structure.scss","../node_modules/@ionic/angular/css/structure.css","../node_modules/@ionic/angular/src/css/typography.scss","../node_modules/@ionic/angular/css/typography.css","../node_modules/@ionic/angular/src/css/display.scss","../node_modules/@ionic/angular/css/display.css","../node_modules/@ionic/angular/src/css/padding.scss","../node_modules/@ionic/angular/css/padding.css","../node_modules/@ionic/angular/src/css/float-elements.scss","../node_modules/@ionic/angular/css/float-elements.css","../node_modules/@ionic/angular/src/css/text-alignment.scss","../node_modules/@ionic/angular/css/text-alignment.css","../node_modules/@ionic/angular/src/css/text-transformation.scss","../node_modules/@ionic/angular/css/text-transformation.css","../node_modules/@ionic/angular/src/css/flex-utils.scss","../node_modules/@ionic/angular/css/flex-utils.css"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;;;;;;;;;EAAA;AAWA,4DAAA;ACHA;EACE,6FAAA;ACPF;ADSA;EACE,0DAAA;ACNF;ADSA;EACE,0CAAA;ACNF;ADSA;EACE,uCAAA;ACNF;ADSA;EACE,gBAAA;ACNF;ADmBA;EACE,gBAAA;AChBF;ADsBA;EACE,sBAAA;ACnBF;AD4CE;EATA,8DAAA;EACA,2EAAA;EACA,wEAAA;EACA,yFAAA;EACA,qEAAA;EACA,mEAAA;AC/BF;ADmCE;EATA,gEAAA;EACA,6EAAA;EACA,0EAAA;EACA,2FAAA;EACA,uEAAA;EACA,qEAAA;ACtBF;AD0BE;EATA,+DAAA;EACA,2EAAA;EACA,yEAAA;EACA,0FAAA;EACA,sEAAA;EACA,oEAAA;ACbF;ADiBE;EATA,8DAAA;EACA,2EAAA;EACA,wEAAA;EACA,yFAAA;EACA,qEAAA;EACA,mEAAA;ACJF;ADQE;EATA,8DAAA;EACA,0EAAA;EACA,wEAAA;EACA,mFAAA;EACA,qEAAA;EACA,mEAAA;ACKF;ADDE;EATA,6DAAA;EACA,yEAAA;EACA,uEAAA;EACA,wFAAA;EACA,oEAAA;EACA,kEAAA;ACcF;ADVE;EATA,4DAAA;EACA,0EAAA;EACA,sEAAA;EACA,iFAAA;EACA,mEAAA;EACA,iEAAA;ACuBF;ADnBE;EATA,6DAAA;EACA,2EAAA;EACA,uEAAA;EACA,wFAAA;EACA,oEAAA;EACA,kEAAA;ACgCF;AD5BE;EATA,2DAAA;EACA,sEAAA;EACA,qEAAA;EACA,sFAAA;EACA,kEAAA;EACA,gEAAA;ACyCF;AD5BA;EEuPM,OFtPuB;EEuPvB,QFvPiB;EEgRrB,MFhRkB;EEiRlB,SFjRwB;EAExB,aAAA;EACA,kBAAA;EAEA,sBAAA;EACA,8BAAA;EAEA,0BAAA;EACA,gBAAA;EACA,UGxC+B;AFuEjC;AD5BA;EACE,kBAAA;AC+BF;AD5BA;;;;;;;;;;;;;;;EAeE,yDAAA;EACA,wBAAA;AC+BF;AD5BA;EACE,UAAA;AC+BF;AD5BA;EACE,cAAA;AC+BF;ADxBA;EACE,6BAAA;AC2BF;ADxBA;EACE;IACE,iDAAA;EC2BF;AACF;ADvBA;EACE;IACE,kDAAA;IACA,wDAAA;IACA,oDAAA;IACA,sDAAA;ECyBF;AACF;ADtBA;EACE;IACE,6CAAA;IACA,mDAAA;IACA,+CAAA;IACA,iDAAA;ECwBF;AACF;ADjBA;;EAEE,cAAA;ACmBF;ADXA;EEkWM,iCAAA;ADnVN;ADXA;EACE,eAAA;EACA,0BAAA;EAIA,oBAAA;ACWF;ADRA;EACE,2CI7K+B;AHwLjC;ADRA;EACE,0CI9K+B;AHyLjC;ADJA;EACE,4CK5L8B;AJmMhC;ADJA;EACE,4CKhM8B;AJuMhC;ADDA;EACE,iBAAA;ACIF;AFtMA,wCAAA;AOPA;;;;EAIE,wBAAA;ACNF;ADWA;EACE,aAAA;EAEA,SAAA;ACTF;ADiBA;;EAEE,iBAAA;ACdF;ADsBA;EACE,eAAA;EAEA,SAAA;ACpBF;ADwBA;EACE,gBAAA;ACrBF;AD6BA;EACE,gBAAA;AC1BF;AD6BA;EACE,WAAA;EAEA,eAAA;EAEA,uBAAA;AC5BF;ADgCA;EACE,cAAA;AC7BF;ADiCA;;;;EAIE,iCAAA;EACA,cAAA;AC9BF;AD8CA;;;;EAIE,oBAAA;EACA,mBAAA;AC3CF;AD8CA;EACE,cAAA;EAEA,YAAA;EAEA,aAAA;EACA,cAAA;AC7CF;ADgDA;EACE,iBAAA;AC7CF;AD4CA;EACE,iBAAA;AC7CF;ADgDA;;;;EAIE,SAAA;EAEA,aAAA;EACA,cAAA;AC9CF;ADsDA;;;EAGE,eAAA;EAEA,0BAAA;ACpDF;ADwDA;;;;;;;;;;;;;;;;;;EAkBE,0BAAA;ACrDF;ADwDA;;EAEE,oBAAA;ACrDF;ADwDA;EACE,SAAA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,qBAAA;EACA,cAAA;EACA,oBAAA;EACA,eAAA;EAEA,0BAAA;ACtDF;ADyDA;EACE,eAAA;ACtDF;AD0DA;;;EAGE,eAAA;ACvDF;AD2DA;;EAEE,UAAA;EAEA,SAAA;ACzDF;AD+DA;;EAEE,UAAA;EAEA,sBAAA;AC7DF;ADmEA;;EAEE,YAAA;AChEF;ADsEA;;EAEE,wBAAA;ACnEF;AD2EA;EACE,yBAAA;EACA,iBAAA;ACxEF;AD2EA;;EAEE,UAAA;ACxEF;ACxJA;EACE,sBAAA;EAEA,6CAAA;EACA,wCAAA;EACA,2BAAA;ACTF;ADYA;EACE,WAAA;EACA,YAAA;EAEA,8BAAA;KAAA,2BAAA;UAAA,sBAAA;ACVF;ADaA;EACE,aAAA;ACVF;ADaA;EACE,aAAA;ACVF;ADaA;EN6CE,kCAAA;EACA,mCAAA;EAoKE,cMhNc;ENiNd,eMjNc;ENqPhB,aMrPgB;ENsPhB,gBMtPgB;ENgNd,eM/Me;ENgNf,gBMhNe;ENoPjB,cMpPiB;ENqPjB,iBMrPiB;EAEjB,eAAA;EAEA,WAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;EAEA,kCAAA;EAEA,gBAAA;EAEA,0BAAA;EAEA,uBAAA;EAEA,yBAAA;EAEA,qBAAA;EAEA,2BAAA;EAEA,8BAAA;KAAA,2BAAA;UAAA,sBAAA;ACbF;ACdA;EACE,mCAAA;AC9BF;ADiCA;EACE,6BAAA;EACA,wCAAA;AC9BF;ADiCA;;;;;;ER+OE,gBQzOgB;ER0OhB,mBQ1O4B;EAE5B,gBAxC6B;EA0C7B,gBAvC6B;ACQ/B;ADkCA;ERkOE,gBQjOgB;EAEhB,eA1C6B;ACS/B;ADoCA;ER4NE,gBQ3NgB;EAEhB,eA7C6B;ACU/B;ADsCA;EACE,eA9C6B;ACU/B;ADuCA;EACE,eA/C6B;ACW/B;ADuCA;EACE,eAhD6B;ACY/B;ADuCA;EACE,eAjD6B;ACa/B;ADuCA;EACE,cAAA;ACpCF;ADuCA;;EAEE,kBAAA;EAEA,cAAA;EAEA,cAAA;EAEA,wBAAA;ACvCF;AD0CA;EACE,WAAA;ACvCF;AD0CA;EACE,eAAA;ACvCF;ACtDA;EACE,wBAAA;ACPF;ADiBI;EACE,wBAAA;ACdN;ADqBI;EACE,wBAAA;AClBN;AXsHI;EU7GA;IACE,wBAAA;ECLJ;AACF;AXyJI;EU9IA;IACE,wBAAA;ECRJ;AACF;AX2GI;EU7GA;IACE,wBAAA;ECKJ;AACF;AX+II;EU9IA;IACE,wBAAA;ECEJ;AACF;AXiGI;EU7GA;IACE,wBAAA;ECeJ;AACF;AXqII;EU9IA;IACE,wBAAA;ECYJ;AACF;AXuFI;EU7GA;IACE,wBAAA;ECyBJ;AACF;AX2HI;EU9IA;IACE,wBAAA;ECsBJ;AACF;Ad/BA,iDAAA;AeJA;EACE,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EZ8NE,eY5Ne;EZ6Nf,gBY7Ne;EZiQjB,cYjQiB;EZkQjB,iBYlQiB;ACbnB;ADgBA;EACE,yCAAA;EACA,uCAAA;EACA,uCAAA;EACA,0CAAA;EZyNE,sCY5OM;EZ6ON,uCY7OM;EZ6QR,qCY7QQ;EZ8QR,wCY9QQ;ACUV;AbsOM;EACE;IAEI,mBAAA;IAGA,oBAAA;IAIF,8CY1PA;IZ4PA,4CY5PA;ECmBR;AACF;ADIA;EACE,uCAAA;EZoPA,qCY7QQ;ACyBV;ADKA;EACE,yCAAA;EZ6ME,sCY5OM;AC6BV;AbmNM;EACE;IAEI,mBAAA;IAOF,8CY1PA;ECmCR;AACF;ADAA;EACE,uCAAA;EZwME,uCY7OM;ACyCV;AbuMM;EACE;IAKI,oBAAA;IAMF,4CY5PA;EC+CR;AACF;ADNA;EACE,0CAAA;EZmOA,wCY9QQ;ACqDV;ADLA;EACE,uCAAA;EACA,0CAAA;EZ2NA,qCY7QQ;EZ8QR,wCY9QQ;AC2DV;ADJA;EACE,yCAAA;EACA,uCAAA;EZmLE,sCY5OM;EZ6ON,uCY7OM;ACiEV;Ab+KM;EACE;IAEI,mBAAA;IAGA,oBAAA;IAIF,8CY1PA;IZ4PA,4CY5PA;EC0ER;AACF;ADTA;EACE,iBAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;EZkKE,cYhKc;EZiKd,eYjKc;EZqMhB,aYrMgB;EZsMhB,gBYtMgB;ACclB;ADXA;EACE,uCAAA;EACA,qCAAA;EACA,qCAAA;EACA,wCAAA;EZ6JE,oCY3OK;EZ4OL,qCY5OK;EZ4QP,mCY5QO;EZ6QP,sCY7QO;ACgGT;Ab+IM;EACE;IAEI,kBAAA;IAGA,mBAAA;IAIF,4CYzPD;IZ2PC,0CY3PD;ECyGP;AACF;ADvBA;EACE,qCAAA;EZwLA,mCY5QO;AC+GT;ADtBA;EACE,uCAAA;EZiJE,oCY3OK;ACmHT;Ab4HM;EACE;IAEI,kBAAA;IAOF,4CYzPD;ECyHP;AACF;AD3BA;EACE,qCAAA;EZ4IE,qCY5OK;AC+HT;AbgHM;EACE;IAKI,mBAAA;IAMF,0CY3PD;ECqIP;AACF;ADjCA;EACE,wCAAA;EZuKA,sCY7QO;AC2IT;ADhCA;EACE,qCAAA;EACA,wCAAA;EZ+JA,mCY5QO;EZ6QP,sCY7QO;ACiJT;AD/BA;EACE,uCAAA;EACA,qCAAA;EZuHE,oCY3OK;EZ4OL,qCY5OK;ACuJT;AbwFM;EACE;IAEI,kBAAA;IAGA,mBAAA;IAIF,4CYzPD;IZ2PC,0CY3PD;ECgKP;AACF;AC9JI;EdmaE,sBAAA;Ae/aN;ADgBI;Ed+ZE,uBAAA;Ae3aN;ADgBI;Ed6YE,sBAAA;AezZN;Af4LW;EAgOL,uBAAA;AezZN;ADaI;EdgZE,uBAAA;AezZN;AfqLW;EAuOL,sBAAA;AezZN;Af4GI;EclHA;IdmaE,sBAAA;EexZJ;;EDPE;Id+ZE,uBAAA;EepZJ;;EDPE;Id6YE,sBAAA;EelYJ;EfqKS;IAgOL,uBAAA;EelYJ;;EDVE;IdgZE,uBAAA;EelYJ;Ef8JS;IAuOL,sBAAA;EelYJ;AACF;AfoFI;EclHA;IdmaE,sBAAA;EejYJ;;ED9BE;Id+ZE,uBAAA;Ee7XJ;;ED9BE;Id6YE,sBAAA;Ee3WJ;Ef8IS;IAgOL,uBAAA;Ee3WJ;;EDjCE;IdgZE,uBAAA;Ee3WJ;EfuIS;IAuOL,sBAAA;Ee3WJ;AACF;Af6DI;EclHA;IdmaE,sBAAA;Ee1WJ;;EDrDE;Id+ZE,uBAAA;EetWJ;;EDrDE;Id6YE,sBAAA;EepVJ;EfuHS;IAgOL,uBAAA;EepVJ;;EDxDE;IdgZE,uBAAA;EepVJ;EfgHS;IAuOL,sBAAA;EepVJ;AACF;AfsCI;EclHA;IdmaE,sBAAA;EenVJ;;ED5EE;Id+ZE,uBAAA;Ee/UJ;;ED5EE;Id6YE,sBAAA;Ee7TJ;EfgGS;IAgOL,uBAAA;Ee7TJ;;ED/EE;IdgZE,uBAAA;Ee7TJ;EfyFS;IAuOL,sBAAA;Ee7TJ;AACF;ACnGI;EACE,6BAAA;ACbN;ADgBI;EACE,8BAAA;ACbN;ADgBI;EACE,4BAAA;ACbN;ADgBI;EACE,0BAAA;ACbN;ADgBI;EACE,2BAAA;ACbN;ADgBI;EACE,4BAAA;ACbN;ADgBI;EACE,8BAAA;ACbN;ADgBI;EACE,8BAAA;ACbN;AjBkGI;EgBlHA;IACE,6BAAA;ECoBJ;;EDjBE;IACE,8BAAA;ECoBJ;;EDjBE;IACE,4BAAA;ECoBJ;;EDjBE;IACE,0BAAA;ECoBJ;;EDjBE;IACE,2BAAA;ECoBJ;;EDjBE;IACE,4BAAA;ECoBJ;;EDjBE;IACE,8BAAA;ECoBJ;;EDjBE;IACE,8BAAA;ECoBJ;AACF;AjBgEI;EgBlHA;IACE,6BAAA;ECqDJ;;EDlDE;IACE,8BAAA;ECqDJ;;EDlDE;IACE,4BAAA;ECqDJ;;EDlDE;IACE,0BAAA;ECqDJ;;EDlDE;IACE,2BAAA;ECqDJ;;EDlDE;IACE,4BAAA;ECqDJ;;EDlDE;IACE,8BAAA;ECqDJ;;EDlDE;IACE,8BAAA;ECqDJ;AACF;AjB+BI;EgBlHA;IACE,6BAAA;ECsFJ;;EDnFE;IACE,8BAAA;ECsFJ;;EDnFE;IACE,4BAAA;ECsFJ;;EDnFE;IACE,0BAAA;ECsFJ;;EDnFE;IACE,2BAAA;ECsFJ;;EDnFE;IACE,4BAAA;ECsFJ;;EDnFE;IACE,8BAAA;ECsFJ;;EDnFE;IACE,8BAAA;ECsFJ;AACF;AjBFI;EgBlHA;IACE,6BAAA;ECuHJ;;EDpHE;IACE,8BAAA;ECuHJ;;EDpHE;IACE,4BAAA;ECuHJ;;EDpHE;IACE,0BAAA;ECuHJ;;EDpHE;IACE,2BAAA;ECuHJ;;EDpHE;IACE,4BAAA;ECuHJ;;EDpHE;IACE,8BAAA;ECuHJ;;EDpHE;IACE,8BAAA;ECuHJ;AACF;ACrJI;EACE,yDAAA;EACA,oCAAA;ACbN;ADgBI;EACE,yDAAA;EACA,oCAAA;ACbN;ADgBI;EACE,yDAAA;EACA,qCAAA;ACbN;AnBmHI;EkBlHA;IACE,yDAAA;IACA,oCAAA;ECGJ;;EDAE;IACE,yDAAA;IACA,oCAAA;ECGJ;;EDAE;IACE,yDAAA;IACA,qCAAA;ECGJ;AACF;AnBkGI;EkBlHA;IACE,yDAAA;IACA,oCAAA;ECmBJ;;EDhBE;IACE,yDAAA;IACA,oCAAA;ECmBJ;;EDhBE;IACE,yDAAA;IACA,qCAAA;ECmBJ;AACF;AnBkFI;EkBlHA;IACE,yDAAA;IACA,oCAAA;ECmCJ;;EDhCE;IACE,yDAAA;IACA,oCAAA;ECmCJ;;EDhCE;IACE,yDAAA;IACA,qCAAA;ECmCJ;AACF;AnBkEI;EkBlHA;IACE,yDAAA;IACA,oCAAA;ECmDJ;;EDhDE;IACE,yDAAA;IACA,oCAAA;ECmDJ;;EDhDE;IACE,yDAAA;IACA,qCAAA;ECmDJ;AACF;ACtEA;EACE,iCAAA;ACPF;ADUA;EACE,+BAAA;ACPF;ADUA;EACE,6BAAA;ACPF;ADUA;EACE,8BAAA;ACPF;ADUA;EACE,+BAAA;ACPF;ADUA;EACE,2BAAA;ACPF;ADcA;EACE,0BAAA;ACXF;ADcA;EACE,4BAAA;ACXF;ADcA;EACE,kCAAA;ACXF;ADkBA;EACE,sCAAA;ACfF;ADkBA;EACE,kCAAA;ACfF;ADkBA;EACE,oCAAA;ACfF;ADkBA;EACE,wCAAA;ACfF;ADkBA;EACE,yCAAA;ACfF;ADkBA;EACE,wCAAA;ACfF;ADsBA;EACE,kCAAA;ACnBF;ADsBA;EACE,8BAAA;ACnBF;ADsBA;EACE,gCAAA;ACnBF;ADsBA;EACE,+BAAA;ACnBF;ADsBA;EACE,gCAAA;ACnBF;AxBnDA,wCAAA;AACA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AAFJ;AAKA,2BAAA;AACA;EACI,eAAA;EAAiB,gCAAA;EACjB,kBAAA;EAAoB,gCAAA;AAAxB","file":"global.scss","sourcesContent":["@charset \"UTF-8\";\n/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\n/* Core CSS required for Ionic components to work properly */\n@import \"~@ionic/angular/css/core.css\";\n/* Basic CSS for apps built with Ionic */\n@import \"~@ionic/angular/css/normalize.css\";\n@import \"~@ionic/angular/css/structure.css\";\n@import \"~@ionic/angular/css/typography.css\";\n@import '~@ionic/angular/css/display.css';\n/* Optional CSS utils that can be commented out */\n@import \"~@ionic/angular/css/padding.css\";\n@import \"~@ionic/angular/css/float-elements.css\";\n@import \"~@ionic/angular/css/text-alignment.css\";\n@import \"~@ionic/angular/css/text-transformation.css\";\n@import \"~@ionic/angular/css/flex-utils.css\";\n/* Estilo para el contenedor de iconos */\n.ion-title-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Estilo para los iconos */\n.icon {\n  font-size: 30px;\n  /* Tamaño de fuente más grande */\n  margin-right: 10px;\n  /* Separación entre los iconos */\n}",null,"html.ios {\r\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\r\n}\r\n\r\nhtml.md {\r\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\nhtml {\r\n  --ion-font-family: var(--ion-default-font);\r\n}\r\n\r\nbody {\r\n  background: var(--ion-background-color);\r\n}\r\n\r\nbody.backdrop-no-scroll {\r\n  overflow: hidden;\r\n}\r\n\r\nhtml.ios ion-modal.modal-card .ion-page > ion-header > ion-toolbar:first-of-type {\r\n  padding-top: 0px;\r\n}\r\n\r\nhtml.ios ion-modal .ion-page {\r\n  border-radius: inherit;\r\n}\r\n\r\n.ion-color-primary {\r\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\r\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\r\n}\r\n\r\n.ion-color-secondary {\r\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\r\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\r\n}\r\n\r\n.ion-color-tertiary {\r\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\r\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\r\n}\r\n\r\n.ion-color-success {\r\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\r\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\r\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\r\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\r\n}\r\n\r\n.ion-color-warning {\r\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\r\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\r\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\r\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\r\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\r\n}\r\n\r\n.ion-color-danger {\r\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\r\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\r\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\r\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\r\n}\r\n\r\n.ion-color-light {\r\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\r\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\r\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\r\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\r\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\r\n}\r\n\r\n.ion-color-medium {\r\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\r\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\r\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\r\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\r\n}\r\n\r\n.ion-color-dark {\r\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\r\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\r\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\r\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\r\n}\r\n\r\n.ion-page {\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  position: absolute;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  contain: layout size style;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n}\r\n\r\n.split-pane-visible > .ion-page.split-pane-main {\r\n  position: relative;\r\n}\r\n\r\nion-route,\r\nion-route-redirect,\r\nion-router,\r\nion-select-option,\r\nion-nav-controller,\r\nion-menu-controller,\r\nion-action-sheet-controller,\r\nion-alert-controller,\r\nion-loading-controller,\r\nion-modal-controller,\r\nion-picker-controller,\r\nion-popover-controller,\r\nion-toast-controller,\r\n.ion-page-hidden,\r\n[hidden] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  display: none !important;\r\n}\r\n\r\n.ion-page-invisible {\r\n  opacity: 0;\r\n}\r\n\r\n.can-go-back > ion-header ion-back-button {\r\n  display: block;\r\n}\r\n\r\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\r\n  --ion-statusbar-padding: 20px;\r\n}\r\n\r\n@supports (padding-top: 20px) {\r\n  html {\r\n    --ion-safe-area-top: var(--ion-statusbar-padding);\r\n  }\r\n}\r\n@supports (padding-top: constant(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: constant(safe-area-inset-top);\r\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\r\n    --ion-safe-area-left: constant(safe-area-inset-left);\r\n    --ion-safe-area-right: constant(safe-area-inset-right);\r\n  }\r\n}\r\n@supports (padding-top: env(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: env(safe-area-inset-top);\r\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\r\n    --ion-safe-area-left: env(safe-area-inset-left);\r\n    --ion-safe-area-right: env(safe-area-inset-right);\r\n  }\r\n}\r\nion-card.ion-color .ion-inherit-color,\r\nion-card-header.ion-color .ion-inherit-color {\r\n  color: inherit;\r\n}\r\n\r\n.menu-content {\r\n  transform: translate3d(0,  0,  0);\r\n}\r\n\r\n.menu-content-open {\r\n  cursor: pointer;\r\n  touch-action: manipulation;\r\n  pointer-events: none;\r\n}\r\n\r\n.ios .menu-content-reveal {\r\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n[dir=rtl].ios .menu-content-reveal {\r\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.md .menu-content-reveal {\r\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\r\n}\r\n\r\n.md .menu-content-push {\r\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\r\n}\r\n\r\nion-input input::-webkit-date-and-time-value {\r\n  text-align: start;\r\n}\r\n\r\n/*# sourceMappingURL=core.css.map */\r\n",null,null,null,null,null,"audio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  vertical-align: baseline;\r\n}\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  border: 0;\r\n}\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\nfigure {\r\n  margin: 1em 40px;\r\n}\r\n\r\nhr {\r\n  height: 1px;\r\n  border-width: 0;\r\n  box-sizing: content-box;\r\n}\r\n\r\npre {\r\n  overflow: auto;\r\n}\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\n\r\nlabel,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  line-height: normal;\r\n}\r\n\r\ntextarea {\r\n  overflow: auto;\r\n  height: auto;\r\n  font: inherit;\r\n  color: inherit;\r\n}\r\n\r\ntextarea::placeholder {\r\n  padding-left: 2px;\r\n}\r\n\r\nform,\r\ninput,\r\noptgroup,\r\nselect {\r\n  margin: 0;\r\n  font: inherit;\r\n  color: inherit;\r\n}\r\n\r\nhtml input[type=button],\r\ninput[type=reset],\r\ninput[type=submit] {\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\r\n\r\na,\r\na div,\r\na span,\r\na ion-icon,\r\na ion-label,\r\nbutton,\r\nbutton div,\r\nbutton span,\r\nbutton ion-icon,\r\nbutton ion-label,\r\n.ion-tappable,\r\n[tappable],\r\n[tappable] div,\r\n[tappable] span,\r\n[tappable] ion-icon,\r\n[tappable] ion-label,\r\ninput,\r\ntextarea {\r\n  touch-action: manipulation;\r\n}\r\n\r\na ion-label,\r\nbutton ion-label {\r\n  pointer-events: none;\r\n}\r\n\r\nbutton {\r\n  border: 0;\r\n  border-radius: 0;\r\n  font-family: inherit;\r\n  font-style: inherit;\r\n  font-variant: inherit;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\r\n\r\n[tappable] {\r\n  cursor: pointer;\r\n}\r\n\r\na[disabled],\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\ninput[type=checkbox],\r\ninput[type=radio] {\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\ntd,\r\nth {\r\n  padding: 0;\r\n}\r\n\r\n/*# sourceMappingURL=normalize.css.map */\r\n",null,"* {\r\n  box-sizing: border-box;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-touch-callout: none;\r\n}\r\n\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  text-size-adjust: 100%;\r\n}\r\n\r\nhtml:not(.hydrated) body {\r\n  display: none;\r\n}\r\n\r\nhtml.plt-pwa {\r\n  height: 100vh;\r\n}\r\n\r\nbody {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  position: fixed;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  text-rendering: optimizeLegibility;\r\n  overflow: hidden;\r\n  touch-action: manipulation;\r\n  -webkit-user-drag: none;\r\n  -ms-content-zooming: none;\r\n  word-wrap: break-word;\r\n  overscroll-behavior-y: none;\r\n  text-size-adjust: none;\r\n}\r\n\r\n/*# sourceMappingURL=structure.css.map */\r\n",null,"html {\r\n  font-family: var(--ion-font-family);\r\n}\r\n\r\na {\r\n  background-color: transparent;\r\n  color: var(--ion-color-primary, #3880ff);\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin-top: 16px;\r\n  margin-bottom: 10px;\r\n  font-weight: 500;\r\n  line-height: 1.2;\r\n}\r\nh1 {\r\n  margin-top: 20px;\r\n  font-size: 26px;\r\n}\r\nh2 {\r\n  margin-top: 18px;\r\n  font-size: 24px;\r\n}\r\nh3 {\r\n  font-size: 22px;\r\n}\r\n\r\nh4 {\r\n  font-size: 20px;\r\n}\r\n\r\nh5 {\r\n  font-size: 18px;\r\n}\r\n\r\nh6 {\r\n  font-size: 16px;\r\n}\r\n\r\nsmall {\r\n  font-size: 75%;\r\n}\r\n\r\nsub,\r\nsup {\r\n  position: relative;\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\n/*# sourceMappingURL=typography.css.map */\r\n",null,".ion-hide {\r\n  display: none !important;\r\n}\r\n\r\n.ion-hide-up {\r\n  display: none !important;\r\n}\r\n\r\n.ion-hide-down {\r\n  display: none !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ion-hide-sm-up {\r\n    display: none !important;\r\n  }\r\n}\r\n@media (max-width: 575.98px) {\r\n  .ion-hide-sm-down {\r\n    display: none !important;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .ion-hide-md-up {\r\n    display: none !important;\r\n  }\r\n}\r\n@media (max-width: 767.98px) {\r\n  .ion-hide-md-down {\r\n    display: none !important;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .ion-hide-lg-up {\r\n    display: none !important;\r\n  }\r\n}\r\n@media (max-width: 991.98px) {\r\n  .ion-hide-lg-down {\r\n    display: none !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .ion-hide-xl-up {\r\n    display: none !important;\r\n  }\r\n}\r\n@media (max-width: 1199.98px) {\r\n  .ion-hide-xl-down {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=display.css.map */\r\n",null,".ion-no-padding {\r\n  --padding-start: 0;\r\n  --padding-end: 0;\r\n  --padding-top: 0;\r\n  --padding-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n}\r\n\r\n.ion-padding {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-padding {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\r\n\r\n.ion-padding-top {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n}\r\n.ion-padding-start {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-padding-start {\r\n    padding-left: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n  }\r\n}\r\n\r\n.ion-padding-end {\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-padding-end {\r\n    padding-right: unset;\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\r\n\r\n.ion-padding-bottom {\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\r\n.ion-padding-vertical {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\r\n.ion-padding-horizontal {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-padding-horizontal {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\r\n\r\n.ion-no-margin {\r\n  --margin-start: 0;\r\n  --margin-end: 0;\r\n  --margin-top: 0;\r\n  --margin-bottom: 0;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.ion-margin {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-margin {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\r\n\r\n.ion-margin-top {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n}\r\n.ion-margin-start {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-margin-start {\r\n    margin-left: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n  }\r\n}\r\n\r\n.ion-margin-end {\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-margin-end {\r\n    margin-right: unset;\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\r\n\r\n.ion-margin-bottom {\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\r\n.ion-margin-vertical {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\r\n.ion-margin-horizontal {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-margin-horizontal {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=padding.css.map */\r\n",null,".ion-float-left {\r\n  float: left !important;\r\n}\r\n\r\n.ion-float-right {\r\n  float: right !important;\r\n}\r\n\r\n.ion-float-start {\r\n  float: left !important;\r\n}\r\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\r\n  float: right !important;\r\n}\r\n\r\n.ion-float-end {\r\n  float: right !important;\r\n}\r\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\r\n  float: left !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ion-float-sm-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-sm-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\r\n    float: left !important;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .ion-float-md-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-md-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\r\n    float: left !important;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .ion-float-lg-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-lg-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\r\n    float: left !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .ion-float-xl-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-xl-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\r\n    float: left !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=float-elements.css.map */\r\n",null,".ion-text-center {\r\n  text-align: center !important;\r\n}\r\n\r\n.ion-text-justify {\r\n  text-align: justify !important;\r\n}\r\n\r\n.ion-text-start {\r\n  text-align: start !important;\r\n}\r\n\r\n.ion-text-end {\r\n  text-align: end !important;\r\n}\r\n\r\n.ion-text-left {\r\n  text-align: left !important;\r\n}\r\n\r\n.ion-text-right {\r\n  text-align: right !important;\r\n}\r\n\r\n.ion-text-nowrap {\r\n  white-space: nowrap !important;\r\n}\r\n\r\n.ion-text-wrap {\r\n  white-space: normal !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ion-text-sm-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-sm-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-sm-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-sm-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-sm-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-sm-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-sm-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-sm-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .ion-text-md-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-md-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-md-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-md-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-md-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-md-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-md-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-md-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .ion-text-lg-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-lg-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-lg-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-lg-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-lg-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-lg-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-lg-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-lg-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .ion-text-xl-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-xl-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-xl-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-xl-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-xl-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-xl-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-xl-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-xl-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=text-alignment.css.map */\r\n",null,".ion-text-uppercase {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: uppercase !important;\r\n}\r\n\r\n.ion-text-lowercase {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: lowercase !important;\r\n}\r\n\r\n.ion-text-capitalize {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: capitalize !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ion-text-sm-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-sm-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-sm-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .ion-text-md-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-md-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-md-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .ion-text-lg-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-lg-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-lg-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .ion-text-xl-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-xl-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-xl-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=text-transformation.css.map */\r\n",null,".ion-align-self-start {\r\n  align-self: flex-start !important;\r\n}\r\n\r\n.ion-align-self-end {\r\n  align-self: flex-end !important;\r\n}\r\n\r\n.ion-align-self-center {\r\n  align-self: center !important;\r\n}\r\n\r\n.ion-align-self-stretch {\r\n  align-self: stretch !important;\r\n}\r\n\r\n.ion-align-self-baseline {\r\n  align-self: baseline !important;\r\n}\r\n\r\n.ion-align-self-auto {\r\n  align-self: auto !important;\r\n}\r\n\r\n.ion-wrap {\r\n  flex-wrap: wrap !important;\r\n}\r\n\r\n.ion-nowrap {\r\n  flex-wrap: nowrap !important;\r\n}\r\n\r\n.ion-wrap-reverse {\r\n  flex-wrap: wrap-reverse !important;\r\n}\r\n\r\n.ion-justify-content-start {\r\n  justify-content: flex-start !important;\r\n}\r\n\r\n.ion-justify-content-center {\r\n  justify-content: center !important;\r\n}\r\n\r\n.ion-justify-content-end {\r\n  justify-content: flex-end !important;\r\n}\r\n\r\n.ion-justify-content-around {\r\n  justify-content: space-around !important;\r\n}\r\n\r\n.ion-justify-content-between {\r\n  justify-content: space-between !important;\r\n}\r\n\r\n.ion-justify-content-evenly {\r\n  justify-content: space-evenly !important;\r\n}\r\n\r\n.ion-align-items-start {\r\n  align-items: flex-start !important;\r\n}\r\n\r\n.ion-align-items-center {\r\n  align-items: center !important;\r\n}\r\n\r\n.ion-align-items-end {\r\n  align-items: flex-end !important;\r\n}\r\n\r\n.ion-align-items-stretch {\r\n  align-items: stretch !important;\r\n}\r\n\r\n.ion-align-items-baseline {\r\n  align-items: baseline !important;\r\n}\r\n\r\n/*# sourceMappingURL=flex-utils.css.map */\r\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/theme/variables.scss":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--14-3!./node_modules/sass-loader/dist/cjs.js??ref--14-4!./src/theme/variables.scss ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n@media (prefers-color-scheme: light) {\n  /*\n   * Soft Light Colors\n   * -------------------------------------------\n   */\n  body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66, 140, 255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255, 255, 255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n    /* ... (otras variables personalizadas) ... */\n    --ion-color-light: #f5f5f5;\n    /* Fondo suave, menos brillante */\n    --ion-color-light-rgb: 245, 245, 245;\n    --ion-color-light-contrast: #333333;\n    /* Texto oscuro sobre fondo claro */\n    --ion-color-light-contrast-rgb: 51, 51, 51;\n    --ion-color-light-shade: #dcdcdc;\n    --ion-color-light-tint: #f8f8f8;\n  }\n\n  .ios body {\n    --ion-background-color: #f5f5f5;\n    /* Fondo para iOS */\n    --ion-background-color-rgb: 245, 245, 245;\n    /* ... (ajustes para tema suave claro de iOS) ... */\n  }\n\n  .md body {\n    --ion-background-color: #f5f5f5;\n    /* Fondo para Material Design */\n    --ion-background-color-rgb: 245, 245, 245;\n    /* ... (ajustes para tema suave claro de Material Design) ... */\n  }\n}", "",{"version":3,"sources":["variables.scss"],"names":[],"mappings":"AAGA,0BAAA;AACA;EACE,cAAA;EACA,4BAAA;EACA,qCAAA;EACA,qCAAA;EACA,+CAAA;EACA,kCAAA;EACA,iCAAA;EAEA,gBAAA;EACA,8BAAA;EACA,uCAAA;EACA,uCAAA;EACA,iDAAA;EACA,oCAAA;EACA,mCAAA;EAEA,eAAA;EACA,6BAAA;EACA,qCAAA;EACA,sCAAA;EACA,gDAAA;EACA,mCAAA;EACA,kCAAA;EAEA,cAAA;EACA,4BAAA;EACA,qCAAA;EACA,qCAAA;EACA,+CAAA;EACA,kCAAA;EACA,iCAAA;EAEA,cAAA;EACA,4BAAA;EACA,oCAAA;EACA,qCAAA;EACA,yCAAA;EACA,kCAAA;EACA,iCAAA;EAEA,aAAA;EACA,2BAAA;EACA,mCAAA;EACA,oCAAA;EACA,8CAAA;EACA,iCAAA;EACA,gCAAA;EAEA,WAAA;EACA,yBAAA;EACA,gCAAA;EACA,kCAAA;EACA,4CAAA;EACA,+BAAA;EACA,8BAAA;EAEA,aAAA;EACA,2BAAA;EACA,qCAAA;EACA,oCAAA;EACA,8CAAA;EACA,iCAAA;EACA,gCAAA;EAEA,YAAA;EACA,0BAAA;EACA,oCAAA;EACA,mCAAA;EACA,uCAAA;EACA,gCAAA;EACA,+BAAA;AAVF;AAaA;EACE;;;IAAA;EAKA;IACE,4BAAA;IACA,qCAAA;IACA,qCAAA;IACA,+CAAA;IACA,kCAAA;IACA,iCAAA;IAEA,6CAAA;IAEA,0BAAA;IAA4B,iCAAA;IAC5B,oCAAA;IACA,mCAAA;IAAqC,mCAAA;IACrC,0CAAA;IACA,gCAAA;IACA,+BAAA;EAXF;;EAcA;IACE,+BAAA;IAAiC,mBAAA;IACjC,yCAAA;IAEA,mDAAA;EAXF;;EAcA;IACE,+BAAA;IAAiC,+BAAA;IACjC,yCAAA;IAEA,+DAAA;EAXF;AACF","file":"variables.scss","sourcesContent":["// Ionic Variables and Theming. For more info, please see:\r\n// http://ionicframework.com/docs/theming/\r\n\r\n/** Ionic CSS Variables **/\r\n:root {\r\n  /** primary **/\r\n  --ion-color-primary: #3880ff;\r\n  --ion-color-primary-rgb: 56, 128, 255;\r\n  --ion-color-primary-contrast: #ffffff;\r\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\r\n  --ion-color-primary-shade: #3171e0;\r\n  --ion-color-primary-tint: #4c8dff;\r\n\r\n  /** secondary **/\r\n  --ion-color-secondary: #3dc2ff;\r\n  --ion-color-secondary-rgb: 61, 194, 255;\r\n  --ion-color-secondary-contrast: #ffffff;\r\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\r\n  --ion-color-secondary-shade: #36abe0;\r\n  --ion-color-secondary-tint: #50c8ff;\r\n\r\n  /** tertiary **/\r\n  --ion-color-tertiary: #5260ff;\r\n  --ion-color-tertiary-rgb: 82, 96, 255;\r\n  --ion-color-tertiary-contrast: #ffffff;\r\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\r\n  --ion-color-tertiary-shade: #4854e0;\r\n  --ion-color-tertiary-tint: #6370ff;\r\n\r\n  /** success **/\r\n  --ion-color-success: #2dd36f;\r\n  --ion-color-success-rgb: 45, 211, 111;\r\n  --ion-color-success-contrast: #ffffff;\r\n  --ion-color-success-contrast-rgb: 255, 255, 255;\r\n  --ion-color-success-shade: #28ba62;\r\n  --ion-color-success-tint: #42d77d;\r\n\r\n  /** warning **/\r\n  --ion-color-warning: #ffc409;\r\n  --ion-color-warning-rgb: 255, 196, 9;\r\n  --ion-color-warning-contrast: #000000;\r\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\r\n  --ion-color-warning-shade: #e0ac08;\r\n  --ion-color-warning-tint: #ffca22;\r\n\r\n  /** danger **/\r\n  --ion-color-danger: #eb445a;\r\n  --ion-color-danger-rgb: 235, 68, 90;\r\n  --ion-color-danger-contrast: #ffffff;\r\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\r\n  --ion-color-danger-shade: #cf3c4f;\r\n  --ion-color-danger-tint: #ed576b;\r\n\r\n  /** dark **/\r\n  --ion-color-dark: #222428;\r\n  --ion-color-dark-rgb: 34, 36, 40;\r\n  --ion-color-dark-contrast: #ffffff;\r\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\r\n  --ion-color-dark-shade: #1e2023;\r\n  --ion-color-dark-tint: #383a3e;\r\n\r\n  /** medium **/\r\n  --ion-color-medium: #92949c;\r\n  --ion-color-medium-rgb: 146, 148, 156;\r\n  --ion-color-medium-contrast: #ffffff;\r\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\r\n  --ion-color-medium-shade: #808289;\r\n  --ion-color-medium-tint: #9d9fa6;\r\n\r\n  /** light **/\r\n  --ion-color-light: #f4f5f8;\r\n  --ion-color-light-rgb: 244, 245, 248;\r\n  --ion-color-light-contrast: #000000;\r\n  --ion-color-light-contrast-rgb: 0, 0, 0;\r\n  --ion-color-light-shade: #d7d8da;\r\n  --ion-color-light-tint: #f5f6f9;\r\n}\r\n\r\n@media (prefers-color-scheme: light) {\r\n  /*\r\n   * Soft Light Colors\r\n   * -------------------------------------------\r\n   */\r\n  \r\n  body {\r\n    --ion-color-primary: #428cff;\r\n    --ion-color-primary-rgb: 66, 140, 255;\r\n    --ion-color-primary-contrast: #ffffff;\r\n    --ion-color-primary-contrast-rgb: 255, 255, 255;\r\n    --ion-color-primary-shade: #3a7be0;\r\n    --ion-color-primary-tint: #5598ff;\r\n  \r\n    /* ... (otras variables personalizadas) ... */\r\n  \r\n    --ion-color-light: #f5f5f5; /* Fondo suave, menos brillante */\r\n    --ion-color-light-rgb: 245, 245, 245;\r\n    --ion-color-light-contrast: #333333; /* Texto oscuro sobre fondo claro */\r\n    --ion-color-light-contrast-rgb: 51, 51, 51;\r\n    --ion-color-light-shade: #dcdcdc;\r\n    --ion-color-light-tint: #f8f8f8;\r\n  }\r\n  \r\n  .ios body {\r\n    --ion-background-color: #f5f5f5; /* Fondo para iOS */\r\n    --ion-background-color-rgb: 245, 245, 245;\r\n  \r\n    /* ... (ajustes para tema suave claro de iOS) ... */\r\n  }\r\n  \r\n  .md body {\r\n    --ion-background-color: #f5f5f5; /* Fondo para Material Design */\r\n    --ion-background-color-rgb: 245, 245, 245;\r\n  \r\n    /* ... (ajustes para tema suave claro de Material Design) ... */\r\n  }\r\n}\r\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--14-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--14-3!../node_modules/sass-loader/dist/cjs.js??ref--14-4!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/global.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--14-1!../../node_modules/postcss-loader/src??embedded!../../node_modules/resolve-url-loader??ref--14-3!../../node_modules/sass-loader/dist/cjs.js??ref--14-4!./variables.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/theme/variables.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 3:
/*!**********************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\chino\Desktop\FishingAdmin\administrador\src\theme\variables.scss */"./src/theme/variables.scss");
module.exports = __webpack_require__(/*! C:\Users\chino\Desktop\FishingAdmin\administrador\src\global.scss */"./src/global.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map