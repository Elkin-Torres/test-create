import { Route, Routes } from "react-router";
import First from "./components/First";
import Home from "./components/Home";
import Second from "./components/Second";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </div>
  );
}

export default App;
