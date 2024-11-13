import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/authors" element={<Authors />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
