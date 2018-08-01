'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getValuesFromSelect = function getValuesFromSelect(selectElement) {
  return [].concat(_toConsumableArray(selectElement.options)).reduce(function (values, _ref) {
    var value = _ref.value;

    if (value) {
      return [].concat(_toConsumableArray(values), [value]);
    }

    return values;
  }, {});
};

var MultipleSelect = function (_React$Component) {
  _inherits(MultipleSelect, _React$Component);

  function MultipleSelect() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, MultipleSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = MultipleSelect.__proto__ || Object.getPrototypeOf(MultipleSelect)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (event) {
      var values = getValuesFromSelect(event.target);
      _this.props.onChange(event, values);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MultipleSelect, [{
    key: 'render',
    value: function render() {
      return React.createElement('select', _extends({}, this.props, {
        multiple: true,
        onChange: this.handleChange
      }));
    }
  }]);

  return MultipleSelect;
}(React.Component);

MultipleSelect.propTypes = {
  onChange: PropTypes.func
};

module.exports = MultipleSelect;
