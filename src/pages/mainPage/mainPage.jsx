import React, { useState } from 'react'
import { connect } from 'react-redux'
import { message, Modal, Select } from 'antd'
import AddNewProductWindow from './addNewProductWindow/addNewProductWindow'
import Product from './product/product'
import './mainPage.scss'
import { addProductAction } from '../../store/reducers/product.reducer'


const { Option } = Select

const MainPage = (props) => {
    const [modalActive, setModalActive] = useState(false)
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
            props.errors.forEach(errorText => warning(errorText) )
        }
    }          
    const AddNewProduct = () => {
        props.AddProduct()
        warningsModal()
        if (props.isValid === true) {
            setModalActive(false)
        }
    }
    
    return (
        <div className="main-page">
            <div className="main-page__header">
                <button 
                    className="main-page__add-new-product-button" 
                    onClick={() => setModalActive(true)}>
                    New product
                </button>
                <Select size="large" defaultValue={sortBy} value={sortBy} style={{ width: 220 }} onChange={(value) => setSortBy(value)}>
                    <Option value="A to Z">A to Z</Option>
                    <Option value="Z to A">Z to A</Option>
                    <Option value="Less to More">Less to More</Option>
                    <Option value="More to Less">More to Less</Option>
                </Select>
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
            <Modal 
                title="Add new product" 
                visible={modalActive} 
                onCancel={() => setModalActive(false)}
                onOk={AddNewProduct}
                okText={'Add product'}
                width={800}
                centered={true}>
                <AddNewProductWindow active={modalActive} setActive={setModalActive} />
            </Modal>
        </div>
    )
}

let mapStateToProps = (state) => ({
    productsData: state.newProduct.productsData,
    isValid: state.newProduct.isValid,
    didTryToProcess: state.newProduct.didTryToProcess,
    errors: state.newProduct.errors
})
let mapDispatchToProps = (dispatch) => {
    return {
        AddProduct: () => {
            dispatch(addProductAction());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);