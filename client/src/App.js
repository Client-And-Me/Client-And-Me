import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Client from "./pages/Client";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProviderHome from "./pages/ProviderHome";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/client" component={Client} />
        <Route exact path="/providerhome" component={ProviderHome} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
