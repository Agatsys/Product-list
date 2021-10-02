import React from "react";
import { connect } from "react-redux";
import { deleteProductAction } from "../../../../../store/reducers/product.reducer";
import './deleteButtonDW.scss'


const DeleteButtonDW = (props) => {
    return (
        <button className='deleteButton__deleteProductWindow' onClick={() => props.deleteProduct(props.id)}>
            Delete
        </button>
    )
}

const mapDispatchToProps = {
    deleteProduct: deleteProductAction,
}

export default connect(null, mapDispatchToProps)(DeleteButtonDW) 


