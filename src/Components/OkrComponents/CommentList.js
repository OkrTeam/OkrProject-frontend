import React from 'react'
import './targetList.css'
import Comment from "./Comment";

 function CommentList(props){
        return (
            <>
                {props.comments.map((comment) => {
                    return (
                        <Comment text={comment.text} comprog={comment.comprog}/>
                    )
                })}
            </>
        )
}

export default CommentList