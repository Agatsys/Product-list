import React, { useState } from 'react'
import './detailsPage.scss'
import { connect } from 'react-redux'
import AddComment from './addComment/addComment'
import Comments from './comments/comments'
import EditProductWindow from './editProductWindow/editProductWindow'
import { Button, Modal } from 'antd'
import { editProductAction } from '../../store/reducers/editProduct.reducer'
import { NavLink } from 'react-router-dom'


const DetailsPage = (props) => {
    const [ModalActive, setModalActive] = useState(false)

    let addEditedProduct = () => {
        props.editProduct(props.uid)
        setModalActive(false)
    }

    return (
        <div className='DetailPageWrapper'>
            <NavLink to='/'>
                <Button
                    type="primary"
                    className='backButton'>
                    Back
                </Button>
            </NavLink>
            <Button
                type="primary"
                className='EditButton__DetailPageWrapper'
                onClick={() => setModalActive(true)}>
                Edit product
            </Button>
            <div className='name__DetailPageWrapper'>
                {props.productData.name}
            </div>
            <div className='photo__DetailPageWrapper'>
                <img className='ProductPhoto__DetailPageWrapper' src={props.productData.photo} alt="..." />
            </div>
            <div className='characteristics__DetailPageWrapper'>
                <div className='description__DetailPageWrapper char__DetailPageWrapper'>
                    {props.productData.description}
                </div>
                <div className='weight__DetailPageWrapper char__DetailPageWrapper'>
                    <span>Weight:</span> {props.productData.weight}g
                </div>
                <div className='color__DetailPageWrapper char__DetailPageWrapper'>
                    <span>Color:</span> {props.productData.color}
                </div>
                <div className='width__DetailPageWrapper char__DetailPageWrapper'>
                    <span>Width:</span> {props.productData.width}mm
                </div>
                <div className='length__DetailPageWrapper char__DetailPageWrapper'>
                    <span>Length:</span> {props.productData.length}mm
                </div>
                <div className='count__DetailPageWrapper char__DetailPageWrapper'>
                    <span>Count:</span> {props.productData.count}
                </div>
                <div className='height__DetailPageWrapper char__DetailPageWrapper'>
                    <span>Height:</span> {props.productData.height}mm
                </div>
            </div>
            <Comments name={props.productData.name} />
            <AddComment />
            <Modal
                title="Edit product"
                visible={ModalActive}
                onCancel={() => setModalActive(false)}
                onOk={addEditedProduct}
                okText={'Save'}
                width={800}
                centered={true}>
                <EditProductWindow
                    uid={props.uid}
                    setActive={setModalActive} />
            </Modal>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const allProducts = state.newProduct.productsData
    const data = (allProducts.find(item => item.id === ownProps.match.params.id) || {})
    return {
        productData: data,
        uid: ownProps.match.params.id
    }
}
const mapDispatchToProps = {
    editProduct: editProductAction
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);