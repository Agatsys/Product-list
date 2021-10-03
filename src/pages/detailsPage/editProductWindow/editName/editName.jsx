import React from 'react'
import { connect } from 'react-redux'
import { editNameAction } from '../../../../store/reducers/editProduct.reducer'
import './editName.scss'


const EditName = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateEditName(text)
    }
    console.log()
    return (
        <textarea
            className='EditName'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.name}>
        </textarea>
    )
}

let mapStateToProps = (state) => {
    return {
        name: state.editProduct.modalFields.name
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateEditName: (text) => {
            dispatch(editNameAction(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditName);



//newEditedName