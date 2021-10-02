import React from "react";
import './comments.scss'
import Comment from './comment/comment'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


const Comments = (props) => {

    const commentElement = props.commentsNew.map((item, index) => <Comment key={`comment-${index}`} text={item.text}/> )
    return (
        <div className='commentsWrapper__DetailPageWrapper'>
            Comments to {props.name}:
            {commentElement}
        </div>
    )
}


let mapStateToProps = (state, ownProps) => {
    
    const uid = ownProps.match.params.id
    return {
        commentsNew: state.comments.commentsNew[uid] || []
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments))