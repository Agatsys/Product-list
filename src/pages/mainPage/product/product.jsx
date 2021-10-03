import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteProductAction } from '../../../store/reducers/product.reducer'
import './product.scss'


const Product = (props) => {
    const [modalActive, setModalActive] = useState(false)

    const del = () => {
        props.deleteProduct(props.id)
    }

    return (
        <div className='Product'>
            <div className='ProductPhotoBlock'>
                <img className='ProductPhoto'
                    src={props.photo}
                    alt='...'
                    height='190px'
                    width='190px' />
            </div>
            <div className='NameOfProduct'>
                {props.name}
            </div>
            <div className='Discription'>
                {props.discription}
                <br />
                {props.count}
            </div>
            <NavLink to={`/details/${props.id}`}>
                <Button type="default"
                    className='DetailsButton'>
                    Details
                </Button>
            </NavLink>
            <Button
                type="default"
                className='DeleteButton'
                onClick={() => setModalActive(true)}>
                Delete
            </Button>
            <Modal
                title="Delete this? Realy?"
                visible={modalActive}
                onCancel={() => setModalActive(false)}
                onOk={del}
                okText={'Delete'}
                width={400}>
                <div className='name__deleteProductWindow'>{props.name}</div>
            </Modal>
        </div>
    )
}

const mapDispatchToProps = {
    deleteProduct: deleteProductAction,
}

export default connect(null, mapDispatchToProps)(Product)