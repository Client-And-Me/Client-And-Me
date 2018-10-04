import React, { Component } from "react";
import "./ProviderClients.css";
import { Row, Section } from "react-materialize";
import ProviderClientsCollapsibleMain from "../../components/ProviderClientsCollapsibleMain";


class ProviderClients extends Component {
    state = {
    };

    render() {
        return (
            <div>
                <Section className="customContainer">
                    <Row>
                        <ProviderClientsCollapsibleMain />
                    </Row>

                </Section>
            </div>
        );
    }
}

export default ProviderClients;