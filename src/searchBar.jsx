var { createClass } = require('react');

var GithubRibbon = createClass({
  render: function() {
    var style = {
      zIndex: 10000,
      position: "absolute",
      top: 0, right: 0, border: 0
    };
    return <a href="https://github.com/stoeffel/radioactive-react-example"><img style={style} src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" /></a>
  }
});
var SearchBar = createClass({
  getInitialState: function() {
    return {
      currentValue: this.props.initialSearch || ''
    }
  },
  onSearch: function(e) {
    e.preventDefault();
    var trimmed = this.state.currentValue.trim();
    /*
     * call the radioactive.cell
     */
    this.props.search(trimmed);
  },
  onChange: function(e) {
    this.setState({ currentValue: e.target.value });
  },
  onFocus: function(e) {
    e.target.value = '';
  },
  render: function() {
    var value = this.props.initialSearch;
    return (
      <nav>
        <div className="nav-wrapper">
          <GithubRibbon />
          <a href="#" className="hide-on-small-only brand-logo center">Radioactive - React</a>
          <form onSubmit={this.onSearch}>
            <div className="input-field">
              <input id="search" type="search" defaultValue={value} onFocus={this.onFocus} onChange={this.onChange} autoComplete="off" required />
              <label htmlFor="search"><i className="mdi-action-search"></i></label>
              <i className="mdi-navigation-close"></i>
            </div>
          </form>
        </div>
      </nav>
    );
  }
});

module.exports = SearchBar;
