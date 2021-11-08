import { Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deleteProductAction } from '../../../store/reducers/product.reducer'
import './Product.scss'


const Product = (props) => {
    const [modalActive, setModalActive] = useState(false)
    const history = useHistory()

    const del = () => {
        props.deleteProduct(props.id)
    }

    return <>
        <div onClick={() => history.push(`/details/${props.id}`)}>
            <div className="product">
                <div className="product__photo">
                    <img src={props.photo} alt='...' />
                </div>
                <div className="product__name-of-product">
                    {props.name}
                </div>
                <button
                    className="product__delete-button"
                    onClick={(e) => {
                        e.stopPropagation()
                        setModalActive(true)
                    }}>
                    <div className="delete-button__title-del">Delete</div>
                    <CloseOutlined className="delete-button__title-x" />
                </button>
                <div className="product__description">
                    {props.description}
                </div>
                <div className="product__count">
                    <span>Count:</span> {props.count}
                </div>
            </div>
        </div >
        <Modal
            title="Delete this? Realy?"
            visible={modalActive}
            onCancel={() => setModalActive(false)}
            onOk={del}
            okText={'Delete'}
            width={400}>
            <div className="product__name-of-deleted-product">{props.name}</div>
        </Modal>
    </>
}

const mapDispatchToProps = {
    deleteProduct: deleteProductAction,
}
export default connect(null, mapDispatchToProps)(Product)