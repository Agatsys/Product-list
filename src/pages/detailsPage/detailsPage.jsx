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
    }

    return (
        <div className="details-page">
            <div className="details-page__header">
                <NavLink to='/'>
                    <Button
                        type="primary"
                        className="details-page__back-button">
                        Back
                    </Button>
                </NavLink>
                <Button
                    type="primary"
                    className="details-page__edit-button"
                    onClick={() => setModalActive(true)}>
                    Edit product
                </Button>
            </div>
            <div className="details-page__name">
                {props.productData.name}
            </div>
            <div className="details-page__photo-and-characteristics">
                <div className="details-page__photo-wrapper">
                    <img className="details-page__photo" src={props.productData.photo} alt="..." />
                </div>
                <div className="details-page__characteristics">
                    <div className="details-page__char">
                        {props.productData.description}
                    </div>
                    <div className="details-page__char-block">
                        <div className="details-page__char">
                            <span>Color:</span> {props.productData.color}
                        </div>
                        <div className="details-page__char">
                            <span>Length:</span> {props.productData.length}mm
                        </div>
                    </div>
                    <div className="details-page__char-block">
                        <div className="details-page__char">
                            <span>Weight:</span> {props.productData.weight}g
                        </div>
                        <div className="details-page__char">
                            <span>Width:</span> {props.productData.width}mm
                        </div>
                    </div>
                    <div className="details-page__char-block">
                        <div className="details-page__char">
                            <span>Count:</span> {props.productData.count}
                        </div>
                        <div className="details-page__char">
                            <span>Height:</span> {props.productData.height}mm
                        </div>
                    </div>
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