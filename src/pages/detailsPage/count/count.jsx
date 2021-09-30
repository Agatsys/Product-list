import React from "react";
import './count.scss'


const Count = (props) => {
    return (
        <div className='count__DetailPageWrapper char__DetailPageWrapper'>
            <span>Count:</span> {props.count}
        </div>
    )
}

export default Count;