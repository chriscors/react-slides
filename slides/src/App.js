import logo from "./logo.svg";
import "./App.css";
import Slide from "./components/slides.js";
import films from "./film-data.json";

function App() {
  return (
    <div>
      <Slide films={films} />;
    </div>
  );
}

export default App;
