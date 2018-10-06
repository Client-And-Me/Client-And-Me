import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./ProviderSettings.css";
import { CardTitle, Card, Col, Row, Section, Input } from "react-materialize";
// import EditForm from "../../components/EditForm";

class ProviderSettings extends Component {
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
                        <Col s={12} m={2} l={5}>
                
                        </Col>
                    </Row>

                </Section>
            </div>
        );
    }
}

export default ProviderSettings;