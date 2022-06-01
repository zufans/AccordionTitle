'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n\n  .left {\n      text-align: left;\n      padding-left: 10px;\n      width: calc(100% /3);\n      max-width: calc(100% /3);\n      overflow: hidden;\n  }\n\n  .center {\n    text-align: center;\n    width: calc(100% /3); \n    max-width: calc(100% /3);\n    overflow: hidden;\n  }\n\n  .right {\n      text-align: right;\n      padding-right: 10px;\n      width: calc(100% /3);\n      max-width: calc(100% /3);\n      overflow: hidden;\n  }";
styleInject(css_248z);

function AccordionTitle({
  left,
  center,
  right
}) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "left"
  }, left), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "center"
  }, center), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "right"
  }, right));
}
/*
AccordionTitle.propTypes={
    left:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
    center:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]), 
    right:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
}
*/

module.exports = AccordionTitle;
