import React from "react";
import './cancelButtonDW.scss'


const CancelButtonDW = (props) => {
    return (
        <button className='cancelButton__deleteProductWindow' onClick={() => props.setActive(false)}>
            Cancel
        </button>
    )
}

export default CancelButtonDW