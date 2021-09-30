import React from "react";
import './width.scss'


const Width = (props) => {
    return (
        <div className='width__DetailPageWrapper char__DetailPageWrapper'>
            <span>Width:</span> {props.width}mm
        </div>
    )
}

export default Width;