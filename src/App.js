import "./App.css";
import Main from "../src/components/Main/Main";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar name="Maniu" />
      <NavBar name="Meniu" />
      <NavBar name="Menu" />
      <Main />
    </div>
  );
}

export default App;
