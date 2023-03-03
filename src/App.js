import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import AllBeers from "./components/AllBeers";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<AllBeers />} />
      </Routes>
    </div>
  );
}

export default App;
