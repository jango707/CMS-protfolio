import React from "react";
import ReactDOM from "react-dom";
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import "./index.css";
import "typeface-raleway";
import "cirrus-ui";
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
import Post from "./pages/post";
import NotFound from "./pages/notfound";
import work from "./pages/work";

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project/:slug" component={Post} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/work" component={work} />
        <Route exact path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
