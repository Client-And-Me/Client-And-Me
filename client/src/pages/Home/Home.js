import React, { Component } from "react";
import { Section } from 'react-materialize';
import Prices from "../../components/Prices";


class Home extends Component {
  state = {
  };

  render() {
    return (
      <div>
        <Section>

          <Prices></Prices>
        </Section>
      </div>

    )
  }
};

export default Home;
