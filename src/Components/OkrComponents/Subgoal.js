import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card, Table } from 'reactstrap';
import './targetList.css'
import AddProgress from "../OkrComponents/AddProgress";
import CommentList from "./CommentList";

function Subgoal(props) {

    const[state, setState] = useState({
        isOpen: false
    });

    const toggle = () => {
        setState({
            isOpen: !state.isOpen
        });
    }

    /*async getOkr() {
        let response = await fetch('http://localhost:5000/api/okr', {
            method: 'GET',
            mode: 'no-cors'
        });
        let result = response.json();
        return result;
    }*/

    return (
                <>
                    <li className="padding-li text inrow">
                        <div>
                            <Button className='background-col' onClick={toggle} style={{ marginBottom: '1rem' }}>
                                <div>
                                    <div className="mini-goal text">
                                        <div className="mini-goal-fix">{props.subgoalname}</div>
                                        <button className="btn-comment" data-bs-toggle="modal" data-bs-target={"#" + props.id}>
                                            Внести прогресс
                                        </button>
                                    </div>
                                    <div className="progressbar">
                                        <div className="progress-gradient" style={{ width: `${props.progress / props.keyres * 100}%` }}></div>
                                    </div>
                                </div>
                            </Button>
                            <AddProgress id={props.id} value={props.progress} />
                            <Collapse isOpen={state.isOpen}>
                                <Card className='card-margin-btm'>
                                    <CardBody className="card-fix">
                                        <div>
                                            <Table striped>
                                                <tbody>
                                                <CommentList comments={props.comments} />
                                                </tbody>
                                            </Table>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </div>
                        <div className="padding-progress">
                            <div className="progressunit center">{props.progress} %</div>
                        </div>
                        <div className="quartals inrow">
                            <div className="quartal center">{props.q1} %</div>
                            <div className="quartal center">{props.q2} %</div>
                            <div className="quartal center">{props.q3} %</div>
                            <div className="lastquartal center">{props.q4} %</div>
                        </div>
                    </li>
                </>
    )
}

export default Subgoal