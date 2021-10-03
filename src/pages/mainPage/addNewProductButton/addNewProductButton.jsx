import React from 'react'
import './addNewProductButton.scss'
import { Button } from 'antd'

const AddNewProductButton = (props) => {
    
    return (
        <Button size="large" type="primary" className='AddNewProductButton' onClick={() => props.setModalActive(true)}>
            New product
        </Button>
    )
}

export default AddNewProductButton;