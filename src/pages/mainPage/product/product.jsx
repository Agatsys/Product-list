import React, { useState } from 'react'
import DeleteButton from './deleteButton/deleteButton'
import DeleteProductWindow from './deleteProductWindow/deleteProductWindow'
import DetailsButton from './detailsButton/detailsButton'
import './product.scss'


const Product = (props) => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className='Product'>
            <div className='ProductPhotoBlock'>
                <img className='ProductPhoto'
                    src={props.photo}
                    alt='...' 
                    height='190px'
                    width='190px'/>
            </div>
            <div className='NameOfProduct'>
                {props.name}
            </div>
            <div className='Discription'>
                {props.discription}
                <br/>
                {props.count}
            </div>
            <DetailsButton id={props.id} />
            <DeleteButton id={props.id} setActive={setModalActive}/>
            <DeleteProductWindow id={props.id} name={props.name} active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default Product;