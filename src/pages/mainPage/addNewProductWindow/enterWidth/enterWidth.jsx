import React from 'react'
import { connect } from 'react-redux';
import { updateWidthAction } from '../../../../store/reducers/productReducer';


const EnterWidth = (props) => {
    let newTextElement = React.createRef();

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateWidth(text)
    }

    return (
        <textarea
            className='EnterWidth'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.newWidth}>
        </textarea>
    )
}

let mapStateToProps = () => {
    return {

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateWidth: (text) => {
            dispatch(updateWidthAction(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterWidth);