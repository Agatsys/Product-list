import React, { useState } from 'react'
import AddNewProductButton from './addNewProductButton/addNewProductButton'
import AddNewProductWindow from './addNewProductWindow/addNewProductWindow'
import Product from './product/product'

const MainPage = (props) => {
    const productElement = props.productsData.map( (p) => <Product  
        name={p.name}
        discription={p.discription}
        photo={p.photo}
        id={p.id} /> )
    const [modalActive , setModalActive] = useState(false)
    return (
        <div className='MainPage'>
            <AddNewProductButton setModalActive={setModalActive}/>
            <AddNewProductWindow active={modalActive} setActive={setModalActive} />
            <div className='Products'>
                {productElement}
            </div> 
        </div>    
    ) 
}

export default MainPage;


