import React, { useState } from 'react'
import './detailsPage.scss'
import { connect } from 'react-redux'
import BackButton from './backButton/backButton'
import Width from './width/width'
import Weight from './weight/weight'
import Photo from './photo/photo'
import Color from './color/color'
import Name from './name/name'
import Discription from './discription/discription'
import Length from './length/length'
import Count from './count/count'
import Height from './height/height'
import AddComment from './addComment/addComment'
import EditProductButton from './editProductButton/editProductButton'
import Comments from './comments/comments'
import EditProductWindow from './editProductWindow/editProductWindow'
import { Modal } from 'antd'


const DetailsPage = (props) => {
    const [ModalActive, setModalActive] = useState(false)

    return (
        <div className='DetailPageWrapper'>
            <BackButton />
            <EditProductButton setModalActive={setModalActive} />
            {/* {ModalActive && (
                <EditProductWindow
                    uid={props.uid}
                    setActive={setModalActive}
                />
            )} */}
            <Modal 
                title="Edit product" 
                visible={ModalActive} 
                onCancel={() => setModalActive(false)}
                okText={'Save'}
                //footer={null}
                width={900}>
                <EditProductWindow
                    uid={props.uid}
                    setActive={setModalActive}
                />
            </Modal>
            <Name name={props.productData.name} />
            <Photo photo={props.productData.photo} />
            <div className='characteristics__DetailPageWrapper'>
                <Discription discription={props.productData.discription} />
                <Weight weight={props.productData.weight} />
                <Color color={props.productData.color} />
                <Width width={props.productData.width} />
                <Length length={props.productData.length} />
                <Count count={props.productData.count} />
                <Height height={props.productData.height} />
            </div>
            <Comments name={props.productData.name} />
            <AddComment />
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
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);