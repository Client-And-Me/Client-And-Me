import React from "react";
import "./ProfileText.css";
import { Section, Div, Card, Row, Col } from 'react-materialize';

export default () => (
  <Section>
    <Row>
      <Col m={12} s={12}>
        <Card className='blue-grey darken-1' textClassName='white-text' id="profile-text">
          <p>something the client wants to put in</p>
        </Card>
      </Col>
    </Row>
  </Section>
)