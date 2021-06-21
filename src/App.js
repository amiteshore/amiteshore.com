import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArchLinux from "./pages/ArchLinux";

function App() {
  return (
    <Router>
      <Switch>
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
