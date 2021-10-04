import React from 'react'
import { connect } from 'react-redux'
import { editDescriptionAction } from '../../../../store/reducers/editProduct.reducer'
import './editDescription.scss'


const EditDescription = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateEditDescription(text)
    }
    return (
        <textarea
            className='EditDescription'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.description}>
        </textarea>
    )
}

let mapStateToProps = (state) => {
    return {
        dEscription: state.editProduct.modalFields.dEscription
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateEditDescription: (text) => {
            dispatch(editDescriptionAction(text))
        }    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDescription);