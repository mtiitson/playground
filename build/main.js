'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Logger = require('./Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ReactComponent = require('./ReactComponent');

var _ReactComponent2 = _interopRequireDefault(_ReactComponent);

var logger = new _Logger2['default']();
logger.log('Hello');

_reactDom2['default'].render(_react2['default'].createElement(_ReactComponent2['default'], null), document.getElementById('content'));
//# sourceMappingURL=main.js.map