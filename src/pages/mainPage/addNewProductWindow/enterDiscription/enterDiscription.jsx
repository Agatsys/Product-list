import React from 'react'
import { connect } from 'react-redux';
import { updateDiscriptionAction } from '../../../../store/reducers/productReducer';


const EnterDiscription = (props) => {
    let newTextElement = React.createRef();

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateDiscription(text)
    }

    return (
        <textarea
            className='EnterDiscription'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.newDiscription}>
        </textarea>
    )
}

let mapStateToProps = () => {
    return {
        
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateDiscription: (text) => {
            dispatch(updateDiscriptionAction(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterDiscription);