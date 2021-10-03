import React from 'react'
import { connect } from 'react-redux'
import { editWeightAction } from '../../../../store/reducers/editProduct.reducer'
import './editWeight.scss'


const EditWeight = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateEditWeight(text)
    }
    return (
        <textarea
            className='EditWeight'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.weight}>
        </textarea>
    )
}

let mapStateToProps = (state) => {
    return {
        weight: state.editProduct.modalFields.weight
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateEditWeight: (text) => {
            dispatch(editWeightAction(text))
        }  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditWeight);