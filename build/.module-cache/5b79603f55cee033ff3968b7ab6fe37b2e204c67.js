var HelloWorld = React.createClass({displayName: "HelloWorld",
  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({ counter: this.state.counter + 1 });
  },

  render: function() {
    return React.createElement("div", null, "Hello, ",  this.props.nombre, "!");
  }
});

React.render(React.createElement(HelloWorld, {nombre: "Ismael"}), document.body)
