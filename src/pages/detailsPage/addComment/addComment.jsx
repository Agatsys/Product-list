import React from "react";
import AddCommentButton from "./addCommentButton/addCommentButton";
import './addComment.scss'


const AddComment = () => {
    return (
        <div className='addComment__DetailPageWrapper'>
            <div className='writeYourComment'>Write your comment:</div>
            <textarea 
                className='enterComment__DetailPageWrapper'
                />
            <AddCommentButton />
        </div>
    )
}

export default AddComment;