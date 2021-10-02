import React from "react";
import './editProductButton.scss'


const EditProductButton = (props) => {
    return (
        <button className='EditButton__DetailPageWrapper' onClick={() => props.setModalActive(true)}>
            Edit product
        </button>
    )
}

export default EditProductButton;