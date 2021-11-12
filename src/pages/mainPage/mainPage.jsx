import React, { useState } from 'react'
import { SwapOutlined, PlusCircleOutlined } from '@ant-design/icons';
import './MainPage.scss'
import { connect } from 'react-redux'
import { message } from 'antd'
import AddNewProductWindow from './AddNewProductWindow/AddNewProductWindow'
import Product from './Product/Product'
import { addProductAction } from '../../store/reducers/product.reducer'


const MainPage = (props) => {
    const [addNewProductModal, setAddNewProductModalActive] = useState(false)
    const [sortBy, setSortBy] = useState('A to Z')

    const sortRules = (a, b) => {
        if (sortBy === 'A to Z') {
            if (a.name > b.name) return 1
            if (a.name < b.name) return -1
            return 0
        } else if (sortBy === 'Z to A') {
            if (a.name < b.name) return 1
            if (a.name > b.name) return -1
            return 0
        } else if (sortBy === 'Less to More') {
            if (parseInt(a.count) > parseInt(b.count)) return 1
            if (parseInt(a.count) < parseInt(b.count)) return -1
            return 0
        } else if (sortBy === 'More to Less') {
            if (parseInt(a.count) < parseInt(b.count)) return 1
            if (parseInt(a.count) > parseInt(b.count)) return -1
            return 0
        }
    }
    const warningsModal = () => {
        const warning = (errorText) => {
            message.warning(errorText, [7]);
        };
        if (props.isValid === false && props.didTryToProcess === true) {
            props.errors.forEach(errorText => warning(errorText))
        }
    }
    const AddNewProduct = () => {
        props.AddProduct()
        warningsModal()
        if (props.isValid === true) {
            setAddNewProductModalActive(false)
        }
    }

    return (
        <div className="main-page">
            <div className="main-page__header">
                <button className="main-page__add-new-product-button"
                    onClick={() => setAddNewProductModalActive(true)}>
                    <div className="add-new-product-button__title">New product</div>
                    <PlusCircleOutlined className="add-new-product-button__icon" />
                </button>
                <div className="main-page__sort">
                    <div className="sort__title">Sort</div>
                    <SwapOutlined className="sort__icon" />
                    <ul className="sort__list">
                        <li className="list__li" onClick={() => setSortBy("A to Z")}>A to Z</li>
                        <li className="list__li" onClick={() => setSortBy("Z to A")}>Z to A</li>
                        <li className="list__li" onClick={() => setSortBy("Less to More")}>Less to More</li>
                        <li className="list__li" onClick={() => setSortBy("More to Less")}>More to Less</li>
                    </ul>
                </div>
            </div>
            <div className="main-page__products-wrapper">
                {props.productsData.sort(sortRules).map(p => (
                    <Product
                        name={p.name}
                        count={p.count}
                        description={p.description}
                        photo={p.photo}
                        id={p.id}
                        key={p.id}
                    />
                ))}
            </div>
            <AddNewProductWindow
                modalActive={addNewProductModal}
                setModalActive={setAddNewProductModalActive}
                AddNewProduct={AddNewProduct} />
        </div>
    )
}

let mapStateToProps = (state) => ({
    productsData: state.newProduct.productsData,
    isValid: state.newProduct.isValid,
    didTryToProcess: state.newProduct.didTryToProcess,
    errors: state.newProduct.errors
})
let mapDispatchToProps = {
    AddProduct: addProductAction
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);