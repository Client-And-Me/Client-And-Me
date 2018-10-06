import React, { Component } from "react";
import Calendar from "../../components/FullCalendar";
import LoadingGif from "../../components/LoadingGif";
// import { Link } from "react-router-dom";
import moment from "moment";
import { firebase } from '../../firebase';
import API from "../../utils/API";
import "./ProviderHome.css"
import { CardTitle, Card, CardPanel, Col, Row, Section } from "react-materialize";
import AppointmentsTable from "../../components/AppointmentsTable"

const date = moment().format()
class ProviderHome extends Component {

    state = {
        user: null,
        isLoading: true,
        providerInfo: null,
        fid: localStorage.getItem("fid")
    };

    getProviderInfo = () => {
        console.log("getting provider info");
        API.getProviderInfo(
            this.state.fid
        ).then(res =>
            this.setState({
                providerInfo: res.data,

            }),
        ).catch(err => console.log(err));

        console.log("got info");

    };
    getAppointments = () => {
        console.log("getting appts");
        // console.log(this.props.user.uid)
        // API.getAppts(this.state.fid).then(res =>
        //     this.setState({
        //         events: res.data,
        //     }),
        // ).catch(err => console.log(err));
        API.getApptsTable(localStorage.getItem("fid"), date).then(res =>
            this.setState({
                events: res.data,
            }),
        ).catch(err => console.log(err));


        console.log(this.props.user);
        console.log("got appts");

        //console.log(auth.currentUser().uid)
    };
    componentDidMount() {

        firebase.auth.onAuthStateChanged(firebaseUser => {
            this.setState({
                user: firebaseUser,
                isLoading: false
            })

        })
        console.log("ProviderHome mount started");
        //console.log(this.props.firebaseUser);
        console.log(this.state)
        this.getAppointments()
        console.log("ProviderHome mount end");
        this.getProviderInfo();
    }




    render() {
        if (!this.state.isLoading) {

            console.log(this.state);
            console.log(this.state.providerInfo);
            //<p><a href="#">This is a link</a></p>
            return (
                <div>
                    <Section className="customContainer">
                        <Row>
                            <Col s={12} m={3} l={3} offset="l1 m1 s0">
                                <Card className="homeHeight" header={<CardTitle reveal image={"./assets/images/female_profile.jpg"} waves='light' />}
                                    title={this.state.providerInfo.first_name + " " + this.state.providerInfo.last_name}
                                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                                </Card>
                            </Col>
                            <Col s={12} m={7} l={7}>
                                <AppointmentsTable events={this.state.events} />
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12} m={10} l={10} offset="l1 m1 s0">
                                <CardPanel>
                                    <Calendar events={this.state.events} user={this.state.user}></Calendar>
                                </CardPanel>
                            </Col>
                        </Row>
                    </Section>
                </div>
            );
        } else {
            return (
                <div>
                    <LoadingGif />
                </div>
                
                )
        }
    }
}

export default ProviderHome;
