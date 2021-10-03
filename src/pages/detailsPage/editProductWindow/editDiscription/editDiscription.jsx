import React from 'react'
import { connect } from 'react-redux'
import { editDiscriptionAction } from '../../../../store/reducers/editProduct.reducer'
import './editDiscription.scss'


const EditDiscription = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateEditDiscription(text)
    }
    return (
        <textarea
            className='EditDiscription'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.discription}>
        </textarea>
    )
}

let mapStateToProps = (state) => {
    return {
        discription: state.editProduct.modalFields.discription
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateEditDiscription: (text) => {
            dispatch(editDiscriptionAction(text))
        }    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDiscription);