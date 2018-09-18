import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import ProfilePhoto from "../../components/ProfilePhoto";
import ProfileText from "../../components/ProfileText";

class Client extends Component {
    state = {
    };

    render() {
        return (
            <Container fluid>
        <Row>
          <Col size="md-6">
            <ProfilePhoto />
          </Col>
        </Row>
        <Row>
            <Col size="md-6">
                <ProfileText />
            </Col>
        </Row>
      </Container>
        );
    }
}

export default Client;