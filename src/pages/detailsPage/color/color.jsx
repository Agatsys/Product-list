import React from "react";
import './color.scss'


const Color = (props) => {
    return (
        <div className='color__DetailPageWrapper'>
            {props.color}
        </div>
    )
}

export default Color;