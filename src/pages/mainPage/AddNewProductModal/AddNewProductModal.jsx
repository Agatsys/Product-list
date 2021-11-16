import React from 'react'
import './AddNewProductModal.scss'
import CustomInput from '../../components/CustomInput';
import { connect } from 'react-redux';
import { clearAllTextFieldsAction, updateColorAction, updateCountAction, updateDescriptionAction, updateHeightAction, updateLengthAction, updateNameAction, updatePhotoAction, updateWeightAction, updateWidthAction } from '../../../store/reducers/product.reducer';


const AddNewProductModal = (props) => {
    let clearAndClose = () => {
        props.setModalActive(false)
        props.clearTextFields()
    }

    return (
        <div className={props.modalActive ? "add_new_product_modal_mask add_new_product_modal_active" : "add_new_product_modal_mask"} onClick={() => props.setModalActive(false)}>
            <div className="add_new_product_modal" onClick={e => e.stopPropagation()}>
                <label>Add new product:</label>
                <CustomInput
                    label="Name"
                    inputBlockClassName="add_new_product_modal__input"
                    inputClassName="add_new_product_modal__input__small_input"
                    onChange={props.enterName}
                    value={props.newName} />
                <CustomInput
                    label="Description"
                    inputBlockClassName="add_new_product_modal__input"
                    inputClassName="add_new_product_modal__input__large_input"
                    onChange={props.enterDescription}
                    textarea={true}
                    value={props.newDescription} />
                <CustomInput
                    label="Color"
                    inputBlockClassName="add_new_product_modal__input"
                    inputClassName="add_new_product_modal__input__small_input"
                    onChange={props.enterColor}
                    value={props.newColor} />
                <CustomInput
                    label="Weight (g)"
                    inputBlockClassName="add_new_product_modal__input"
                    inputClassName="add_new_product_modal__input__small_input"
                    onChange={props.enterWeight}
                    value={props.newWeight} />
                <CustomInput
                    label="Length (mm)"
                    inputBlockClassName="add_new_product_modal__input"
                    inputClassName="add_new_product_modal__input__small_input"
                    onChange={props.enterLength}
                    value={props.newLength} />
                <CustomInput
                    label="Height (mm)"
                    inputBlockClassName="add_new_product_modal__input"
                    inputClassName="add_new_product_modal__input__small_input"
                    onChange={props.enterHeight}
                    value={props.newHeight} />
                <CustomInput
                    label="Width (mm)"
                    inputBlockClassName="add_new_product_modal__input"
                    inputClassName="add_new_product_modal__input__small_input"
                    onChange={props.enterWidth}
                    value={props.newWidth} />
                <CustomInput
                    label="Count"
                    inputBlockClassName="add_new_product_modal__input"
                    inputClassName="add_new_product_modal__input__small_input"
                    onChange={props.enterCount}
                    value={props.newCount} />
                <CustomInput
                    label="Photo (url)"
                    inputBlockClassName="add_new_product_modal__input"
                    inputClassName="add_new_product_modal__input__small_input"
                    onChange={props.enterPhoto}
                    value={props.newPhoto} />
                <div className="add_new_product_modal__buttons">
                    <button className="add-new-product-window__cancel-button"
                        onClick={clearAndClose}>
                        Cancel
                    </button>
                    <button className="add-new-product-window__add-product-button"
                        onClick={props.AddNewProduct}>
                        Add product
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    newColor: state.newProduct.newColor, 
    newCount: state.newProduct.newCount,
    newDescription: state.newProduct.newDescription,
    newHeight: state.newProduct.newHeight,
    newLength: state.newProduct.newLength,
    newName: state.newProduct.newName,
    newPhoto: state.newProduct.newPhoto,
    newWeight: state.newProduct.newWeight,
    newWidth: state.newProduct.newWidth
})
const mapDispatchToProps = {
    enterColor: updateColorAction,
    enterCount: updateCountAction,
    enterDescription: updateDescriptionAction,
    enterHeight: updateHeightAction,
    enterLength: updateLengthAction,
    enterName: updateNameAction,
    enterPhoto: updatePhotoAction,
    enterWeight: updateWeightAction,
    enterWidth: updateWidthAction,
    clearTextFields: clearAllTextFieldsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewProductModal);