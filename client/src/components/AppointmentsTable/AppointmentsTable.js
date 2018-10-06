import React, { Component } from "react";
import ApptModalButton from "../ApptModalButton/apptModalButton";
import moment from "moment";
import { Table, tbody, tr, td, thead, th } from "react-materialize";
import "./AppointmentsTable.css";
import API from "../../utils/API";
import { async } from "@firebase/util";
const events = [];
class AppointmentsTable extends Component {


    state = {
        isLoading: true,
        events: this.props.events
    }
    // getAppointments = () => {
    //     console.log("getting appts");
    //     // console.log(this.props.user.uid)
    //     API.getAppts(localStorage.getItem("fid")).then(res =>
    //         this.setState({
    //             events: res.data,
    //             isLoading: false,
    //         }),
    //     ).catch(err => console.log(err));

    //     // console.log(this.props.user);
    //     console.log("got appts");

    //     //console.log(auth.currentUser().uid)
    // };
    componentDidMount() {
        console.log("FullCalendar mount started");
        this.setState({
            isLoading: false,
        })
        //console.log(this.props.firebaseUser);
        console.log(this.props.events)
        //this.getAppointments()
        console.log("FullCalendar mount end");
    }

    render() {
        if (!this.state.isLoading) {
            return (

                <div className="card appointments appointmentHeight left-align">
                    <div className="row margin">
                        <div className="col s12 m12 l12">
                            <nav>
                                <div className="nav-wrapper offset-s1">
                                    <a href="#" className="brand-logo font">Appointments</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m12 l12">
                            <table className="striped theTable">
                                <thead className="tableHead">
                                    <tr>
                                        <th>Client</th>
                                        <th>Start</th>
                                        <th>End</th>
                                        <th className="table-btn"></th>
                                    </tr>
                                </thead>
                                <tbody className="tableBody">
                                    {!this.props.events ? (
                                        <tr>
                                            <td>
                                                You currently do not have any appointments scheduled. Click the + button
                                                to add an appointment.
                                    </td>
                                        </tr>
                                    ) : (this.props.events.map((event, index) => (
                                        <tr name={index}>
                                            <td>
                                                {event.title}
                                            </td>
                                            <td>
                                                {moment(event.start).format("MM/DD/YYYY H:mm A")}
                                            </td>
                                            <td>
                                                {moment(event.end).format("MM/DD/YYYY H:mm A")}
                                            </td>
                                        </tr>
                                    )))}

                                    <ApptModalButton />
                                </tbody>

                            </table>
                            
                        </div>
                    </div>
                </div>

            );
        } else {
            return ("loading")
        }
    }
}


export default AppointmentsTable;