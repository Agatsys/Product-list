import React from 'react'
import { connect } from 'react-redux'
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
            value={props.newEditedCount}>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditCount);