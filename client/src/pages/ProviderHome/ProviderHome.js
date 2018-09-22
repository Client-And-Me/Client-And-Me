import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
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
                    <Col size="s12 m3 l3">
                        <Prices />
                    </Col>
                    <Col size="s12 m8 l8">
                        <div class="card-panel">
                            <FullCalendar />
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProviderHome;
