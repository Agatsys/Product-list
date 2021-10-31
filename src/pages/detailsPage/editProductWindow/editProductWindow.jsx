import React, { useEffect } from "react";
import { connect } from "react-redux";
import { editColorAction, editCountAction, editDescriptionAction, editHeightAction, editLengthAction, editNameAction, editPhotoAction, editWeightAction, editWidthAction, loadProductData } from "../../../store/reducers/editProduct.reducer";
import CustomInput from "../../components/CustomInput";
import './editProductWindow.scss'


const EditProductWindow = (props) => {
    useEffect(() => {
        props.loadProductData(props.uid)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div>
            <div className='edit-product-window'>
                <CustomInput 
                    label="Name"
                    inputBlockClassName="edit-product-window__input"
                    inputClassName="edit-product-window__small-input"
                    labelClassName="edit-product-window__label"
                    onChange={props.editName}
                    value={props.name} />
                <CustomInput 
                    label="Description"
                    inputBlockClassName="edit-product-window__input"
                    inputClassName="edit-product-window___large-input"
                    labelClassName="edit-product-window__label"
                    textarea={true} 
                    onChange={props.editDescription}
                    value={props.description} />
                <CustomInput
                    label="Color"
                    inputBlockClassName="edit-product-window__input"
                    inputClassName="edit-product-window__small-input"
                    labelClassName="edit-product-window__label"
                    onChange={props.editColor}
                    value={props.color} />
                <CustomInput
                    label="Weight (g)"
                    inputBlockClassName="edit-product-window__input"
                    inputClassName="edit-product-window__small-input"
                    labelClassName="edit-product-window__label"
                    onChange={props.editWeight}
                    value={props.weight} />
                <CustomInput
                    label="Length (mm)"
                    inputBlockClassName="edit-product-window__input"
                    inputClassName="edit-product-window__small-input"
                    labelClassName="edit-product-window__label"
                    onChange={props.editLength}
                    value={props.length} />
                <CustomInput
                    label="Height (mm)"
                    inputBlockClassName="edit-product-window__input"
                    inputClassName="edit-product-window__small-input"
                    labelClassName="edit-product-window__label"
                    onChange={props.editHeight}
                    value={props.height} />
                <CustomInput
                    label="Width (mm)"
                    inputBlockClassName="edit-product-window__input"
                    inputClassName="edit-product-window__small-input"
                    labelClassName="edit-product-window__label"
                    onChange={props.editWidth}
                    value={props.width} />
                <CustomInput
                    label="Count"
                    inputBlockClassName="edit-product-window__input"
                    inputClassName="edit-product-window__small-input"
                    labelClassName="edit-product-window__label"
                    onChange={props.editCount}
                    value={props.count} />
                <CustomInput 
                    label="Photo (url)"
                    inputBlockClassName="edit-product-window__input"
                    inputClassName="edit-product-window__small-input"
                    labelClassName="edit-product-window__label"
                    onChange={props.editPhoto}
                    value={props.photo} />
            </div> 
            {props.isValidEdit === false && props.didTryToProcessEdit === true && (
                <div>
                    <div>Errors:</div>
                    <div>{props.errorsEdit.map((errorText, index) => <div key={`er-${index}`}>{errorText}</div>)}</div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    modalFields: state.editProduct.modalFields,
    isValidEdit: state.editProduct.isValidEdit,
    didTryToProcessEdit: state.editProduct.didTryToProcessEdit,
    errorsEdit: state.editProduct.errorsEdit,
    color: state.editProduct.modalFields.color,
    count: state.editProduct.modalFields.count,
    description: state.editProduct.modalFields.description,
    height: state.editProduct.modalFields.height,
    length: state.editProduct.modalFields.length,
    name: state.editProduct.modalFields.name,
    photo: state.editProduct.modalFields.photo,
    weight: state.editProduct.modalFields.weight,
    width: state.editProduct.modalFields.width
})
const mapDispatchToProps = {
    loadProductData: loadProductData,
    editColor: editColorAction,
    editCount: editCountAction,
    editDescription: editDescriptionAction,
    editHeight: editHeightAction,
    editLength: editLengthAction,
    editName: editNameAction,
    editPhoto: editPhotoAction,
    editWeight: editWeightAction,
    editWidth: editWidthAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProductWindow) 