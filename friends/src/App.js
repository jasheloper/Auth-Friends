import React from "react";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>

<div className="nav">
  <span className="title"> Secret Friend List </span> <br />
  Must login to see secret friends
<div className="links"><Link to="/login">Login</Link></div>
</div>
       

        <Switch>
          //Add a route for a login page and build out a simple login form with
          username and password inputs and a submit button
          <Route component={Login} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
