var TweetBox = React.createClass({displayName: "TweetBox",
  handleChange: function(event) {

  },
  render: function() {
    return (
      React.createElement("div", {className: "well clearfix"}, 
        React.createElement("textarea", {className: "form-control", onChange: this.handleChange}), 
        React.createElement("br", null), 
        React.createElement("button", {className: "btn btn-primary pull-right", disabled: true}, "Tweet")
      )
    );
  }
});


React.render(
  React.createElement(TweetBox, null),
  document.body
);
