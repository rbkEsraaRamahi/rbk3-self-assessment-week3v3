class FishTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false
    };
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com 
  render(fishes) {
    return (
      <tr onClick={(fish) => this.setState({showDescription: !this.state.showDescription})}>
        <td className="fish-name">fishData.fish.name</td>
        <td>
          <img src="src/components/index.js" />
        </td>
        {this.state.showDescription ? <td className="fishes.description">Does anyone know where my dad is?</td> : null}
      </tr>
    )
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTableRow.propTypes = {
  fish: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTableRow = FishTableRow;
