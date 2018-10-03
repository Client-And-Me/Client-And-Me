import React from "react";
import "./ProviderClientsCollapsibleNested.css";
import { Row, Col, CardPanel, Collapsible, CollapsibleItem } from 'react-materialize';

export default () => (
    <Row>
        <Col s={6} m={6} l={6}>
            <CardPanel className="height">
                <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
            </CardPanel>
        </Col>
        <Col s={6} m={6} l={6}>
            <CardPanel className="">
                <Collapsible accordion >
                    <CollapsibleItem header='Upcoming Appointment' icon='date_range'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                    <CollapsibleItem header='Most Recent Appointment' icon='date_range'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                    <CollapsibleItem header='Second Most Recent Appointment' icon='date_range'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                </Collapsible>
            </CardPanel>
        </Col>
    </Row>
)