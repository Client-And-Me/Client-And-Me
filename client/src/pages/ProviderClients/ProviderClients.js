import React, { Component } from "react";
import { Row, Section } from "react-materialize";
import NavbarProvider from "../../components/Navbar/NavbarProvider";


class ProviderClients extends Component {
    state = {
    };

    render() {
        return (
            <div>
                <NavbarProvider />
                <Section>
                    <Row>
                        <h1>Hello World</h1>
                    </Row>

                </Section>
            </div>
        );
    }
}

export default ProviderClients;