import React from "react";


const CustomComment = ({
    commentBlockClassName,
    textBlockClassName,
    text,
    deleteButtonClassName,
    deleteComment,
    uid,
    index
}) => {
    return (
        <div className={commentBlockClassName}>
            <div className={textBlockClassName}>{text}</div>
            <button 
                className={deleteButtonClassName}
                onClick={() => deleteComment(uid, index)}>
                X
            </button>
        </div>
    )
}

export default CustomComment