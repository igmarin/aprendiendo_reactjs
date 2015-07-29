var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return React.createElement("div", null, "Hello, ",  this.props.nombre, "!");
  }
});

React.render(React.createElement(HelloWorld, {nombre: "Ismael"}), document.body)
