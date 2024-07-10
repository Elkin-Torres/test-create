import { Route, Routes } from "react-router";
import First from "./components/First";
import Home from "./components/Home";
import { HashRouter as Router } from "react-router-dom";
import Second from "./components/Second";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
