import React, { useState } from 'react'
import './DetailsPage.scss'
import { connect } from 'react-redux'
import Comments from './comments/comments'
import EditProductWindow from './EditProductWindow/EditProductWindow'
import { Modal } from 'antd'
import { editProductAction } from '../../store/reducers/editProduct.reducer'
import { useParams, useHistory } from 'react-router-dom'
import LargePhotoModal from './LargePhoto/LargePhotoModal'
import { addCommentAction, updateCommentAction } from '../../store/reducers/addComment.reducer'


const DetailsPage = (props) => {
    const [editProductModal, setEditProductModalActive] = useState(false)
    const [largePhotoModal, setlargePhotoModalActive] = useState(false)
    const params = useParams()
    const history = useHistory()

    let addEditedProduct = () => {
        props.editProduct(props.uid)
        if (props.isValidEdit === true) {
            setEditProductModalActive(false)
        }
    }
    let AddNewComment = () => {
        props.AddComment(params.id)
    }

    return (
        <div className="details-page">
            <div className="details-page__header">
                <button className="details-page__back-button"
                    onClick={() => history.push("/")}>
                    Back
                </button>
                <button className="details-page__edit-button"
                    onClick={() => setEditProductModalActive(true)}>
                    Edit product
                </button>
            </div>
            <div className="details-page__name">
                {props.productData.name}
            </div>
            <div className="details-page__photo-and-characteristics">
                <div onClick={() => setlargePhotoModalActive(true)} className="details-page__photo">
                    <img src={props.productData.photo} alt="..." />         {/* {props.productData.photo} */}
                </div>
                <div className="details-page__characteristics">
                    <div className="details-page__description-char ">
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
            <div className='addComment__DetailPageWrapper'>
                <textarea
                    className='enterComment__DetailPageWrapper'
                    placeholder="Write your comment..."
                    onChange={(event) => props.updateComment(event.currentTarget.value)}
                    value={props.newText}
                />
                <button
                    className='addCommentButton__DetailPageWrapper'
                    onClick={AddNewComment}>
                    Add comment
                </button>
            </div>
            <Modal
                title="Edit product"
                visible={editProductModal}
                onCancel={() => setEditProductModalActive(false)}
                onOk={addEditedProduct}
                okText={'Save'}
                width={800}
                centered={true}>
                <EditProductWindow
                    uid={props.uid}
                    setActive={setEditProductModalActive} />
            </Modal>
            <LargePhotoModal
                modalActive={largePhotoModal}
                setModalActive={setlargePhotoModalActive}
                photo={props.productData.photo} />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const allProducts = state.newProduct.productsData
    const data = (allProducts.find(item => item.id === ownProps.match.params.id) || {})
    return {
        productData: data,
        uid: ownProps.match.params.id,
        isValidEdit: state.editProduct.isValidEdit,
        newText: state.comments.newText
    }
}
const mapDispatchToProps = {
    editProduct: editProductAction,
    updateComment: updateCommentAction,
    AddComment: addCommentAction
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);