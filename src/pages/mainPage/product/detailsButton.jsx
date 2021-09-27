import React from 'react'
import { NavLink } from 'react-router-dom';


const DetailsButton = (props) => {
    //console.log(props.id)
    return (
        <NavLink className='DetailsButton' to={`/details/${props.id}`}>Details - {props.id}</NavLink>
    )
}

export default DetailsButton;