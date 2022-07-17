import logo from './logo.svg';
import './App.css';

/**
  Challenge: Display all users to the browser
  Small Hint: Use array map with react key
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

const userItems = users.map((user) => <li key={user.id}>{user.name}</li>);

function App() {
  return (
    
    <>
    <img src={logo} className="App-logo" alt="logo" />
      <h3>User names</h3>
      <ul>{userItems}</ul>    </>
  );
}

export default App;
