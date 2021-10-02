import React from "react";
import { connect } from "react-redux";
import { addCommentAction } from "../../../../store/reducers/addComment.reducer";
import './addCommentButton.scss'


const addCommentButton = (props) => {

    let AddNewComment = () => {
        props.AddComment(props.uid)
    }

    return (
        <button className='addCommentButton__DetailPageWrapper' onClick={AddNewComment}>Add comment</button>
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddComment: (uid) => {
            dispatch(addCommentAction(uid));
        }
    }
}

export default connect(null, mapDispatchToProps)(addCommentButton);