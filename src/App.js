import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { connect } from 'react-redux';
import Login from "./Login";
import Home from "./components/client/Home";
import Blog from "./components/client/Blog";
import About from "./components/client/About";
import ToDoDetail from "./components/client/ToDoDetail";


const App = () => {
  var userName = sessionStorage.getItem('userName');

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {userName &&
            <>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/blog">
                <Blog />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/todo-detail">
                <ToDoDetail />
              </Route>
            </>
          }
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = state => {

};

export default connect(mapStateToProps)(App);


