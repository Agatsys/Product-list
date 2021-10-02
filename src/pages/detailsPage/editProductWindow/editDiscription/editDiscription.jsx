import React from 'react'
import { connect } from 'react-redux'
import './editDiscription.scss'


const EditDiscription = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateEditDiscription(text)
    }
    return (
        <textarea
            className='EditDiscription'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.newEditedDiscription}>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditDiscription);