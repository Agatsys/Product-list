import React from 'react'
import { connect } from 'react-redux'
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
            value={props.newEditedHeight}>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditHeight);