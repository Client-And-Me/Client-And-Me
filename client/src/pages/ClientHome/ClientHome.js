import React, { Component } from "react";
import { Section, Card, Row, Col, CardTitle } from 'react-materialize';
import ProfileText from "../../components/ProfileText";
import Title from "../../components/Title";
import FullCalendar from "../../components/FullCalendar";
import CollapsibleAccordion from "../../components/CollapsibleAccordion";

class ClientHome extends Component {
  state = {
  };

  render() {
    return (
      <div>
        <Section>
          <Row>
            <Col s={4}>
              <Card header={<CardTitle reveal image={"./assets/images/female_profile.jpg"} waves='light' />}
                title="Name Goes Here"
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                <p><a href="#">This is a link</a></p>
              </Card>
              <ProfileText />
            </Col>
            <Col s={4}>
              <Title>My Appointments</Title>
              <div class="card-panel">
                <FullCalendar />
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
  }
}

export default ClientHome;