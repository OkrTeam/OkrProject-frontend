import React from 'react'
import './targetList.css'
import SubgoalList from "./SubgoalList"

function Goal(props) {
    return (
        <>
            <li class="padding-li">
                <div class="big-goal text">
                    <div class="text goal-fix">{props.goalname}</div>
                    <div class="tag">IT Hiring</div>
                </div>
                <ul className="ul-padding">
                    <SubgoalList subgoals={props.subgoals} />
                </ul>
            </li>
        </>
    )
}

export default Goal