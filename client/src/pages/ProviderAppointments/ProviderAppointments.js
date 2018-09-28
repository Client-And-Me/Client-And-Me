import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
import FullCalendar from "../../components/FullCalendar";
// import { Link } from "react-router-dom";
import Modal from "../../components/Modal"
// import "./ProviderAppointments.css";
import { CardTitle, Card, Col, Row, Section } from "react-materialize";


class ProviderAppointments extends Component {
    state = {
    };

    render() {
        return (
            <Section>
                <Row>
                    <Col s={12} m={9} l={9}>
                        <div className="card-panel">
                            <FullCalendar />
                        </div>
                    </Col>
                    <Col s={12} m={3} l={3}>
                        <Card
                        title="Appointment Details">
                        Appointment details for each appointment that is clicked on will appear here.
                        </Card>
                    </Col>
                </Row>

            </Section>
        );
    }
}

export default ProviderAppointments;