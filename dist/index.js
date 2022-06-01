'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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

var css_248z = "";
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
AccordionTitle.propTypes = {
  left: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].element]),
  center: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].element]),
  right: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].element])
};

module.exports = AccordionTitle;
