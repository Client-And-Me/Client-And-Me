import React, { Component } from "react";
import ApptModalButton from "../ApptModalButton/apptModalButton";
//import { Row, Input } from "react-materialize";
import "./AppointmentsTable.css";

class AppointmentsTable extends Component {

    render() {

        return (

            <div className="card appointments height left-align">
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
                                    <th>Note</th>
                                    <th className="table-btn"></th>
                                </tr>
                            </thead>
                            <tbody className="tableBody">
                                <tr>
                                    <td>You currently do not have any appointments scheduled. Click the + button
                                        to add an appointment.
                                            </td>
                                </tr>
                            </tbody>

                        </table>
                        <ApptModalButton />
                    </div>
                </div>
            </div>

        );
    }
}


export default AppointmentsTable;