import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'photoShop', price: '90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDf Reader', price: '$6.99' }
  ]
  return (
    <div className="App">
      <header className="App-header">

        <p>My first react app</p>
        <Counter></Counter>
        <Users></Users>

        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

      </header>
    </div >
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightGreen',
    height: '200px',
    width: '200px',
    float: 'left'

  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}


function Person(props) {
  return (
    <div style={{ border: '2px solid white', width: '400px' }}>
      <h3>My name:{props.name}</h3>
      <p>My profession:{props.job}</p>
    </div>
  )
}

export default App;
