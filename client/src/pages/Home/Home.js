import React, { Component } from "react";
import $ from 'jquery';
import ReactDOM from 'react-dom';
// import 'materialize-css';
// import 'materialize-css/dist/css/materialize.min.css';
// import Jumbotron from "../../components/Jumbotron";
// import Prices from "../../components/Prices";
// import { Link } from "react-router-dom";
import { Section, Div, Card, Row, Col } from 'react-materialize';

class Home extends Component {
  state = {
  };

  render() {
    return (
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
  }
};

export default Home;
