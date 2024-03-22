import logo from "./logo.svg";
import "./App.css";
import { ForceLandscape } from "./components/structure/ForceLandscape";
import { Main } from "./Main";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <ForceLandscape>
        <Header />
        <Main />
      </ForceLandscape>
    </div>
  );
}

export default App;
