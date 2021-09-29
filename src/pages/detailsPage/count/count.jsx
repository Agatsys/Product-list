import React from "react";
import './count.scss'


const Count = (props) => {
    return (
        <div className='count__DetailPageWrapper'>
            {props.count}
        </div>
    )
}

export default Count;