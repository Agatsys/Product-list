import React from "react";
import './comment.scss'


const Comment = (props) => {
    return (
        <div className='comment__Comments'>
            <div className='commentText__Comments'>
                {props.text}
            </div>



        </div>
    )
}

export default Comment;