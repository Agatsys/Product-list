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

    return (
        <>
            <div onClick={() => history.push(`/details/${props.id}`)}>
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
                    <div className='Description'>
                        {props.description}
                    </div>
                    <div className='Count'>
                        <span>Count:</span> {props.count}
                    </div>
                    <Button
                        danger={true}
                        type="default"
                        className='DeleteButton'
                        onClick={(e) => {
                            e.stopPropagation()
                            setModalActive(true)
                        }}>
                        Delete
                    </Button>
                    
                </div>
            </div >
            <Modal
                title="Delete this? Realy?"
                visible={modalActive}
                onCancel={() => setModalActive(false)}
                onOk={del}
                okText={'Delete'}
                width={400}>
                <div className='name__deleteProductWindow'>{props.name}</div>
            </Modal>
        </>
    )
}

const mapDispatchToProps = {
    deleteProduct: deleteProductAction,
}
export default connect(null, mapDispatchToProps)(Product)