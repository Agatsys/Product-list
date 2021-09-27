import React from 'react'
import DeleteButton from './deleteButton';
import DetailsButton from './detailsButton';


const Product = (props) => {
    return (
        <div className='Product'>
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
            <DetailsButton id={props.id} />
            <DeleteButton />
        </div>
    )
}

export default Product;