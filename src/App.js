import { useEffect, useState } from 'react';
import './App.css';

function App(props) {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman', 'Darin', 'Karim'];
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premier', price: '$246.99'}
  ];


  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <p>I am  a React Person</p>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        {
          products.map(product => <Product product={product}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name={nayoks[0]} nayika="Mousumi"></Person>
        <Person name={nayoks[1]} nayika="Shabana"></Person>
        <Person name={nayoks[2]} nayika="Cheta"></Person>
        <Person name={nayoks[3]} nayika="Bobita"></Person> */}
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {
        users.map(user => <li>{user.email}</li>)
      }
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}


function Product(props){
  const ProductStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    marginBottom: '20px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={ProductStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}


function Person (props){
  const personStyle = {
    border: '2px solid red',
    margin: '10px', 
    padding: '20px',
    width: '400px'
  }
  return (
    <div style={personStyle}>
      <h1>Nayok: {props.name}</h1>
      <h2>Nayika: {props.nayika}</h2>
    </div>
  );
}

export default App;
