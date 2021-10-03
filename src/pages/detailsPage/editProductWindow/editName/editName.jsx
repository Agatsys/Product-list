import React from 'react'
import { connect } from 'react-redux'
import './editName.scss'


const EditName = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateEditName(text)
    }
    return (
        <textarea
            className='EditName'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.name}>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditName);



//newEditedName