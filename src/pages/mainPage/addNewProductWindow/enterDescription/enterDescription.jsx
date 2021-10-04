import React from 'react'
import { connect } from 'react-redux';
import { updateDescriptionAction } from '../../../../store/reducers/product.reducer';
import './enterDescription.scss'


const EnterDescription = (props) => {
    let newTextElement = React.createRef();

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateDescription(text)
    }

    return (
        <textarea
            className='EnterDescription'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.newDescription}>
        </textarea>
    )
}

let mapStateToProps = (state) => {
    return {
        newDescription: state.newProduct.newDescription
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateDescription: (text) => {
            dispatch(updateDescriptionAction(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterDescription);