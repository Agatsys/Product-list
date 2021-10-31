import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deleteProductAction } from '../../../store/reducers/product.reducer'
import './product.scss'


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
                <div className="product__product-info">
                    <div className="product__name-and-delete-button">
                        <div className="product__name-of-product">
                            {props.name}
                        </div>
                        <Button
                            className="product__delete-button"
                            danger={true}
                            type="default"
                            onClick={(e) => {
                                e.stopPropagation()
                                setModalActive(true)
                            }}>
                            Delete
                        </Button>
                    </div>
                    <div className="product__description">
                        {props.description}
                    </div>
                    <div className="product__count">
                        <span>Count:</span> {props.count}
                    </div>
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