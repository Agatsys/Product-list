import React from 'react'
import { connect } from 'react-redux';
import { updateNameAction } from '../../../../store/reducers/productReducer';


const EnterName = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateName(text)
    }

    return (
        <textarea
            className='EnterName'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.newName}>
        </textarea>
    )
}

let mapStateToProps = () => {
    return {
        
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateName: (text) => {
            dispatch(updateNameAction(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterName);