import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./views";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
