import React, { useState } from 'react'
import './DetailsPage.scss'
import { connect } from 'react-redux'
import EditProductWindow from './EditProductWindow/EditProductWindow'
import { Modal } from 'antd'
import { editProductAction } from '../../store/reducers/editProduct.reducer'
import { useParams, useHistory } from 'react-router-dom'
import LargePhotoModal from './LargePhoto/LargePhotoModal'
import { addCommentAction, deleteCommentAction, updateCommentAction } from '../../store/reducers/addComment.reducer'
import CustomComment from '../components/CustomComment'


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
    const commentElement = props.commentsNew.map((item, index) =>
        <CustomComment
            commentBlockClassName="comment__Comments"
            textBlockClassName="commentText__Comments"
            text={item.text}
            deleteButtonClassName="DelButton__Comment"
            deleteComment={props.deleteComment}
            uid={props.uid}
            index={index}
            key={`comment-${index}`}
        />
    )

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
            <div className="details-page__name">{props.productData.name}</div>
            <div className="details-page__photo-and-characteristics">
                <div onClick={() => setlargePhotoModalActive(true)} className="details-page__photo">
                    <img src={props.productData.photo} alt="..." />
                </div>
                <div className="details-page__char-description">
                    {props.productData.description}
                </div>
                <div className="details-page__char-color">
                    <span>Color:</span> {props.productData.color}
                </div>
                <div className="details-page__char-length">
                    <span>Length:</span> {props.productData.length}mm
                </div>
                <div className="details-page__char-weight">
                    <span>Weight:</span> {props.productData.weight}g
                </div>
                <div className="details-page__char-width">
                    <span>Width:</span> {props.productData.width}mm
                </div>
                <div className="details-page__char-count">
                    <span>Count:</span> {props.productData.count}
                </div>
                <div className="details-page__char-height">
                    <span>Height:</span> {props.productData.height}mm
                </div>
            </div>
            <div className='commentsWrapper__DetailPageWrapper'>
                Comments to {props.productData.name}:
                {commentElement}
            </div>
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
    const uidOfProduct = ownProps.match.params.id
    const allProducts = state.newProduct.productsData
    const data = (allProducts.find(item => item.id === ownProps.match.params.id) || {})
    return {
        commentsNew: state.comments.commentsNew[uidOfProduct] || [],
        productData: data,
        uid: ownProps.match.params.id,
        isValidEdit: state.editProduct.isValidEdit,
        newText: state.comments.newText
    }
}
const mapDispatchToProps = {
    editProduct: editProductAction,
    updateComment: updateCommentAction,
    AddComment: addCommentAction,
    deleteComment: deleteCommentAction
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);