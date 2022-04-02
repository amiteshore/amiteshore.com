import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ArchLinux from "./pages/ArchLinux";
import LampStack from "./pages/LampStack";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lamp-stack" element={<LampStack />} />
      <Route path="/arch-linux" element={<ArchLinux />} />
    </Routes>
  );
}

export default App;
