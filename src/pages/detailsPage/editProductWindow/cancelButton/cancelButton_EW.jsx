import React from 'react'
import { connect } from 'react-redux'
import './cancelButton_EW.scss'


const CancelButton = (props) => {


    return (
        <button className='CancelButton__EditProductWindow'>
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

export default connect(mapStateToProps, mapDispatchToProps)(CancelButton);