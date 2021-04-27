import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import WalkRoute from "./routes/walk";

function App() {
  
  return (
    <Router>
      
      <Switch>
      <Route path="/" exact >
        <h1>HOME PAGE</h1>
        <Link to="/walk">Walk</Link>
      </Route>
        <Route path="/walk" component={WalkRoute}/>
      </Switch>
    </Router>
  );
}

export default App;
