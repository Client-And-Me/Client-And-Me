import React, { Component } from "react";
import moment from "moment";
import "./apptModalButton.css";
// import datePicker from "../DatePicker/datePicker";
import { Modal, Button, Row, Input } from "react-materialize";

class ApptModalButton extends Component {
    //const ApptModalButton = () => {

    state = {
        recipes: [],
        recipeSearch: ""
    };

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    render() {
        return (

            <Modal
                fixedFooter
                trigger={<Button className="btn-floating btn-large right z-depth-5 #648c9f" id="addApptBtn">
                    <i className="material-icons">add</i>
                </Button>}
                actions={[
                    <Button className="waves-effect waves-light btn modal-action modal-close" id="modal-btn">Create<i className="material-icons right">send</i></Button>,
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
                        label="Client Name:"
                        placeholder="Client Name:"
                        s={12} />
                </Row>
                <Row>
                    <Input
                        id="start"
                        name="date"
                        type="date"
                        options={
                            {
                                "format": "mm/dd/yyyy",
                                "autoClose": true
                            }
                        }
                        label="Appointment Date:"
                        placeholder="Appointment Date:"
                        checked={true}
                        s={4}
                        onChange={function (e, value) { console.log(moment(value).format("MM/DD/YYYY")) }}
                    />

                    <Input
                        id="start-time"
                        name='start-time'
                        // label="Start Time:"
                        placeholder="Start Time:"
                        type='time'
                        s={2}
                        onChange={function (e, value) { }} />


                    <Input
                        id="duration-hour"
                        // label="Appointment Duration"
                        type="number"
                        placeholder="Hours"
                        step={1} min={0} max={23}
                        className="size-34 center-align validate tooltipped"
                        data-position="bottom"
                        data-tooltip="Hour"
                        s={3}
                        onChange={this.handleInputChange} />

                    <Input
                        id="duration-min"
                        type="number"
                        placeholder="Minutes"
                        step={1} min={0} max={59}
                        className="size-34 center-align validate tooltipped"
                        data-position="bottom"
                        data-tooltip="Minute"
                        s={3}
                        onChange={this.handleInputChange} />

                </Row>
                <Row>
                    <Input id="note" className="validate" label="Note (optional):" s={12} />
                </Row>
            </Modal >
        )
    };

}

export default ApptModalButton;
