import React from "react";
import './color.scss'


const Color = (props) => {
    return (
        <div className='color__DetailPageWrapper char__DetailPageWrapper'>
            <span>Color:</span> {props.color}
        </div>
    )
}

export default Color;