import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import ArchLinux from "./pages/ArchLinux";
import LampStack from "./pages/LampStack";

function App() {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;
