import React from 'react'
import './deleteButton.scss'


const DeleteButton = (props) => {
    return (
        <button className='DeleteButton' onClick={() => props.setActive(true)}>
            Delete
        </button>
        
    )
}


export default DeleteButton;