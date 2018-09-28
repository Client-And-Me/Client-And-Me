import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ClientHome from "./pages/ClientHome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProviderHome from "./pages/ProviderHome";
import ProviderClients from "./pages/ProviderClients";
import ProviderAppointments from "./pages/ProviderAppointments";
import Footer from "./components/Footer";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/client-home" component={ClientHome} />
        <Route exact path="/provider-home" component={ProviderHome} />
        <Route exact path="/provider-clients" component={ProviderClients} />
        <Route exact path="/provider-appointments" component={ProviderAppointments} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
