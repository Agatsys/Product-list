import React from 'react'
import { connect } from 'react-redux'
//import { openModalAction } from '../../../../store/reducers/deleteProduct.reducer'
import { deleteProductAction } from '../../../../store/reducers/product.reducer'
import './deleteButton.scss'


const DeleteButton = (props) => {
    return (
        <button className='DeleteButton' onClick={() => props.deleteProduct(props.id)}>
            Delete
        </button>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = {
    deleteProduct: deleteProductAction
    //openModal: openModalAction
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);


//deleteProduct: deleteProductAction
// () => props.deleteProduct(props.id)