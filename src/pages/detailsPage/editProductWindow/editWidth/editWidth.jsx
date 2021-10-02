import React from 'react'
import { connect } from 'react-redux'
import './editWidth.scss'


const EditWidth = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateEditWidth(text)
    }
    return (
        <textarea
            className='EditWidth'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.newEditedWidth}>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditWidth);