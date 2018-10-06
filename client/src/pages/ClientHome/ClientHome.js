import React, { Component } from "react";
import { Section, Card, Row, Col, CardTitle } from 'react-materialize';
import { firebase } from '../../firebase';
import API from "../../utils/API";
import Title from "../../components/Title";
import FullCalendar from "../../components/FullCalendar";
import CollapsibleAccordion from "../../components/CollapsibleAccordion";
import "./ClientHome.css";

class ClientHome extends Component {
  state = {
    user: null,
    isLoading: true,
    clientInfo: null,
    name: "Lisa"
  };

  getIsClient = () => {
    console.log("getting client info");
    API.getIsClient(
        this.state.user
    ).then(res =>
        this.setState({
            clientInfo: res.data,
        }),
    ).catch(err => console.log(err));

    console.log("got info");

};

componentDidMount() {
    
    firebase.auth.onAuthStateChanged(firebaseUser => {
        this.setState({
            user: firebaseUser,
            isLoading: false
        })

    })
    this.getIsClient();
    }

  render() {
    if (!this.state.isLoading) {

      console.log(this.state.user);
      console.log(this.state.clientInfo);
    return (
      <div>
        <Section>
          <Row>
            <Col s={4}>
              <div className="client-picture">
                <Card header={<CardTitle reveal image={"./assets/images/female_profile.jpg"} waves='light' />}
                  title={`Welcome, ${this.state.name}`}
                  reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                </Card>
              </div>
            </Col>
            <Col s={4}>
              <Title>My Appointments</Title>
              <div class="card-panel">
                <FullCalendar user={this.state.user}></FullCalendar>
              </div>
            </Col>
            <Col s={4}>
              <Title>My People</Title>
              <CollapsibleAccordion />
            </Col>
          </Row>
        </Section>
      </div>
    );
  }else {
    return ("Loading")
}
}
}

export default ClientHome;