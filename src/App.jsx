import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import SingleBookPage from "./pages/SingleBookPage";
import Askly from "./pages/Askly";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/books" element={<Books />} />
        <Route path="/books/:bookId" element={<SingleBookPage />} />
        <Route path="/authors" element={<Authors />}></Route>
        <Route path="/askly" element={<Askly />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
