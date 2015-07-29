var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return React.createElement("div", null, "Hello, World!");
  }
});


React.render(new HelloWorld(), document.body);
