"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      message: undefined
    };

    _this.saySomething = _this.saySomething.bind(_this);
    _this.sayNothing = _this.sayNothing.bind(_this);
    _this.sendMessageToDB = _this.sendMessageToDB.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "saySomething",
    value: function saySomething(message) {

      this.setState(function (prevState) {
        if (prevState.message) {
          return {
            message: prevState.message.concat(" " + message)
          };
        } else {
          return {
            message: message
          };
        };
      });
    }
  }, {
    key: "sayNothing",
    value: function sayNothing() {
      this.setState(function () {
        return {
          message: undefined
        };
      });
    }
  }, {
    key: "sendMessageToDB",
    value: function sendMessageToDB() {
      alert(this.state.message);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "HI MOM",
        React.createElement(AddWords, { getMessage: this.saySomething }),
        React.createElement(RemoveWords, { removeMessage: this.sayNothing }),
        React.createElement(AddToDB, { toDB: this.sendMessageToDB }),
        this.state.message && React.createElement(
          "p",
          null,
          this.state.message
        )
      );
    }
  }]);

  return App;
}(React.Component);

;

var AddWords = function (_React$Component2) {
  _inherits(AddWords, _React$Component2);

  function AddWords(props) {
    _classCallCheck(this, AddWords);

    var _this2 = _possibleConstructorReturn(this, (AddWords.__proto__ || Object.getPrototypeOf(AddWords)).call(this, props));

    _this2.relayMessage = _this2.relayMessage.bind(_this2);
    return _this2;
  }

  _createClass(AddWords, [{
    key: "relayMessage",
    value: function relayMessage(e) {
      e.preventDefault();
      var message = e.target.elements.message.value;
      this.props.getMessage(message);
      e.target.elements.message.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.relayMessage },
          React.createElement("input", {
            type: "text",
            name: "message"
          }),
          React.createElement(
            "button",
            null,
            "Add words to page"
          )
        )
      );
    }
  }]);

  return AddWords;
}(React.Component);

;

var RemoveWords = function RemoveWords(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.removeMessage },
      "Remove the words"
    )
  );
};

var AddToDB = function AddToDB(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.toDB },
      "Add this message to the database"
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
