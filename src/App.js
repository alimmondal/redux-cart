import "./App.css";
import Counter from "./components/Counter";
import CounterTwo from "./components/CounterTwo"
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterTwo />
      <h1>USers Synchronously</h1>
      <Users />
    </div>
  );
}

export default App;
