import React from 'react'
import { connect } from 'react-redux'
import { editPhotoAction } from '../../../../store/reducers/editProduct.reducer'
import './editPhoto.scss'


const EditPhoto = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateEditPhoto(text)
    }
    return (
        <textarea
            className='EditPhoto'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.photo}>
        </textarea>
    )
}

let mapStateToProps = (state) => {
    return {
        photo: state.editProduct.modalFields.photo
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateEditPhoto: (text) => {
            dispatch(editPhotoAction(text))
        }  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPhoto);