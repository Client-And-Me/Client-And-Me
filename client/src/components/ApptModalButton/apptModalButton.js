import React, { Component } from "react";
import moment from "moment";
import "./apptModalButton.css";
import { auth } from "../../firebase";
import $ from "jquery";
// import datePicker from "../DatePicker/datePicker";
import { Modal, Button, Row, Input } from "react-materialize";
import API from "../../utils/API";

class ApptModalButton extends Component {
    //const ApptModalButton = () => {

    state = {
        firebase_id: auth.currentUser()
    };
    saveApptToDatabase(body) {
        console.log(body)
        API.saveAppointment(body)
            .then(function (response) {
                console.log(response)
            })
    };
    createAppt = event => {

        let param = {
            title: this.state.client_name,
            //=allDay: "false",
            start: moment(this.state.startDate).utc(),
            end: moment(this.state.endDate).utc(),
            url: "",
            color: "blue",
            client_id: this.state.client_name,
            firebase_id: auth.currentUser().uid,
        };
        this.saveApptToDatabase(param);
        event.preventDefault();
    };




    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        //console.log("Input Change");

        let dateTime = this.state.date + " " + moment(this.state.startTime, "h:mmA").format("HH:mm")
        this.setState({
            startDate: moment(dateTime).format()
        });
        // console.log(moment(this.state.date + " " + moment(this.state.startTime, "h:mmA").format("HH:mm")).format());
        if (this.state.durationHour) {
            let duration = parseInt(this.state.durationHour) * 60 + parseInt(this.state.durationMin)
            let endDate = moment(dateTime).add(duration, "m")
            // console.log(duration);
            if (!this.state.durationMin) {
                this.setState({ durationMin: "0" })
            }
            // console.log(moment(endDate).format());
            this.setState({
                endDate: moment(endDate).format()
            });
        };
        //console.log(auth.currentUser().uid);
        // console.log(this.state);
        // console.log(this.state.date.format());
    };
    render() {
        return (

            <Modal

                trigger={<Button className="btn-floating btn-large right z-depth-5 #648c9f" id="addApptBtn">
                    <i className="material-icons">add</i>
                </Button>}
                actions={[
                    <Button className="waves-effect waves-light btn modal-action modal-close" id="modal-btn" onClick={this.createAppt}>Create<i className="material-icons right">send</i></Button>,
                    <Button className="waves-effect red waves-light btn modal-action modal-close left" id="delete-btn">Delete</Button>
                ]}
            >
                <Row>
                    <Button href="#!" data-id className="waves-effect red waves-light btn-floating modal-action modal-close right" id="close-btn">
                        <i className="material-icons">close</i>
                    </Button>
                </Row>
                <Row>
                    <Input
                        id="client_name"
                        name="client_name"
                        className="validate"
                        //label="Client Name:"
                        placeholder="Client Name:"
                        s={12}
                        onChange={this.handleInputChange}
                    />
                </Row>
                <Row>
                    <Input
                        id="start"
                        name="date"
                        type="date"
                        options={
                            {
                                "container": "body",
                                "format": "mm/dd/yyyy",
                                "onSelect": function () {
                                },
                            }
                        }
                        //label="Appointment Date:"
                        placeholder="Appointment Date:"
                        checked={true}
                        s={4}
                        // onChange={function (e, value) {
                        //     //console.log(this.state.authUser.uid)
                        //     // console.log(moment(value).format("MM/DD/YYYY"));
                        //     // $('.picker__close').click();
                        // }}
                        onChange={this.handleInputChange}
                    />

                    <Input
                        id="start-time"
                        name="startTime"
                        //label="Start Time:"
                        options={
                            {
                                "container": "body",
                                "autoClose": true,
                                "defaultTime": "now",
                                "fromNow": "10000"
                            }
                        }
                        placeholder="Start Time:"
                        type='time'
                        s={2}
                        // onChange={function (e, value) { console.log(value) }} 
                        onChange={this.handleInputChange}
                    />


                    <Input
                        id="duration-hour"
                        name="durationHour"
                        //label="Appointment Duration"
                        helper-text="Appointment Duration"
                        type="number"
                        placeholder="Hours"
                        step={1} min={0} max={23}
                        className="size-34 center-align validate tooltipped"
                        data-position="bottom"
                        data-tooltip="Hour"
                        s={3}
                        onChange={this.handleInputChange}
                    />

                    <Input
                        id="duration-min"
                        name="durationMin"
                        type="number"
                        value={this.state.durationMin}
                        placeholder="Minutes"
                        step={1} min={0} max={59}
                        className="size-34 center-align validate tooltipped"
                        data-position="bottom"
                        data-tooltip="Minute"
                        s={3}
                        onChange={this.handleInputChange}
                    />

                </Row>
                <Row>
                    <Input
                        id="note"
                        className="validate"
                        name="note"
                        onChange={this.handleInputChange}
                        ////label="Note (optional):" 
                        s={12}
                    />
                </Row>
            </Modal >
        )
    };


}

export default ApptModalButton;
