'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScratchCard = function (_Component) {
  _inherits(ScratchCard, _Component);

  function ScratchCard(props) {
    _classCallCheck(this, ScratchCard);

    var _this = _possibleConstructorReturn(this, (ScratchCard.__proto__ || Object.getPrototypeOf(ScratchCard)).call(this, props));

    _this.state = { loaded: false };

    _this.brush = new Image();
    _this.brush.src = 'data:image/png;base64,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';
    return _this;
  }

  _createClass(ScratchCard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.isDrawing = false;
      this.lastPoint = null;
      this.ctx = this.canvas.getContext('2d');

      var image = new Image();
      image.crossOrigin = "Anonymous";
      image.onload = function () {
        _this2.ctx.drawImage(image, 0, 0);
        _this2.setState({ loaded: true });
      };
      image.src = this.props.image;
    }
  }, {
    key: 'getFilledInPixels',
    value: function getFilledInPixels(stride) {
      if (!stride || stride < 1) {
        stride = 1;
      }

      var pixels = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var total = pixels.data.length / stride;
      var count = 0;

      for (var i = 0; i < pixels.data.length; i += stride) {
        if (parseInt(pixels.data[i], 10) === 0) {
          count++;
        }
      }

      return Math.round(count / total * 100);
    }
  }, {
    key: 'getMouse',
    value: function getMouse(e, canvas) {
      var _canvas$getBoundingCl = canvas.getBoundingClientRect(),
          top = _canvas$getBoundingCl.top,
          left = _canvas$getBoundingCl.left;

      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      return {
        x: (e.pageX || e.touches[0].clientX) - left - scrollLeft,
        y: (e.pageY || e.touches[0].clientY) - top - scrollTop
      };
    }
  }, {
    key: 'distanceBetween',
    value: function distanceBetween(point1, point2) {
      return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }
  }, {
    key: 'angleBetween',
    value: function angleBetween(point1, point2) {
      return Math.atan2(point2.x - point1.x, point2.y - point1.y);
    }
  }, {
    key: 'handlePercentage',
    value: function handlePercentage() {
      var filledInPixels = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (filledInPixels > this.props.finishPercent) {
        this.canvas.parentNode.removeChild(this.canvas);
        this.setState({ finished: true });
        if (this.props.onComplete) {
          this.props.onComplete();
        }
      }
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      this.isDrawing = true;
      this.lastPoint = this.getMouse(e, this.canvas);
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(e) {
      if (!this.isDrawing) {
        return;
      }

      e.preventDefault();

      var currentPoint = this.getMouse(e, this.canvas);
      var distance = this.distanceBetween(this.lastPoint, currentPoint);
      var angle = this.angleBetween(this.lastPoint, currentPoint);

      var x = void 0,
          y = void 0;

      for (var i = 0; i < distance; i++) {
        x = this.lastPoint.x + Math.sin(angle) * i;
        y = this.lastPoint.y + Math.cos(angle) * i;
        this.ctx.globalCompositeOperation = 'destination-out';
        this.ctx.beginPath();
        this.ctx.drawImage(this.brush, x - this.brush.width / 2, y - this.brush.height / 2);
      }

      this.lastPoint = currentPoint;
      this.handlePercentage(this.getFilledInPixels(32));
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      this.isDrawing = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var containerStyle = {
        width: this.props.width + 'px',
        height: this.props.height + 'px',
        position: 'relative',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none'
      };

      var canvasStyle = {
        position: 'absolute',
        top: 0,
        zIndex: 1
      };

      var resultStyle = {
        visibility: this.state.loaded ? 'visible' : 'hidden'
      };

      var canvasProps = {
        ref: function ref(_ref) {
          return _this3.canvas = _ref;
        },
        className: 'ScratchCard__Canvas',
        style: canvasStyle,
        width: this.props.width,
        height: this.props.height,
        onMouseDown: this.handleMouseDown.bind(this),
        onTouchStart: this.handleMouseDown.bind(this),
        onMouseMove: this.handleMouseMove.bind(this),
        onTouchMove: this.handleMouseMove.bind(this),
        onMouseUp: this.handleMouseUp.bind(this),
        onTouchEnd: this.handleMouseUp.bind(this)
      };

      return _react2.default.createElement(
        'div',
        { className: 'ScratchCard__Container', style: containerStyle },
        _react2.default.createElement('canvas', canvasProps),
        _react2.default.createElement(
          'div',
          { className: 'ScratchCard__Result', style: resultStyle },
          this.props.children
        )
      );
    }
  }]);

  return ScratchCard;
}(_react.Component);

ScratchCard.propTypes = {
  image: _react2.default.PropTypes.string.isRequired,
  width: _react2.default.PropTypes.number.isRequired,
  height: _react2.default.PropTypes.number.isRequired,
  finishPercent: _react2.default.PropTypes.number.isRequired,
  onComplete: _react2.default.PropTypes.func
};

var _default = ScratchCard;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ScratchCard, 'ScratchCard', 'src/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/index.js');
}();

;