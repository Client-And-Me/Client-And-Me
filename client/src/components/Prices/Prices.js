import React from "react";
import "./Prices.css";
import { Section, Container, Card, Row, Col } from 'react-materialize';

export default () => (
  <Section>
    <Row className='intro'>
      <Col l={6} m={6} s={12} offset="l3 m3 s0">
        <Card className='brandColor center' textClassName='white-text'>
          <h2>client&me</h2>
          <h3>An affordable solution to keeping you connected with your passion.</h3>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col l={2} m={2} s={4} offset="l3 m3 s0">
        <Card className='brandColor center small' textClassName='white-text' title='Notebook' actions={[<a href='/'>Register</a>]}>
          <h5>A free, simple digital notebook for keeping track of clients & appointments.</h5>
        </Card>
      </Col>
      <Col l={2} m={2} s={4} >
        <Card className='brandColor center small' textClassName='white-text' title='Planner' actions={[<a href='/'>Register</a>]}>
          <h5>A digital notebook and planner for appointment notes & scheduling.</h5>
        </Card>
      </Col>
      <Col l={2} m={2} s={4}>
        <Card className='brandColor center small' textClassName='white-text' title='Planner Plus' actions={[<a href='/'>Register</a>]}>
          <h5>An expansive notebook and planner for appointment notes, scheduling and payment processing.</h5>
        </Card>
      </Col>
    </Row>
  </Section>
)