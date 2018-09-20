import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import ProfilePhoto from "../../components/ProfilePhoto";
import ProfileText from "../../components/ProfileText";
import Title from "../../components/Title";
import Collapsible from "../../components/Collapsible";

class Client extends Component {
    state = {
    };

    render() {
        return (
            <Container fluid>
        <Row>
          <Col size="md-4">
            <ProfilePhoto />
          </Col>
          <Col size="md-4">
            <Title>My Appointments</Title>
            <Title>My People</Title>
          </Col>
        </Row>
        <Row>
            <Col size="md-4">
                <ProfileText />
            </Col>
            <Col size="md-4">
                <Collapsible />
            </Col>
        </Row>
      </Container>
        );
    }
}

export default Client;