import React from "react";
import './sortProducts.scss'


const SortProducts = () => {
    return (
        <button className='sortProducts__MainPage'>Sort products
            <ul>
                <li className='sortLi'>Name up</li>
                <li className='sortLi'> Name down</li>
                <li className='sortLi'>Count up</li>
                <li className='sortLi'>Count down</li>
            </ul>
        </button>
    )
}

export default SortProducts;