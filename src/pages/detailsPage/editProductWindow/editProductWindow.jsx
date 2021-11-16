import React, { useEffect } from "react";
import { connect } from "react-redux";
import { editColorAction, editCountAction, editDescriptionAction, editHeightAction, editLengthAction, editNameAction, editPhotoAction, editWeightAction, editWidthAction, loadProductData } from "../../../store/reducers/editProduct.reducer";
import CustomInput from "../../components/CustomInput";
import './EditProductWindow.scss'


const EditProductModal = (props) => {
    useEffect(() => {
        props.loadProductData(props.uid)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div>
            <div className='edit_product_modal'>
                <CustomInput 
                    label="Name"
                    inputBlockClassName="edit_product_modal_input"
                    inputClassName="edit_product_modal_input__small_input"
                    onChange={props.editName}
                    value={props.name} />
                <CustomInput 
                    label="Description"
                    inputBlockClassName="edit_product_modal_input"
                    inputClassName="edit_product_modal_input__large_input"
                    onChange={props.editDescription}
                    value={props.description} 
                    textarea={true} />
                <CustomInput
                    label="Color"
                    inputBlockClassName="edit_product_modal_input"
                    inputClassName="edit_product_modal_input__small_input"
                    onChange={props.editColor}
                    value={props.color} />
                <CustomInput
                    label="Weight (g)"
                    inputBlockClassName="edit_product_modal_input"
                    inputClassName="edit_product_modal_input__small_input"
                    onChange={props.editWeight}
                    value={props.weight} />
                <CustomInput
                    label="Length (mm)"
                    inputBlockClassName="edit_product_modal_input"
                    inputClassName="edit_product_modal_input__small_input"
                    onChange={props.editLength}
                    value={props.length} />
                <CustomInput
                    label="Height (mm)"
                    inputBlockClassName="edit_product_modal_input"
                    inputClassName="edit_product_modal_input__small_input"
                    onChange={props.editHeight}
                    value={props.height} />
                <CustomInput
                    label="Width (mm)"
                    inputBlockClassName="edit_product_modal_input"
                    inputClassName="edit_product_modal_input__small_input"
                    onChange={props.editWidth}
                    value={props.width} />
                <CustomInput
                    label="Count"
                    inputBlockClassName="edit_product_modal_input"
                    inputClassName="edit_product_modal_input__small_input"
                    onChange={props.editCount}
                    value={props.count} />
                <CustomInput 
                    label="Photo (url)"
                    inputBlockClassName="edit_product_modal_input"
                    inputClassName="edit_product_modal_input__small_input"
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProductModal) 