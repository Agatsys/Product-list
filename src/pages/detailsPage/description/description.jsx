import React from "react";
import './description.scss'


const Description = (props) => {
    return (
        <div className='description__DetailPageWrapper char__DetailPageWrapper'>
            {props.description}
        </div>
    )
}

export default Description;