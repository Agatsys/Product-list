import React from 'react'
import { connect } from 'react-redux';
import { updateColorAction } from '../../../../store/reducers/productReducer';


const EnterColor = (props) => {
    let newTextElement = React.createRef()

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateColor(text)
    }
    return (
        <textarea
            className='EnterColor'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.newColor}>
        </textarea>
    )
}

let mapStateToProps = () => {
    return {

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateColor: (text) => {
            let action = updateColorAction(text)
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterColor);