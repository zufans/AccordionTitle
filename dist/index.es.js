import PropTypes from 'prop-types';

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
  return /*#__PURE__*/React.createElement("div", {
    class: "container"
  }, /*#__PURE__*/React.createElement("div", {
    class: "left"
  }, left), /*#__PURE__*/React.createElement("div", {
    class: "center"
  }, center), /*#__PURE__*/React.createElement("div", {
    class: "right"
  }, right));
}
AccordionTitle.PropTypes = {
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  center: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export { AccordionTitle as default };
