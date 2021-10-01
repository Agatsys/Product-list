import React from "react";
import './comments.scss'
import Comment from './comment/comment'
import { connect } from "react-redux";


const Comments = (props) => {
    const commentElement = props.commentsData.map( (c) => <Comment  
        text={c.text}
         /> )
    return (
        <div className='commentsWrapper__DetailPageWrapper'>
            Comments to {props.name}:
            {commentElement}
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        commentsData: state.comments.commentsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)