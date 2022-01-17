import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card, Table } from 'reactstrap';
import './targetList.css'
import AddProgress from "../OkrComponents/AddProgress";
import CommentList from "./CommentList";
import Subgoal from "./Subgoal";

function SubgoalList(props) {

    return (
            <>
                {props.subgoals.map((subgoal) => {
                    return(
                        <Subgoal subgoalname={subgoal.subgoalname} progress={subgoal.progress}
                                 keyres={subgoal.keyres} id={subgoal.id} comments={subgoal.comments}
                                 q1={subgoal.q1} q2={subgoal.q2} q3={subgoal.q3} q4={subgoal.q4}/>
                    )
                })}
            </>
        )
}

export default SubgoalList