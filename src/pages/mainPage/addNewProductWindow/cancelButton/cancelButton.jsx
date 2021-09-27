import React from 'react'


const CancelButton = (props) => {
    return (
        <button className='CancelButton' onClick={() => props.setActive(false)}>
            Cancel
        </button>
    )
}

export default CancelButton;