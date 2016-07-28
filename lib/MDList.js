'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MDList = require('MDList.css');

var _MDList2 = _interopRequireDefault(_MDList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListInfo = function ListInfo(props) {
  return _react2.default.createElement(
    'div',
    null,
    props.children
  );
};

ListInfo.propTypes = {
  info: _react.PropTypes.arrayOf(_react.PropTypes.object)
};

var MDList = function MDList() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(ListInfo, null)
  );
};

MDList.propTypes = {};

exports.default = MDList;