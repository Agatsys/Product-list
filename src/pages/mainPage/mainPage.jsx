import React, { useState } from 'react'
import { SwapOutlined, PlusCircleOutlined } from '@ant-design/icons';
import './MainPage.scss'
import { connect } from 'react-redux'
import { message } from 'antd'
import AddNewProductModal from './AddNewProductModal/AddNewProductModal'
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
        <div className="main_page">
            <div className="main_page__header">
                <button className="main_page__add_new_product_btn"
                    onClick={() => setAddNewProductModalActive(true)}>
                    <label>New product</label>
                    <PlusCircleOutlined className="main_page__add_new_product_btn__icon" />
                </button>
                <div className="main_page__sort">
                    <label>Sort</label>
                    <SwapOutlined className="main_page__sort__icon" />
                    <ul>
                        <li onClick={() => setSortBy("A to Z")}>A to Z</li>
                        <li onClick={() => setSortBy("Z to A")}>Z to A</li>
                        <li onClick={() => setSortBy("Less to More")}>Less to More</li>
                        <li onClick={() => setSortBy("More to Less")}>More to Less</li>
                    </ul>
                </div>
            </div>
            <div className="main_page__products_wrapper">
                {props.productsData.sort(sortRules).map(p => (
                    <Product
                        name={p.name}
                        count={p.count}
                        description={p.description}
                        photo={p.photo}
                        id={p.id}
                        key={p.id}>
                    </Product>
                ))}
            </div>
            <AddNewProductModal
                modalActive={addNewProductModal}
                setModalActive={setAddNewProductModalActive}
                AddNewProduct={AddNewProduct}>
            </AddNewProductModal>
        </div>
    )
}

const mapStateToProps = (state) => ({
    productsData: state.newProduct.productsData,
    isValid: state.newProduct.isValid,
    didTryToProcess: state.newProduct.didTryToProcess,
    errors: state.newProduct.errors
})
const mapDispatchToProps = {
    AddProduct: addProductAction
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);