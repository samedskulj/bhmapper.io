import Map from "./Map/Map";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
        <Switch>
          <Route exact path="/map" component={Map}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
