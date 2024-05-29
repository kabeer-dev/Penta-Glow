import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home'
import Table from './components/table'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
