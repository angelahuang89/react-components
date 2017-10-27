var GroceryList = (props) => (
  <div>
    <h2>Grocery List</h2>
    <ul>
      {props.items.map(
        (item) => <GroceryListItem item={item} key={item} />
      	)}
    </ul>
  </div>
);

var Cereal = () => (
  <li>
    cereal
  </li>
);

var Milk = () => (
  <li>
    milk
  </li>
)

// var GroceryListItem = (props) => (
//   <li>{props.grocerylistitem}</li>
// )

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
  	this.setState({
  	  done: !this.state.done
  	})
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return <li style={style} onMouseEnter={this.onListItemClick.bind(this)}>{this.props.item}</li>;
  }
}

ReactDOM.render(<GroceryList items={['cereal','milk']}/>, document.getElementById("app"));