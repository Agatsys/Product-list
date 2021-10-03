import React from 'react'
import { connect } from 'react-redux'
import { editColorAction } from '../../../../store/reducers/editProduct.reducer'
import './editColor.scss'


const EditColor = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateEditColor(text)
    }
    return (
        <textarea
            className='EditColor'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.color}>
        </textarea>
    )
}

let mapStateToProps = (state) => {
    return {
        color: state.editProduct.modalFields.color
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateEditColor: (text) => {
            dispatch(editColorAction(text))
        }    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditColor);