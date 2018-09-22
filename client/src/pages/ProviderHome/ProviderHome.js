import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
import Prices from "../../components/Prices";
import FullCalendar from "../../components/FullCalendar";
// import { Link } from "react-router-dom";
import Modal from "../../components/Modal"
import { Col, Row, Container } from "react-materialize";


class ProviderHome extends Component {
    state = {
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col s={12} m={3} l={3}>
                        <Prices />
                    </Col>
                    <Col s={12} m={8} l={8}>
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
