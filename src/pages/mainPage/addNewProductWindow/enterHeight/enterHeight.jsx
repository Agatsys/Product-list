import React from 'react'
import { connect } from 'react-redux';
import { updateHeightAction } from '../../../../store/reducers/productReducer';


const EnterHeight = (props) => {
    let newTextElement = React.createRef();

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateHeight(text)
    }

    return (
        <textarea
            className='EnterHeight'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.newHeight}>
        </textarea>
    )
}

let mapStateToProps = () => {
    return {
        
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateHeight: (text) => {
            dispatch(updateHeightAction(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterHeight);