var { createClass } = require('react');
var Loader = require('./loader');

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
          <Loader show={this.props.showLoader} />
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
