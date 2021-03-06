import React from "react";
import "./Prices.css";
import { Section, Card, Row, Col } from 'react-materialize';

export default () => (
  <Section>
    <Section>
      <Row className='intro'>
        <Col l={6} m={6} s={12} offset="l3 m3 s0">
          <Card className='center hoverable'>
            <h2>client&me</h2>
            <h3>An affordable solution to keep you connected with your passion.</h3>
          </Card>
        </Col>
      </Row>
    </Section>
    <Section>
      <Row className='priceCards'>
        <div class="col l2 m2 s4 offset-l2 offset-m1 offset-s0">
          <div class="card center hoverable small z-depth-2">
            <div class="card-content">
              <span class="card-title">Notebook</span>
              <p>A free, simple digital notebook for keeping track of clients & appointments.</p>
            </div>
            <div class="card-action register">
              <a href="/register">Register</a>
            </div>
          </div>
        </div>
        <Col l={1} m={1} s={1} >
        </Col>
        <div class="col l2 m2 s4">
          <div class="card center hoverable small z-depth-2">
            <div class="card-content">
              <span class="card-title">Planner</span>
              <p>A digital notebook and planner for appointment notes & scheduling.</p>
            </div>
            <div class="card-action register">
              <a href="/register">Register</a>
            </div>
          </div>
        </div>
        <Col l={1} m={1} s={1} >
        </Col>
        <div class="col l2 m2 s4">
          <div class="card center hoverable small z-depth-2">
            <div class="card-content">
              <span class="card-title">Planner Plus</span>
              <p>An expansive notebook and planner for appointment notes, scheduling and payment processing.</p>
            </div>
            <div class="card-action register">
              <a href="/register">Register</a>
            </div>
          </div>
        </div>
      </Row>
    </Section>
  </Section>
)