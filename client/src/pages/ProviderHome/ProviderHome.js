import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
import FullCalendar from "../../components/FullCalendar";
// import { Link } from "react-router-dom";
import Modal from "../../components/Modal"
import "./ProviderHome.css"
import { CardTitle, Card, Col, Row, Section } from "react-materialize";
import NavbarProvider from "../../components/Navbar/NavbarProvider";


class ProviderHome extends Component {
    state = {
    };

    render() {
        return (
            <div>
                <NavbarProvider />
            <Section>
                <Row>
                    <Col s={12} m={3} l={3}>
                        <Card header={<CardTitle reveal image={"./assets/images/female_profile.jpg"} waves='light' />}
                            title="Name Goes Here"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </Col>
                    <Col s={12} m={9} l={9}>
                        <div className="card-panel">
                            <FullCalendar />
                        </div>
                    </Col>
                </Row>

            </Section>
            </div>
        );
    }
}

export default ProviderHome;
