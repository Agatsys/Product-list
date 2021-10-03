import React from 'react'
import { connect } from 'react-redux'
import { editLengthAction } from '../../../../store/reducers/editProduct.reducer'
import './editLength.scss'


const EditLength = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateEditLength(text)
    }
    return (
        <textarea
            className='EditLength'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.length}>
        </textarea>
    )
}

let mapStateToProps = (state) => {
    return {
        length: state.editProduct.modalFields.length
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateEditLength: (text) => {
            dispatch(editLengthAction(text))
        }  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditLength);