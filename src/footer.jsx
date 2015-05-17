var { createClass } = require('react');

var Footer = createClass({
  render: function() {
    return (
      <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <a className="grey-text text-lighten-4 right" href="http://marvel.com">Data provided by Marvel. © 2015 MARVEL</a>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/stoeffel/radioactive-react-example">source</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/radioactive/radioactive">radioactive</a></li>
                  <li><a className="grey-text text-lighten-3" href="http://facebook.github.io/react">react</a></li>
                  <li><a className="grey-text text-lighten-3" href="http://materializecss.com">materialize</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      );
  }
});

module.exports = Footer;
