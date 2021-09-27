import React from 'react'
import { connect } from 'react-redux'
import { addProductAction } from '../../../../store/reducers/productReducer'
import './addButton.scss'


const AddButton = (props) => {

    let AddNewProduct = () => {
        props.AddProduct()
    }

    return (
        <button className='AddButton' onClick={AddNewProduct}>
            Add
        </button>
    )
}

let mapStateToProps = () => {
    return {

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        AddProduct: () => {
            dispatch(addProductAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);