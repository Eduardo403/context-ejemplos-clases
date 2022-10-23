import "./App.css";
import MyPages from "./components/myPages";
import MyPagesContetx from "./components/myPagesContext";

function App() {
  return (
    <div className="App">
      <MyPages />
      <hr />

      <MyPagesContetx />
    </div>
  );
}

export default App;
