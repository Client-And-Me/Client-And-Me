import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClientHome from "./pages/ClientHome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProviderHome from "./pages/ProviderHome";
import ProviderClients from "./pages/ProviderClients";
import ProviderAppointments from "./pages/ProviderAppointments";
import Footer from "./components/Footer";
import ForgotPassword from "./pages/ForgotPassword";
import Navigation from "./components/Navigation";
import { firebase } from './firebase';
import API from "./utils/API";

import * as routes from "./constants/routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: {
        authUser: null,
        isClient: false,
        isProvider: false
      },

    };
  }
  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
          <Route exact path={routes.HOME} component={Home} />
          <Route exact path={routes.LOGIN} component={Login} />
          <Route exact path={routes.REGISTER} component={Register} />
          <Route exact path={routes.CLIENTHOME} component={ClientHome} />
          <Route exact path={routes.PROVIDERHOME} component={ProviderHome} />
          <Route exact path={routes.PROVIDERCLIENTS} component={ProviderClients} />
          <Route exact path={routes.PROVIDERAPPOINTMENTS} component={ProviderAppointments} />
          <Route exact path={routes.FORGOTPASSWORD} component={ForgotPassword} />

          <Footer />
        </div>
      </Router>
    );
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        console.log("Success");


        let user = {
          authUser: authUser,
          isClient: false,
          isProvider: false,
        }

        API.getIsClient(authUser.uid)
          .then(response => {

            user.isClient = response.data;

            if (!user.isClient) {

              API.getIsProvider(authUser.uid)
                .then(response => {
                  user.isProvider = response.data;
                  this.setState({ authUser: user });
                })
                .catch(error => {
                  this.setState({ authUser: user });
                });
            }
            this.setState({ authUser: user });
          })
          .catch(error => {
            this.setState({ authUser: user });
          });
      }
      else {
        console.log("Fail");
        this.setState({
          authUser: {
            authUser: null,
            isClient: false,
            isProvider: false
          }
        });
      }
    });
  }
}

export default App;

