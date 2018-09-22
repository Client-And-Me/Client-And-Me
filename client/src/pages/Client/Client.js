import React, { Component } from "react";
import { Section, Div, Card, Row, Col } from 'react-materialize';
// import { Col, Row, Container } from "../../components/Grid";
import ProfilePhoto from "../../components/ProfilePhoto";
import ProfileText from "../../components/ProfileText";
import Title from "../../components/Title";
import Collapsible from "../../components/Collapsible";

class Client extends Component {
    state = {
    };

    render() {
        return (
        <Div>
        <Row>
          <Col s={4}>
          <Card className='small'></Card>;
            <Title>My Appointments</Title>
            <Title>My People</Title>
          </Col>
        </Row>
        <Row>
            <Col s={4}>
                <ProfileText>This is information that the client adds about themself</ProfileText>
            </Col>
            <Col s={4}>
                <Collapsible />

            </Col>
        </Row>
      </Div>
        );
    }
}

export default Client;