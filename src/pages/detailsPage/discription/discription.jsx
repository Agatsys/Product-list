import React from "react";
import './discription.scss'


const Discription = (props) => {
    return (
        <div className='discription__DetailPageWrapper char__DetailPageWrapper'>
            {props.discription}
        </div>
    )
}

export default Discription;