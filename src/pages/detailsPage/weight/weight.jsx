import React from "react";
import './weight.scss'


const Weight = (props) => {
    return (
        <div className='weight__DetailPageWrapper char__DetailPageWrapper'>
            <span>Weight:</span> {props.weight}g
        </div>
    )
}

export default Weight;