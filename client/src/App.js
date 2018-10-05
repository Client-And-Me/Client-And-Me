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
      user: null,
      isClient: false,
      isProvider: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log("Success");
        this.setState({ user: firebaseUser })
        console.log(this.state.user)
        // let user = {
        //   authUser: firebaseUser,
        //   isClient: false,
        //   isProvider: false,
        // }

        API.getIsClient(firebaseUser.uid)
          .then(response => {
            console.log(response.data)

            // user.isClient = true;
            // console.log(this.state.authUser)
            // console.log(response)

            if (!response.data) {

              API.getIsProvider(firebaseUser.uid)
                .then(response => {
                  console.log(response)
                  if (response.data) {
                    this.setState({ isProvider: true })
                    this.setState({ isLoading: false })
                    console.log(this.state)
                  }
                  // user.isProvider = true;
                  // this.setState({ authUser: user });
                  // console.log(this.state.authUser)
                })
                .catch(error => {
                  // this.setState({ authUser: user });
                  console.log(error)
                });
            } else {
              this.setState({ isClient: true })
              this.setState({ isLoading: false })
            }
            // this.setState({ authUser: user });
          })
          .catch(error => {
            console.log(error);
            this.setState({ isLoading: false })
          });
      }
      else {
        console.log("Fail");
        this.setState({
          user: null,
          isClient: false,
          isProvider: false,
          isLoading: true,
        });
      }
    });
  }

  render() {
    return (
      <Router>

        <div>
          <Navigation provider={this.state.isProvider} client={this.state.isClient} />
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
}



export default App;

