import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Client from "./pages/Client";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProviderHome from "./pages/ProviderHome";
import Footer from "./components/Footer";
import PasswordForget from "./pages/PasswordForget";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/client" component={Client} />
        <Route exact path="/providerhome" component={ProviderHome} />
        <Route exact path="/password-forget" component={PasswordForget} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
