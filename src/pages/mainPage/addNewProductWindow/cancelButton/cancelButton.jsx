import React from 'react'
import './cancelButton.scss'


const CancelButton = (props) => {
    return (
        <button className='CancelButton' onClick={() => props.setActive(false)}>
            Cancel
        </button>
    )
}

export default CancelButton;