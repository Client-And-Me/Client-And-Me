import React from "react";
// import "./Prices.css";
import { Section, Div, Card, Row, Col } from 'react-materialize';

export default () => (
  <Section>
    <Row>
      <Col m={6} s={12}>
        <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='/'>This is a link</a>]}>
          <h1>client&me: simple client management software for independent beauty professionals</h1>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col m={6} s={12}>
        <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='/'>This is a link</a>]}>
          I am a very simple card.
            </Card>
      </Col>
      <Col m={6} s={12}>
        <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='/'>This is a link</a>]}>
          I am a very simple card.
            </Card>
      </Col>
    </Row>
  </Section>
)