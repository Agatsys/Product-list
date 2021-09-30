import React from "react";
import './height.scss'


const Height = (props) => {
    return (
        <div className='height__DetailPageWrapper char__DetailPageWrapper'>
            <span>Height:</span> {props.height}mm
        </div>
    )
}

export default Height;