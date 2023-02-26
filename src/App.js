import './App.css';

function App() {
  let items = [
    {"names": "いちご", "price": "100"},
    {"names": "りんご", "price": "150"},
    {"names": "バナナ", "price": "230"}
  ]

  return (
    <div className="App container">
      <table className="table table-striped">
        <tbody>
          {items.map((value) => (
          <tr>
            <th scope="row">{value.names}</th>
            <td>{value.price}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;
