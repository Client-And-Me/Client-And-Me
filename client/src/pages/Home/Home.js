import React, { Component } from "react";
import $ from 'jquery';
import ReactDOM from 'react-dom';
// import 'materialize-css';
// import 'materialize-css/dist/css/materialize.min.css';
// import Jumbotron from "../../components/Jumbotron";
// import Prices from "../../components/Prices";
// import { Link } from "react-router-dom";
import { Section, Div, Card, Row, Col } from 'react-materialize';
import Prices from "../../components/Prices";

class Home extends Component {
  state = {
  };

  render() {
    return (
      <Section>
        <Prices></Prices>
      </Section>

    )
  }
};

export default Home;
