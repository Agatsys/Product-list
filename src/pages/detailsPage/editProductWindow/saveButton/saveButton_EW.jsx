import React from 'react'
import { connect } from 'react-redux'
import './saveButton_EW.scss'


const SaveButton = (props) => {
    return (
        <button className='SaveButton__EditProductWindow'>
            Save
        </button>
    )
}

let mapStateToProps = () => {
    return {

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);