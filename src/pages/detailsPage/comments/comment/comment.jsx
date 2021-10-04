import { Button } from "antd";
import React from "react";
import './comment.scss'


const Comment = (props) => {
    return (
        <div className='comment__Comments'>
            <div className='commentText__Comments'>
                {props.text}
            </div>
            <Button 
                type="primary" 
                className='DelButton__Comment' 
                onClick={() => {
                    // xxx(props.index)
                }}
            >
                Del
            </Button>
        </div>
    )
}

export default Comment;