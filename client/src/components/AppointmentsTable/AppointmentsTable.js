import React, { Component } from 'react';

class AppointmentsTable extends Component {

    render() {

        return (
            
                    <div className="card appointments left-align height marginLeft">
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
                                <a className="btn-floating btn-large right z-depth-5 #648c9f" id="addApptBtn">
                                    <i className="material-icons">add</i>
                                </a>
                            </div>
                        </div>
                    </div>

        )
    }
}


export default AppointmentsTable;