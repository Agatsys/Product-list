import { Button } from "antd";
import React from "react";
import { connect } from "react-redux";
import { deleteCommentAction } from "../../../../store/reducers/addComment.reducer";
import './comment.scss'


const Comment = (props) => {
    return (
        <div className='comment__Comments'>
            <div className='commentText__Comments'>
                {props.text}
            </div>
            <Button 
                danger={true}
                type="primary" 
                className='DelButton__Comment' 
                onClick={() => props.deleteComment(props.uid, props.index)}>
                X
            </Button>
        </div>
    )
}

const mapDispatchToProps = {
    deleteComment: deleteCommentAction,
}

export default connect(null, mapDispatchToProps)(Comment) ;