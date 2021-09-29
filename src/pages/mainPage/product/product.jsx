import React from 'react'
import DeleteButton from './deleteButton/deleteButton'
import DetailsButton from './detailsButton/detailsButton'
import EditButton from './EditButton/EditButton'
import './product.scss'


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
                    alt='...' 
                    height='190px'
                    width='190px'/>
            </div>
            <EditButton/>
            <DetailsButton id={props.id} />
            <DeleteButton id={props.id} />
        </div>
    )
}

export default Product;