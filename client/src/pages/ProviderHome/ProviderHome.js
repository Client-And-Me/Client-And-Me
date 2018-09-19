import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Prices from "../../components/Prices";
import FullCalendar from "../../components/FullCalendar";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";


class ProviderHome extends Component {
    state = {
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>client&me: simple client management software for independent beauty professionals</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-4">
                        <Prices />
                    </Col>
                    <Col size="md-4">
                        <Prices />
                    </Col>
                    <Col size="md-4">
                        <FullCalendar />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProviderHome;
