import React, { Component } from "react";
import AppointmentsTable from "../../components/AppointmentsTable";
import moment from "moment"
import API from "../../utils/API";
import LoadingGif from "../../components/LoadingGif";
// import { Link } from "react-router-dom";
import { firebase } from "../../firebase";
import "./ProviderAppointments.css";
import { Card, Col, Row, Section, CardPanel, Input, Button, Table } from "react-materialize";

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
                                    <Input value="Jess Smith" s={6} />
                                    <Input value="Cut and Color" s={6} />
                                    <Input value="10/10/2018 9:30 AM" s={6} />
                                    <Input value="10/10/2018 10:00 AM" s={6} />
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12} m={12} l={12}>
                                <CardPanel>
                                    <Row>
                                        <Input placeholder="Note" s={6} label="Note" />
                                        <Button waves="light">Submit</Button>
                                    </Row>
                                    <Row>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th data-field="Note">Note</th>

                                                    <th data-field="TimeStamp">TimeStamp</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>Use N45 color</td>
                                                    <td>10/8/2018 2:34 PM</td>
                                                </tr>
                                                <tr>
                                                    <td>Likes The Mom Cut</td>
                                                    <td>10/8/2018 2:38 PM</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Row>
                                </CardPanel>
                            </Col>
                        </Row>

                    </Section>
                </div>
            );
        } else {
            return (<div>
                <LoadingGif />
            </div>) }
    }
}

export default ProviderAppointments;