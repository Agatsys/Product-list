import React from 'react'
import { NavLink } from 'react-router-dom';


const BackButton = (props) => {
    return (
        <button className='BackButton'>
            <NavLink className='nav' to='/' activeClassName='active'>Back</NavLink>
        </button>
    )
}

export default BackButton;