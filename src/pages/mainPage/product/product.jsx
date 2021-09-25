import React from 'react'
//import DeleteButton from './DeleteButton';
//import DetailsButton from './DetailsButton';



const Product = (props) => {
    return (
        <div className='NewProduct item'>
            <div className='NameOfProduct'>
                {props.name}
            </div>
            <div className='Discription'>
                {props.discription}
            </div>
            <div className='ProductPhotoBlock'>
                <img className='ProductPhoto'
                    src={props.photo}
                    alt=';(' 
                    height='190px'
                    width='190px'/>
            </div>
            {/* <DetailsButton 
                id={props.id} */}
            {/* /> */}
            {/* <DeleteButton /> */}
        </div>
    )
}

export default Product;