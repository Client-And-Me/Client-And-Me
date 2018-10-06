import React from "react";
import "./ProviderClientsCollapsibleNested.css";
import { Row, Col, CardPanel, Collapsible, CollapsibleItem, Table, Input } from "react-materialize";

export default () => (
    <Row>
        <Col s={6} m={6} l={6}>
            <CardPanel className="CollapsibleHeight">
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
        <Col s={6} m={6} l={6}>
            <CardPanel className="">
                <Collapsible accordion >
                    <CollapsibleItem header="10/10/2018" icon="date_range">
                        <Input value="Jess Smith" s={6} />
                        <Input value="Cut and Color" s={6} />
                        <Input value="10/10/2018 9:30 AM" s={6} />
                        <Input value="10/10/2018 10:00 AM" s={6} />
                    </CollapsibleItem>
                    <CollapsibleItem header="12/15/2018" icon="date_range">
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                    <CollapsibleItem header="01/03/2019" icon="date_range">
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                </Collapsible>
            </CardPanel>
        </Col>
    </Row>
)