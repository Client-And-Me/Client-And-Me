import React, { Component } from "react";
import AppointmentsTable from "../../components/AppointmentsTable";
import moment from "moment"
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { firebase } from '../../firebase';
import "./ProviderAppointments.css";
import { Card, Col, Row, Section } from "react-materialize";

const date = moment().format()

class ProviderAppointments extends Component {
    getApptTable = () => {
        console.log("getting appts");
        // console.log(this.props.user.uid)
        API.getApptsTable(localStorage.getItem("fid"), date).then(res =>
            this.setState({
                events: res.data,
                isLoading: false,
            }),
        ).catch(err => console.log(err));

        console.log(this.props.user);
        console.log("got appts");

        //console.log(auth.currentUser().uid)
    };
    componentDidMount() {
        console.log("mounting");
        this.getApptTable();
        console.log("mounted")
    }
    state = {
        isLoading: true,
    };

    render() {
        if (!this.state.isLoading) {
            return (
                <div>
                    <Section className="customContainer">
                        <Row>
                            <Col s={12} m={5} l={5} offset="l1 m1 s0">

                                <AppointmentsTable events={this.state.events} />

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
        } else { return (<h1>Loading</h1>) }
    }
}

export default ProviderAppointments;