import React from 'react'
import './targetList.css'

 function Comments(props){
        return (
            <>
                {props.comments.map((comment) => {
                    return (
                        <div className="inrow comment-space-between comment-padding">
                            <div className="font half">{comment.text}</div>
                            <div class="comment-progress font">{comment.comprog}</div>
                        </div>
                    )
                })}
            </>
        )
}

export default Comments