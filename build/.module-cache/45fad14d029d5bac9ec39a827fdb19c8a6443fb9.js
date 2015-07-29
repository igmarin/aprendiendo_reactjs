var TweetBox = React.createClass({displayName: "TweetBox",
  render: function() {
    return (
      React.createElement("div", {className: "well clearfix"}, 
        React.createElement("textarea", {className: "form-control"}), 
        React.createElement("br", null), 
        React.createElement("button", {className: "btn btn-primary pull-right"}, "Tweet")
      )
    );
  }
});

React.render(
  React.createElement(TweetBox, null),
  document.body
);
