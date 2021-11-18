import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
            <>
                {this.props.subgoals.map((subgoal) => {
                    return (
                        <div className="inrow comment-space-between comment-margin">
                            <div className="font half">{subgoal.subgoalname}</div>
                            <div class="comment-progress font">{subgoal.progress}</div>
                        </div>
                    )
                })}
            </>
        )
    }
}