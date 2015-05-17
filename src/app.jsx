var radioactive = require('radioactive');
var { render, createClass } = require('react');
var SearchBar = require('./searchBar');
var Footer = require('./footer');
var HeroCard = require('./heroCard');
var HeroList = require('./heroList');
var Loader = require('./loader');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var KEY = "a3b298fb642fb4c9fb0dae88578bd569";
var SAMPLES = ['Spider-Man', 'Venom', 'Hulk', 'Doctor'];
var INITIAL_SEARCH = SAMPLES[getRandomInt(0, 4)];

/**
 * creating a cell which acts like an action
 */
var search = radioactive.cell("search");

/**
 * load an initial data
 */
search(INITIAL_SEARCH);


var App = createClass({
  getInitialState: function() {
    return {
      showLoader: false,
      focusedHero: null,
      activeNr: 0,
      characters: null
    }
  },
  componentDidMount: function() {
    var me = this;

    /**
     * the top level component reacts on data changes
     */
    radioactive.react(function(){
      var characters = radioactive.data(`http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=${search()}&orderBy=name&limit=10&apikey=${KEY}`);
      var results = characters().data.results;

      /**
       * and sets the new state
       */
      me.setState({
        focusedHero: results[0],
        characters: results,
        showLoader: false
      });
    });
  },
  focusHero: function(heroNr) {
    var newFocused = this.state.characters[heroNr];

    this.setState({
      focusedHero: newFocused,
      activeNr: heroNr
    });
  },
  heros: function() {
    if (this.state.focusedHero && this.state.characters) {
      var firstResult = this.state.focusedHero;
      var items = this.state.characters;
      var list = '';

      if (items.length > 0) {
        list = (
          <div className="col s12 m7 l8">
            <HeroList focusHero={this.focusHero} items={ items } activeNr={ this.state.activeNr } />
          </div>
          );
      };
      return (
        <div className="row">
          <div className="col s12 m5 l4">
            <HeroCard hero={ firstResult } />
          </div>
          { list }
        </div>
      );
    } else {
      return (
          <h1>no search result</h1>
      );
    }
  },
  onSearch: function(val) {
    this.setState({ showLoader: true });
    search(val);
  },
  onChange: function(e) {
    this.setState({ currentValue: e.target.value });
  },
  render: function() {
    return (
      <div>
        <header className="navbar-fixed">
          <Loader show={this.state.showLoader} />
          <SearchBar search={this.onSearch} initialSearch={INITIAL_SEARCH}/>
        </header>

        <main>
          { this.heros() }
        </main>
        <footer className="page-footer">
          <Footer />
        </footer>

      </div>
    );
  }
});

render(
  <App />,
  document.body
);
