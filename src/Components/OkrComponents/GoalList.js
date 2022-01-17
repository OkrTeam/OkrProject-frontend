import React from 'react'
import './targetList.css'
import goalArray from '../data/data'
import Goal from "./Goal";

function GoalList() {
        return (
            <>
                {goalArray.map(goal => {
                    return (
                        <Goal goalname={goal.goalname} subgoals={goal.subgoals}/>
                    )
                })}
            </>
        )
}

export default GoalList