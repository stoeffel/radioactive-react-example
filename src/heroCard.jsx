var { createClass } = require('react');

var HeroCard = createClass({
  render: function() {
    var hero = this.props.hero;
    var img = '';
    if (hero.thumbnail) {
      var thumb = hero.thumbnail.path;
      var ext = '.' + hero.thumbnail.extension;
      img = <img src={ thumb + ext} />
    }
    var url = hero.urls[0].url;
    return (
      <div className="card">
        <div className="card-image">
          { img }
          <span className="card-title">{ hero.name }</span>
        </div>
        <div className="card-content">
          <p>{ hero.description }</p>
          <p><a href="http://marvel.com">Data provided by Marvel. © 2015 MARVEL</a></p>
        </div>
        <div className="card-action">
          <a href={ url }><i className="mdi-content-link"></i> marvel/{ hero.name }</a>
        </div>
      </div>
    );
  }
});

module.exports = HeroCard;
