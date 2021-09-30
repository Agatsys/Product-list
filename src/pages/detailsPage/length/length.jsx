import React from "react";
import './length.scss'


const Length = (props) => {
    return (
        <div className='length__DetailPageWrapper char__DetailPageWrapper'>
            <span>Length:</span> {props.length}mm
        </div>
    )
}

export default Length;