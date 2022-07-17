import React from "react";
import logo from './logo.svg';
import './App.css';

// update parent state ...uncomment
function Child({ setValue }) {
  return (
    <>
      <div>Child</div>
      <button onClick={() => setValue("Parent has been updated!")}>
        Change Parent Value
      </button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child setValue={setValue} />
      </div>
    </>
  );
}
// update parent state ..

// react children ...uncomment
// function Child() {
  // return <div>This is children content</div>;
// }
// 
// function Parent({ children }) {
  // return (
    // <div>
      {/* <h3>Parent Component</h3> */}
      {/* {children} */}
    {/* </div> */}
  // );
// }

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
  const [show, setShow] = React.useState(true);

  return (
    
    <>
    <img src={logo} className="App-logo" alt="logo" />
    <h1>JSX is cool!</h1>;
      <h3>User names</h3>
      <ul>{userItems}</ul> 

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Element Below" : "Show Element Below"}
      </button>

      {show && <div>Toggle Challenge</div>}
      <Parent>
      <Child />
    </Parent>
        </>
  );
}

export default App;
