var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return React.createElement("div", null, "Hola");
  }
});

React.render(React.createElement(HelloWorld, null), document.body)
