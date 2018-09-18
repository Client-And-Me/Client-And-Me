import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Client from "./pages/Client";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/client" component={Client} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
