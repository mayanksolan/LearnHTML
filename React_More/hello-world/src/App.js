import React from "react";
import "./App.css";
// import ClickCounterTwo from "./components/ClickCounterTwo";
// import HoverCounterTwo from "./components/HoverCounterTwo";
// import User from "./components/User";
// import Counter from "./components/Counter";
import ComponentC from "./context/ComponentC";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Mayank">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;

//render props

//   <Counter
//     render={(count, incrementCount) => (
//       <ClickCounterTwo count={count} incrementCount={incrementCount} />
//     )}
//   />
//   <Counter
//     render={(count, incrementCount) => (
//       <HoverCounterTwo count={count} incrementCount={incrementCount} />
//     )}
//   />
// </div>
