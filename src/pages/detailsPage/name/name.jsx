import React from "react";
import './name.scss'


const Name = (props) => {
    return (
        <div className='name__DetailPageWrapper'>
            {props.name}
        </div>
    )
}

export default Name;