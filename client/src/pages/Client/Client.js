import React, { Component } from "react";
import { Section, Div, Card, Row, Col } from 'react-materialize';
// import { Col, Row, Container } from "../../components/Grid";
import ProfilePhoto from "../../components/ProfilePhoto";
import ProfileText from "../../components/ProfileText";
import Title from "../../components/Title";
import CollapsibleAccordion from "../../components/CollapsibleAccordion";

class Client extends Component {
    state = {
    };

    render() {
        return (
        <Section>
        <Row>
          <Col s={4}>
          <ProfilePhoto></ProfilePhoto>
          <ProfileText></ProfileText>
          </Col>
          <Col s={4}>
            <Title>My Appointments</Title>
            <Title>Where the calendar goes</Title>                
          </Col>
          <Col s={4}>
          <Title>My People</Title>
          <CollapsibleAccordion></CollapsibleAccordion>  
          </Col>
        </Row>
      </Section>
        );
    }
}

export default Client;