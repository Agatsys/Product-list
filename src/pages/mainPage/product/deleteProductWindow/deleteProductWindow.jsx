import React from "react";
import CancelButtonDW from "./cancelButton/cancelButtonDW";
import DeleteButtonDW from "./deleteButton/deleteButtonDW";
import './deleteProductWindow.scss'


const DeleteProductWindow = (props) => {
    return (
        <div className={props.active ? 'deleteProductWindow active' : 'deleteProductWindow'} onClick={() => props.setActive(false)}>
            <div className='Content__deleteProductWindow' onClick={e => e.stopPropagation()}>
                <div className='text__deleteProductWindow'>Delete this?</div>
                <div className='name__deleteProductWindow'>{props.name}</div>
                <DeleteButtonDW id={props.id}/>
                <CancelButtonDW setActive={props.setActive}/>
            </div>
        </div>
    )
}

export default DeleteProductWindow