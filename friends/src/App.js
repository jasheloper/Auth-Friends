import React from "react";
import Login from "./Components/Login";
import Friends from "./Components/Friends";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <div className="nav">
          <span className="title"> Secret List </span> <br />
          Welcome! You've reached a website that contains secret friends that
          you must login to see.
          <div className="links">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>

              <li>
                <Link to="/friends">Friends</Link>
              </li>
            </ul>
          </div>
        </div>

        <Switch>
          {/*  Add a route for a login page and build out a simple login form with
          username and password inputs and a submit button */}
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
