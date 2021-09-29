import React from "react";
import './photo.scss'


const Photo = (props) => {
    return (
        <div className='photo__DetailPageWrapper'>
            <img className='ProductPhoto__DetailPageWrapper' src={props.photo} alt="..." />
        </div>
    )
}

export default Photo;