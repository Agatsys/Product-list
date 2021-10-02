import React from 'react'
import { connect } from 'react-redux'
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
            value={props.newEditedPhoto}>
        </textarea>
    )
}

let mapStateToProps = (state) => {
    return {
        
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPhoto);