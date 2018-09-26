import React, { Component } from "react";
import { Section } from 'react-materialize';
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
