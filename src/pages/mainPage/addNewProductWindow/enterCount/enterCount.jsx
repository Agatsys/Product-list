import React from 'react'
import { connect } from 'react-redux';
import { updateCountAction } from '../../../../store/reducers/product.reducer';
import './enterCount.scss'


const EnterCount = (props) => {
    let newTextElement = React.createRef();

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateCount(text)
    }

    return (
        <textarea
            className='EnterCount'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.newCount}>
        </textarea>
    )
}

let mapStateToProps = (state) => {
    return {
        newCount: state.newProduct.newCount
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateCount: (text) => {
            dispatch(updateCountAction(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterCount);