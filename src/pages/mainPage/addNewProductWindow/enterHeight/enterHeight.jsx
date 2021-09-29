import React from 'react'
import { connect } from 'react-redux';
import { updateHeightAction } from '../../../../store/reducers/product.reducer';
import './enterHeight.scss'


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

let mapStateToProps = (state) => {
    return {
        newHeight: state.newProduct.newHeight
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