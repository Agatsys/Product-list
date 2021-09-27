import React from 'react'
import { connect } from 'react-redux';
import { updateLengthAction } from '../../../../store/reducers/productReducer';


const EnterLength = (props) => {
    let newTextElement = React.createRef();

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateLength(text)
    }

    return (
        <textarea
            className='EnterLength'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.newLength}>
        </textarea>
    )
}

let mapStateToProps = () => {
    return {
        
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateLength: (text) => {
            dispatch(updateLengthAction(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterLength);