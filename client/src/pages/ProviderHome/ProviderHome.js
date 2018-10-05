import React, { Component } from "react";
import Calendar from "../../components/FullCalendar";
// import { Link } from "react-router-dom";
import { firebase } from '../../firebase';
import API from "../../utils/API";
import "./ProviderHome.css"
import { CardTitle, Card, CardPanel, Col, Row, Section } from "react-materialize";
import AppointmentsTable from "../../components/AppointmentsTable"


class ProviderHome extends Component {

    state = {
        user: null,
        isLoading: true,
        providerInfo: null,
    };

    getProviderInfo = () => {
        console.log("getting provider info");
        API.getProviderInfo(
            this.state.user
        ).then(res =>
            this.setState({
                providerInfo: res.data,
            }),
        ).catch(err => console.log(err));

        console.log("got info");

    };

    componentDidMount() {
        
        firebase.auth.onAuthStateChanged(firebaseUser => {
            this.setState({
                user: firebaseUser,
                isLoading: false
            })

        })

        this.getProviderInfo();
    }
F
    render() {
        if (!this.state.isLoading) {

            console.log(this.state.user);
            console.log(this.state.providerInfo);

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
                                    <Calendar user={this.state.user}></Calendar>
                                </CardPanel>
                            </Col>
                        </Row>
                    </Section>
                </div>
            );
        } else {
            return ("Loading")
        }
    }
}

export default ProviderHome;
