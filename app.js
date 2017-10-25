var GroceryList = () => (
  <div>
    <ul>
      <Cereal/>
      <Milk/>
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

var GroceryListItem = (props) => (
  <li>
    {props}
  </li>
)

ReactDOM.render(<GroceryList/>, document.getElementById("app"));