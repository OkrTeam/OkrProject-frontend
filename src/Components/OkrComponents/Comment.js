import React from 'react'
import './targetList.css'

function Comment(props){
    return (
        <>
            <div className="inrow comment-space-between comment-padding">
                <div className="font half">{props.text}</div>
                <div class="comment-progress font">{props.comprog}</div>
            </div>
        </>
    )
}

export default Comment