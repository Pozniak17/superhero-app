import { Routes, Route } from "react-router-dom";
import "./index.css";
import Details from "./pages/Details/Details";
import NotFound from "./pages/NotFound/NotFound";
import Catalog from "./pages/Catalog/Catalog";
import AppBar from "./components/AppBar/AppBar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
