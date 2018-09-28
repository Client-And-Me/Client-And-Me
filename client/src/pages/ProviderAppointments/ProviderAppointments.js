import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
import FullCalendar from "../../components/FullCalendar";
// import { Link } from "react-router-dom";
import Modal from "../../components/Modal"
// import "./ProviderAppointments.css";
import { CardTitle, Card, Col, Row, Section } from "react-materialize";
import NavbarProvider from "../../components/Navbar/NavbarProvider";


class ProviderAppointments extends Component {
    state = {
    };

    render() {
        return (
            <div>
            <NavbarProvider />
            <Section>
                <Row>
                    <Col s={12} m={9} l={9}>
                        <div className="card-panel">
                            <FullCalendar />
                        </div>
                    </Col>
                    <Col s={12} m={3} l={3}>
                        <Card header={<CardTitle reveal image={"./assets/images/female_profile.jpg"} waves='light' />}
                        title="Appointment Details"
                        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                        </Card>
                    </Col>
                </Row>

            </Section>
            </div>
        );
    }
}

export default ProviderAppointments;