import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import WhitePaper from "./WhitePaper";
import AboutUs from "./AboutUs";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitepaper" element={<WhitePaper />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
