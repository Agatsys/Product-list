import React from 'react'
import { connect } from 'react-redux'
import './editColor.scss'


const EditColor = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateEditColor(text)
    }
    return (
        <textarea
            className='EditColor'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.color}>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditColor);