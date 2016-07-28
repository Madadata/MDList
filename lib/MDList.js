'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = exports.ListInfo = exports.ListHeader = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MDList = require('./MDList.css');

var _MDList2 = _interopRequireDefault(_MDList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListHeader = exports.ListHeader = function ListHeader(props) {
  return _react2.default.createElement(
    'div',
    { className: _MDList2.default.listPanel__Header },
    _react2.default.createElement('img', { src: props.img, role: 'presentation' }),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        null,
        props.data.tag
      ),
      _react2.default.createElement(
        'div',
        { className: _MDList2.default.listPanel__Tag },
        ' ',
        props.data.value,
        ' '
      )
    )
  );
};

ListHeader.propTypes = {
  data: _react.PropTypes.object,
  img: _react.PropTypes.string
};

var ListInfo = exports.ListInfo = function ListInfo(props) {
  return _react2.default.createElement(
    'div',
    { className: _MDList2.default.listPanel__Info },
    props.data.map(function (kv) {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          kv.value
        ),
        _react2.default.createElement(
          'div',
          { className: _MDList2.default.listPanel__Tag },
          kv.tag
        )
      );
    })
  );
};

ListInfo.propTypes = {
  data: _react.PropTypes.arrayOf(_react.PropTypes.object)
};

var ListItem = exports.ListItem = function ListItem(props) {
  return _react2.default.createElement(
    'div',
    { className: _MDList2.default.listPanel },
    _react2.default.createElement(ListHeader, { data: props.header, img: props.img }),
    _react2.default.createElement(ListInfo, { data: props.info })
  );
};

ListItem.propTypes = {
  img: _react.PropTypes.string,
  header: _react.PropTypes.object,
  info: _react.PropTypes.arrayOf(_react.PropTypes.object)
};

var MDList = function MDList(props) {
  return _react2.default.createElement(
    'div',
    null,
    props.children
  );
};

MDList.propTypes = {
  children: _react.PropTypes.any
};

exports.default = MDList;