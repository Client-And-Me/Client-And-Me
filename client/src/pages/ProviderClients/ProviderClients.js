import React, { Component } from "react";
import "./ProviderClients.css";
import { Row, Section } from "react-materialize";
import NavbarProvider from "../../components/Navbar/NavbarProvider";


class ProviderClients extends Component {
    state = {
    };

    render() {
        return (
            <div>
                <NavbarProvider />
                <Section className="customContainer">
                    <Row>
                        <h1>Hello World</h1>
                    </Row>

                </Section>
            </div>
        );
    }
}

export default ProviderClients;