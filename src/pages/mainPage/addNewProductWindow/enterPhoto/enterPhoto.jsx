import React from 'react'
import { connect } from 'react-redux';
import { updatePhotoAction } from '../../../../store/reducers/product.reducer';
import './enterPhoto.scss'


const EnterPhoto = (props) => {
    let newTextElement = React.createRef();

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updatePhoto(text)
    }

    return (
        <textarea
            className='EnterPhoto'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.newPhoto}>
        </textarea>
    )
}

let mapStateToProps = (state) => {
    return {
        newPhoto: state.newProduct.newPhoto
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updatePhoto: (text) => {
            dispatch(updatePhotoAction(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterPhoto);