import React, {useState} from "react";
import {Collapse, Button, CardBody, Card, Row, Col} from 'reactstrap';
import TeamItem from "./TeamItem";
import './teamsStyle.css'

function DepartmentItem(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <Button className='dp-btn' onClick={toggle} style={{ marginBottom: '1rem' }}>{props.department.name}</Button>
            <Collapse isOpen={isOpen}>
                <Card className='margin-bottom'>
                    <CardBody>
                        <Row>
                            <>
                                {props.department.teams.map((team) => {
                                    return (
                                        <Col lg='4'><TeamItem team={team} /></Col>
                                        )
                                    })
                                }
                            </>
                        </Row>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    )
}

export default DepartmentItem