import React, { useState } from 'react'
import { connect } from 'react-redux'
import AddNewProductButton from './addNewProductButton/addNewProductButton'
import AddNewProductWindow from './addNewProductWindow/addNewProductWindow'
import Product from './product/product'
import './mainPage.scss'
import SortProducts from './sortProducts/sortProducts'


const MainPage = (props) => {
    const [modalActive, setModalActive] = useState(false)

    const productElement = props.productsData.map(p => (
        <Product
            name={p.name}
            discription={p.discription}
            photo={p.photo}
            id={p.id}
            key={p.id} 
        />
    ))
    
    return (
        <div className='MainPage'>
            <AddNewProductButton setModalActive={setModalActive} />
            <SortProducts />
            <AddNewProductWindow active={modalActive} setActive={setModalActive} />
            <div className='Products-wrapper'>
                {productElement}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        productsData: state.newProduct.productsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);