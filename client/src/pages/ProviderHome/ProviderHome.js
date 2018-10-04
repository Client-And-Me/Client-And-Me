import React, { Component } from "react";
import FullCalendar from "../../components/FullCalendar";
// import { Link } from "react-router-dom";
import "./ProviderHome.css"
import { CardTitle, Card, CardPanel, Col, Row, Section, Input } from "react-materialize";
import AppointmentsTable from "../../components/AppointmentsTable"




class ProviderHome extends Component {
    state = {
    };

    render() {
        return (
            <div>
                <Section className="customContainer">
                    <Row>
                        <Col s={12} m={3} l={3} offset="l1 m1 s0">
                            <Card className="homeHeight" header={<CardTitle reveal image={"./assets/images/female_profile.jpg"} waves='light' />}
                                title="Name Goes Here"
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                                <p><a href="#">This is a link</a></p>
                            </Card>
                        </Col>
                        <Col s={12} m={7} l={7}>
                            <AppointmentsTable />
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} m={10} l={10} offset="l1 m1 s0">
                            <CardPanel>
                                <FullCalendar />
                            </CardPanel>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col s={12} m={10} l={10}>
                            <Row>
                                <Input name='on' type='date' onChange={function (e, value) { }} />
                            </Row>
                        </Col>
                    </Row> */}
                </Section>
            </div>
        );
    }
}

export default ProviderHome;
