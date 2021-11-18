import React from 'react'
import './targetList.css'
import SubgoalArray from "../OkrComponents/Subgoal"
import goalArray from '../data/data'

function Goals() {
        return (
            <>
                {goalArray.map(goalArray => {
                    return (
                        <li class="padding-li">
                            <div class="big-goal text">
                                <div class="text goal-fix">{goalArray.goalname}</div>
                                <div class="tag">IT Hiring</div>
                            </div>
                            <ul className="ul-padding">
                                <SubgoalArray subgoals={goalArray.subgoals} />
                            </ul>
                        </li>
                    )
                })}
            </>
        )
}

export default Goals