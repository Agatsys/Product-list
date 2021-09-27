import React from 'react'
import './addNewProductButton.scss'


const AddNewProductButton = (props) => {
    
    return (
        <button className='AddNewProductButton' onClick={() => props.setModalActive(true)}>
            New product
        </button>
    )

}

export default AddNewProductButton;