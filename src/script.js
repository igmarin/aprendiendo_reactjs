var HelloWorld = React.createClass({
  render: function() {
    return <div>Hola</div>;
  }
});

React.render(React.createElement(HelloWorld, null), document.body)
