import React from 'react'
import { connect } from 'react-redux'
import { editWidthAction } from '../../../../store/reducers/editProduct.reducer'
import './editWidth.scss'


const EditWidth = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateEditWidth(text)
    }
    return (
        <textarea
            className='EditWidth'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.width}>
        </textarea>
    )
}

let mapStateToProps = (state) => {
    return {
        width: state.editProduct.modalFields.width
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateEditWidth: (text) => {
            dispatch(editWidthAction(text))
        }  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditWidth);