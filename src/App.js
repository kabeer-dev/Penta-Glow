import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home'
import Table from './components/table'
import Team from "./components/team"
import Certifiacte from './components/certificate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/job-details" element={<Table />} />
      <Route path="/team-members" element={<Team />} />
      <Route path="/certificate" element={<Certifiacte />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
