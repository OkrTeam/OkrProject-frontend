import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card, Table } from 'reactstrap';
import './targetList.css'
import AddProgress from "../OkrComponents/AddProgress";
import Comments from "../OkrComponents/Comment";

function SubgoalArray(props) {

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
                {props.subgoals.map((subgoal) => {
                    return (
                        <li className="padding-li text inrow">
                            <div>
                                <Button className='background-col' onClick={toggle} style={{ marginBottom: '1rem' }}>
                                    <div>
                                        <div className="mini-goal text">
                                            <div className="mini-goal-fix">{subgoal.subgoalname}</div>
                                            <button className="btn-comment" data-bs-toggle="modal" data-bs-target={"#" + subgoal.id}>
                                                Внести прогресс
                                            </button>
                                        </div>
                                        <div className="progressbar">
                                            <div className="progress-gradient" style={{ width: `${subgoal.progress / subgoal.keyres * 100}%` }}></div>
                                        </div>
                                    </div>
                                </Button>
                                <AddProgress id={subgoal.id} value={subgoal.progress} />
                                <Collapse isOpen={state.isOpen}>
                                    <Card className='card-margin-btm'>
                                        <CardBody className="card-fix">
                                            <div>
                                                <Table striped>
                                                    <tbody>
                                                        <Comments comments={subgoal.comments} />
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                            <div className="padding-progress">
                                <div className="progressunit center">{subgoal.progress}</div>
                            </div>
                            <div className="quartals inrow">
                                <div className="quartal center">{subgoal.q1}</div>
                                <div className="quartal center">{subgoal.q2}</div>
                                <div className="quartal center">{subgoal.q3}</div>
                                <div className="lastquartal center">{subgoal.q4}</div>
                            </div>
                        </li>
                    )
                })}
            </>
        )
}

export default SubgoalArray