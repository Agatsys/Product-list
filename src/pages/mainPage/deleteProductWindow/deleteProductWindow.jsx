import React from "react";
import { connect } from "react-redux";
import { closeModalAction } from "../../../store/reducers/deleteProduct.reducer";
import CancelButtonDW from "./cancelButton/cancelButtonDW";
import DeleteButtonDW from "./deleteButton/deleteButtonDW";
import './deleteProductWindow.scss'


const DeleteProductWindow = (props) => {
    return (
        <div className={props.isModalOpen ? 'deleteProductWindow active' : 'deleteProductWindow'} onClick={props.closeModal}>
            <div className='Content__deleteProductWindow' onClick={e => e.stopPropagation()}>
                <div className='text__deleteProductWindow'>Delete this? <br/>Realy?</div>
                <DeleteButtonDW/>
                <CancelButtonDW/>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
        closeModal: closeModalAction
}

export default connect(null, mapDispatchToProps)(DeleteProductWindow)