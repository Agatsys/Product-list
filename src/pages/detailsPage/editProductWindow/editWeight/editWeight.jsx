import React from 'react'
import { connect } from 'react-redux'
import './editWeight.scss'


const EditWeight = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateEditWeight(text)
    }
    return (
        <textarea
            className='EditWeight'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.newEditedWeight}>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditWeight);