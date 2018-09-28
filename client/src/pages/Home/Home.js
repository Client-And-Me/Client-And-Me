import React, { Component } from "react";
import { Section } from 'react-materialize';
import Prices from "../../components/Prices";
import NavbarHome from "../../components/Navbar/NavbarHome";

class Home extends Component {
  state = {
  };

  render() {
    return (
      <div>
        <NavbarHome />
      <Section>
        
        <Prices></Prices>
      </Section>
      </div>

    )
  }
};

export default Home;
