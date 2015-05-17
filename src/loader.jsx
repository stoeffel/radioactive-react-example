var { createClass } = require('react');

var Loader = createClass({
  render: function() {
    if (!this.props.show) return null;

    var style = { margin: "0px" };

    return (
      <div style={style} className="progress">
        <div style={style} className="indeterminate"></div>
      </div>
    );
  }
});

module.exports = Loader;
