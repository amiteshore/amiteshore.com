import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import ArchLinux from "./pages/ArchLinux";
import LampStack from "./pages/LampStack";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/lamp-stack" element={<LampStack />} />
          <Route path="/arch-linux" element={<ArchLinux />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
