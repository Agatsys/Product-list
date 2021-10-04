import React from "react";
import AddCommentButton from "./addCommentButton/addCommentButton";
import './addComment.scss'
import { connect } from "react-redux";
import { updateCommentAction } from "../../../store/reducers/addComment.reducer";
import { useParams } from 'react-router-dom'


const AddComment = (props) => {
    const params = useParams()

    let newCommentElement = React.createRef()

    let onCommentChange = () => {
        let text = newCommentElement.current.value;
        props.updateComment(text)
    }

    return (
        <div className='addComment__DetailPageWrapper'>
            <div className='writeYourComment'>Write your comment:</div>
            <textarea
                className='enterComment__DetailPageWrapper'
                onChange={onCommentChange}
                ref={newCommentElement}
                value={props.newText}
            />
            <AddCommentButton uid={params.id} />
        </div>
    )
}


let mapStateToProps = (state, ownProps) => {
    return {
        newText: state.comments.newText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateComment: (text) => {
            let action = updateCommentAction(text)
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);