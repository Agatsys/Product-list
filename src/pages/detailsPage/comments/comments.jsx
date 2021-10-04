import React from "react";
import './comments.scss'
import Comment from './comment/comment'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


const Comments = (props) => {
    const commentElement = props.commentsNew.map((item, index) => <Comment key={`comment-${index}`} index={index} uid={props.uid} text={item.text}/> )
    return (
        <div className='commentsWrapper__DetailPageWrapper'>
            Comments to {props.name}:
            {commentElement}
        </div>
    )
}

let mapStateToProps = (state, ownProps) => {
    
    const uidOfProduct = ownProps.match.params.id
    return {
        commentsNew: state.comments.commentsNew[uidOfProduct] || [],
        uid: ownProps.match.params.id
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments))