import "./App.css";
import { Routes, Route } from "react-router-dom";
import { DiscoverPage, Pokemons, HomePage } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/discover/:name" element={<DiscoverPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
