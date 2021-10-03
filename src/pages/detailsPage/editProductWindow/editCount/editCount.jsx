import React from 'react'
import { connect } from 'react-redux'
import { editCountAction } from '../../../../store/reducers/editProduct.reducer'
import './editCount.scss'


const EditCount = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateEditCount(text)
    }
    return (
        <textarea
            className='EditCount'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.count}>
        </textarea>
    )
}

let mapStateToProps = (state) => {
    return {
        count: state.editProduct.modalFields.count
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateEditCount: (text) => {
            dispatch(editCountAction(text))
        }   
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCount);