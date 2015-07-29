var HelloWorld = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({ counter: this.state.counter+1 });
  },

  render: function() {
    return (
      <div>
      <div>{ this.state.counter }</div>
      <button onClick={ this.increment }>Dale!</button>
      <div>Hello, { this.props.nombre }!</div>
      </div>
    );
  }
});

React.render(React.createElement(HelloWorld, {nombre: "Ismael"}), document.body)
