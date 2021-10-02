import React from 'react'
import { connect } from 'react-redux'
import './editLength.scss'


const EditLength = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateEditLength(text)
    }
    return (
        <textarea
            className='EditLength'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.newEditedLength}>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditLength);