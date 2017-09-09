'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wrapper = function (_React$Component) {
  _inherits(Wrapper, _React$Component);

  function Wrapper() {
    _classCallCheck(this, Wrapper);

    return _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).apply(this, arguments));
  }

  _createClass(Wrapper, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return Wrapper;
}(React.Component);

describe('FishTable', function () {

  it('should render no `FishTableRow` when given zero fish', function () {
    // The Wraper allows us to scry for components
    var fishTable = React.addons.TestUtils.renderIntoDocument(React.createElement(
      Wrapper,
      null,
      React.createElement(FishTable, { fishes: [] })
    ));

    var fishTableRows = React.addons.TestUtils.scryRenderedComponentsWithType(fishTable, FishTableRow);
    fishTableRows.should.have.length(0);
  });

  it('should render one `FishTableRow` when given one fish', function () {
    var fishData = [{
      name: 'Goldfish',
      image: 'http://tinyurl.com/n4vgcl5',
      description: 'Everyone\'s first pet'
    }];

    // The Wraper allows us to scry for components
    var fishTable = React.addons.TestUtils.renderIntoDocument(React.createElement(
      Wrapper,
      null,
      React.createElement(FishTable, { fishes: fishData })
    ));

    var fishTableRows = React.addons.TestUtils.scryRenderedComponentsWithType(fishTable, FishTableRow);
    fishTableRows.should.have.length(1);
  });

  it('should render three `FishTableRow` when given three fishes', function () {
    var fishData = [{
      name: 'Goldfish',
      image: 'http://tinyurl.com/n4vgcl5',
      description: 'Everyone\'s first pet'
    }, {
      name: 'Pufferfish',
      image: 'http://tinyurl.com/kxd7cuu',
      description: 'So puffy!'
    }, {
      name: 'Tuna',
      image: 'http://tinyurl.com/zgs7z2s',
      description: 'Why are these things so huge? THey\'re terrifying.'
    }];

    // The Wraper allows us to scry for components
    var fishTable = React.addons.TestUtils.renderIntoDocument(React.createElement(
      Wrapper,
      null,
      React.createElement(FishTable, { fishes: fishData })
    ));

    var fishTableRows = React.addons.TestUtils.scryRenderedComponentsWithType(fishTable, FishTableRow);
    fishTableRows.should.have.length(3);
  });
});

describe('FishTableRow', function () {
  it('should render a dynamic name', function () {
    var blobbert = {
      name: 'Blobbert',
      image: 'http://tinyurl.com/hfhonhc',
      description: 'The saddest blob of a fish you have ever seen'
    };

    var fishTableRow = ReactDOM.render(React.createElement(FishTableRow, { fish: blobbert }), document.createElement('tbody'));

    var name = React.addons.TestUtils.findRenderedDOMComponentWithClass(fishTableRow, 'fish-name');
    name.innerText.should.equal('Blobbert');
  });

  it('should render a dynamic image', function () {
    var blobbert = {
      name: 'Blobbert',
      image: 'http://tinyurl.com/hfhonhc',
      description: 'The saddest blob of a fish you have ever seen'
    };

    var fishTableRow = ReactDOM.render(React.createElement(FishTableRow, { fish: blobbert }), document.createElement('tbody'));

    var image = React.addons.TestUtils.findRenderedDOMComponentWithTag(fishTableRow, 'img');
    image.src.should.equal('http://tinyurl.com/hfhonhc');
  });

  it('should render a dynamic description', function () {
    var blobbert = {
      name: 'Blobbert',
      image: 'http://tinyurl.com/hfhonhc',
      description: 'The saddest blob of a fish you have ever seen'
    };

    var fishTableRow = ReactDOM.render(React.createElement(FishTableRow, { fish: blobbert }), document.createElement('tbody'));

    // Toggle description on before we search for it
    fishTableRow.setState({ showDescription: true });

    var description = React.addons.TestUtils.findRenderedDOMComponentWithClass(fishTableRow, 'fish-description');
    description.innerText.should.equal('The saddest blob of a fish you have ever seen');
  });
});
