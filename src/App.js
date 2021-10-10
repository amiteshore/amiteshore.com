import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArchLinux from "./pages/ArchLinux";
import LampStack from "./pages/LampStack";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/lamp-stack">
          <LampStack />
        </Route>
        <Route path="/arch-linux">
          <ArchLinux />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
