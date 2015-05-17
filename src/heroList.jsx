var { createClass } = require('react');

var HeroListItem = createClass({
  render: function() {
    var hero = this.props.hero;
    var img = '';
    if (hero.thumbnail) {
      var thumb = hero.thumbnail.path;
      var ext = '.' + hero.thumbnail.extension;
      img = <img src={ thumb + ext } alt={ hero.name } className="circle" />;
    }
    var style = {
      "whiteSpace": "nowrap",
      "overflow": "hidden",
      "textOverflow": "ellipsis"
    };

    return (
    <a style={ { cursor: "pointer" } } className={ "waves-effect collection-item avatar " + this.props.active } onClick={this.props.focusHero.bind(null, this.props.nr)}>
      { img }
      <span className="title">{ hero.name }</span>
      <p style={style}><br />{ hero.description }</p>
    </a>
    );
  }
});

var HeroList = createClass({
  render: function() {
    return (
    <div className="z-depth-1 collection">
      { this.props.items.map( (i, key) => {
        var activeCls = key === this.props.activeNr ? 'active': '';
        return <HeroListItem focusHero={this.props.focusHero} nr={key} active={activeCls} hero={i} />
      }) }
    </div>
    );
  }
});

module.exports = HeroList;
