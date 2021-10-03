import React from 'react'
import { connect } from 'react-redux'
import { editHeightAction } from '../../../../store/reducers/editProduct.reducer'
import './editHeight.scss'


const EditHeight = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateEditHeight(text)
    }
    return (
        <textarea
            className='EditHeight'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.height}>
        </textarea>
    )
}

let mapStateToProps = (state) => {
    return {
        height: state.editProduct.modalFields.height
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateEditHeight: (text) => {
            dispatch(editHeightAction(text))
        }  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHeight);