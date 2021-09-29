import React from 'react'
import { NavLink } from 'react-router-dom'
import './detailsButton.scss'


const DetailsButton = (props) => {
    return (
        <NavLink className='DetailsButton' to={`/details/${props.id}`}>
            <div>
                Details
            </div>
        </NavLink>
    )
}

export default DetailsButton;