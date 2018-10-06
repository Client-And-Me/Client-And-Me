import React from "react";
import "./ProviderClientsCollapsibleMain.css";
import CollapsibleNested from "../ProviderClientsCollapsibleNested";
import { Section, Card, Row, Col, Collapsible, CollapsibleItem, CardPanel } from 'react-materialize';

export default () => (
    <Section>
        <Row>
            <Col s={12} m={12} l={12}>
                <div className="card collapsibleMain">
                    <Collapsible accordion defaultActiveKey={0}>
                        <CollapsibleItem header='First' icon='account_circle'>
                            <CollapsibleNested>
                            </CollapsibleNested>
                        </CollapsibleItem>
                        <CollapsibleItem header='Second' icon='account_circle'>
                            <CollapsibleNested>
                            </CollapsibleNested>
                      </CollapsibleItem>
                        <CollapsibleItem header='Third' icon='account_circle'>
                            <CollapsibleNested>
                            </CollapsibleNested>
                      </CollapsibleItem>
                        {/* <CollapsibleItem header='Fourth' icon='account_circle'>
                            <CollapsibleNested>
                            </CollapsibleNested>
                      </CollapsibleItem>
                        <CollapsibleItem header='Fifth' icon='account_circle'>
                            <CollapsibleNested>
                            </CollapsibleNested>
                      </CollapsibleItem> */}
                    </Collapsible>
                </div>
            </Col>
        </Row>
    </Section>
)