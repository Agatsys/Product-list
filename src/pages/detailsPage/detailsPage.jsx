import React, { useState } from 'react'
import './DetailsPage.scss'
import { connect } from 'react-redux'
import EditProductWindow from './EditProductWindow/EditProductWindow'
import { Modal } from 'antd'
import { editProductAction } from '../../store/reducers/editProduct.reducer'
import { useParams, useHistory } from 'react-router-dom'
import LargePhotoModal from './LargePhoto/LargePhotoModal'
import { addCommentAction, deleteCommentAction, updateCommentAction } from '../../store/reducers/comments.reducer'
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
            commentBlockClassName="details-page__comment"
            textBlockClassName="comment__text-of-comment"
            text={item.text}
            deleteButtonClassName="comment__del-button"
            deleteComment={props.deleteComment}
            uid={props.uid}
            index={index}
            key={`comment-${index}`}>
        </CustomComment>
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
                <div className="details-page__char-description char">
                    {props.productData.description}
                </div>
                <div className="details-page__char-color char">
                    <span>Color:</span> {props.productData.color}
                </div>
                <div className="details-page__char-length char">
                    <span>Length:</span> {props.productData.length}mm
                </div>
                <div className="details-page__char-weight char">
                    <span>Weight:</span> {props.productData.weight}g
                </div>
                <div className="details-page__char-width char">
                    <span>Width:</span> {props.productData.width}mm
                </div>
                <div className="details-page__char-count char">
                    <span>Count:</span> {props.productData.count}
                </div>
                <div className="details-page__char-height char">
                    <span>Height:</span> {props.productData.height}mm
                </div>
            </div>
            <div className="details-page__comments-wrapper">
                <div className="comments-wrapper__comments-block">
                    Comments to {props.productData.name}:
                    {commentElement}
                </div>
                <div className="comments-wrapper__add-comment-block">
                    <textarea
                        className="add-comment-block__textarea"
                        placeholder="Write your comment..."
                        onChange={(event) => props.updateComment(event.currentTarget.value)}
                        value={props.newText}>
                    </textarea>
                    <button
                        className="add-comment-block__add-comment-button"
                        onClick={AddNewComment}>
                        Add comment
                    </button>
                </div>
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
                photo={props.productData.photo}>
            </LargePhotoModal>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const uidOfProduct = ownProps.match.params.id
    const allProducts = state.newProduct.productsData
    const data = (allProducts.find(item => item.id === uidOfProduct) || {})
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