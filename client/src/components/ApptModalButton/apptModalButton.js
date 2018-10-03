import React, { Component } from 'react';

import { Modal, Button, Row, Input } from 'react-materialize';


const ApptModalButton = () => {

    return (

        <Modal
            fixedFooter
            trigger={<Button className="btn-floating btn-large right z-depth-5 #648c9f" id="addApptBtn">
                <i className="material-icons">add</i>
            </Button>}
            actions={<Button className="waves-effect waves-light btn modal-action modal-close" id="modal-btn">Create<i className="material-icons right">send</i></Button>}>

            <Row>
                <Button href="#!" data-id className="waves-effect red waves-light btn-floating modal-action modal-close right" id="close-btn">
                    <i className="material-icons">close</i>
                </Button>
            </Row>
            <Row>
                <Input id="client_name" className="validate" label="Client Name:" s={12} />
            </Row>
            <Row>
                {/* <Input name='on' type='date' onChange={function (e, value) { }} />
                <Input name='on' type='time' onChange={function(e, value) {}} /> */}
                <Input id="start" className="datepicker" label="Start Date:" s={4} />
                <Input id="start-time" className="timepicker" label="Start Time:" s={2} />
                <Input id="duration-hour" label="Appointment Duration" type="number" placeholder="Hours" step={1} min={0} max={24} className="size-36 center-align validate tooltipped" data-position="bottom" data-tooltip="Hours" s={3} />
                <Input id="duration-min" type="number" placeholder="Minutes" step={1} min={0} max={60} className="size-36 center-align validate tooltipped" data-position="bottom" data-tooltip="Minutes" s={3} />
            </Row>
            <Row>
                <Input id="note" className="validate" label="Note (optional):" s={12} />
            </Row>
            <Row>
                <Button className="waves-effect red waves-light btn modal-action modal-close left" id="delete-btn">Delete</Button>
            </Row>
        </Modal >
    );

}

export default ApptModalButton;
