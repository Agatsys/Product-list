import React from "react";
import './comments.scss'
//import Comment from './comment/comment'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteCommentAction } from "../../../store/reducers/addComment.reducer";
import CustomComment from "../../components/CustomComment";


const Comments = (props) => {
    const commentElement = props.commentsNew.map((item, index) => 
        <CustomComment 
            key={`comment-${index}`} 
            index={index} 
            uid={props.uid}     
        />
        // <Comment 
        //     key={`comment-${index}`} 
        //     index={index} 
        //     uid={props.uid} 
        //     text={item.text}/> 
            )
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
const mapDispatchToProps = {
    deleteComment: deleteCommentAction,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments))