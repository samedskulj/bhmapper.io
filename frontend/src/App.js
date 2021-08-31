import Map from "./Map/Map";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Map}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
