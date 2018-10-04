import React, { Component } from "react";
import FullCalendar from "../../components/FullCalendar";
// import { Link } from "react-router-dom";
import "./ProviderAppointments.css";
import { Card, Col, Row, Section } from "react-materialize";



class ProviderAppointments extends Component {
    state = {
    };

    render() {
        return (
            <div>
                <Section className="customContainer">
                    <Row>
                        <Col s={12} m={5} l={5} offset="l1 m1 s0">
                            <div className="card-panel">
                                <FullCalendar className="calendar" />
                            </div>
                        </Col>
                        <Col s={12} m={2} l={5}>
                            <Card className="appointmentDetails"
                                title="Appointment Details">
                                Appointment details for each appointment that is clicked on will appear here.
                                This will have a route that displays the date, time, and information for the appointment.
                        </Card>
                        </Col>
                    </Row>

                </Section>
            </div>
        );
    }
}

export default ProviderAppointments;