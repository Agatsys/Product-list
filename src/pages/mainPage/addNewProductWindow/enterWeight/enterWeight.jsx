import React from 'react'
import { connect } from 'react-redux';
import { updateWeightAction } from '../../../../store/reducers/productReducer';
import './enterWeight.scss'


const EnterWeight = (props) => {
    let newTextElement = React.createRef();

    let onTextChange = () => {
        let text = newTextElement.current.value;
        props.updateWeight(text)
    }

    return (
        <textarea
            className='EnterWeight'
            onChange={onTextChange}
            ref={newTextElement}
            value={props.newWeight}>
        </textarea>
    )
}

let mapStateToProps = () => {
    return {

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateWeight: (text) => {
            dispatch(updateWeightAction(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterWeight);