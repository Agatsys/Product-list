import React from 'react'
import { NavLink } from 'react-router-dom';
import './backButton.scss'


const BackButton = (props) => {
    return (
        <NavLink className='backButton' to='/' activeClassName='active'>
            <div className='back'>
                Back
            </div>
        </NavLink>
    )
}

export default BackButton;