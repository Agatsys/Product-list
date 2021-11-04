import React from 'react'
import './AddNewProductWindow.scss'
import CustomInput from '../../components/CustomInput';
import { connect } from 'react-redux';
import { clearAllTextFieldsAction, updateColorAction, updateCountAction, updateDescriptionAction, updateHeightAction, updateLengthAction, updateNameAction, updatePhotoAction, updateWeightAction, updateWidthAction } from '../../../store/reducers/product.reducer';


const AddNewProductWindow = (props) => {
    let clearAndClose = () => {
        props.setModalActive(false)
        props.clearTextFields()
    }

    return (
        <div className={props.modalActive ? "add-new-product-window__mask add-new-product-window__active" : "add-new-product-window__mask"} onClick={() => props.setModalActive(false)}>
            <div className="add-new-product-window" onClick={e => e.stopPropagation()}>
                <div className="add-new-product-window__title">
                    Add new product:
                </div>
                <CustomInput
                    label="Name"
                    inputBlockClassName="add-new-product-window__input"
                    inputClassName="add-new-product-window__small-input"
                    labelClassName="add-new-product-window__label"
                    onChange={props.enterName}
                    value={props.newName} />
                <CustomInput
                    label="Description"
                    inputBlockClassName="add-new-product-window__input"
                    inputClassName="add-new-product-window___large-input"
                    labelClassName="add-new-product-window__label"
                    onChange={props.enterDescription}
                    textarea={true}
                    value={props.newDescription} />
                <CustomInput
                    label="Color"
                    inputBlockClassName="add-new-product-window__input"
                    inputClassName="add-new-product-window__small-input"
                    labelClassName="add-new-product-window__label"
                    onChange={props.enterColor}
                    value={props.newColor} />
                <CustomInput
                    label="Weight (g)"
                    inputBlockClassName="add-new-product-window__input"
                    inputClassName="add-new-product-window__small-input"
                    labelClassName="add-new-product-window__label"
                    onChange={props.enterWeight}
                    value={props.newWeight} />
                <CustomInput
                    label="Length (mm)"
                    inputBlockClassName="add-new-product-window__input"
                    inputClassName="add-new-product-window__small-input"
                    labelClassName="add-new-product-window__label"
                    onChange={props.enterLength}
                    value={props.newLength} />
                <CustomInput
                    label="Height (mm)"
                    inputBlockClassName="add-new-product-window__input"
                    inputClassName="add-new-product-window__small-input"
                    labelClassName="add-new-product-window__label"
                    onChange={props.enterHeight}
                    value={props.newHeight} />
                <CustomInput
                    label="Width (mm)"
                    inputBlockClassName="add-new-product-window__input"
                    inputClassName="add-new-product-window__small-input"
                    labelClassName="add-new-product-window__label"
                    onChange={props.enterWidth}
                    value={props.newWidth} />
                <CustomInput
                    label="Count"
                    inputBlockClassName="add-new-product-window__input"
                    inputClassName="add-new-product-window__small-input"
                    labelClassName="add-new-product-window__label"
                    onChange={props.enterCount}
                    value={props.newCount} />
                <CustomInput
                    label="Photo (url)"
                    inputBlockClassName="add-new-product-window__input"
                    inputClassName="add-new-product-window__small-input"
                    labelClassName="add-new-product-window__label"
                    onChange={props.enterPhoto}
                    value={props.newPhoto} />
                <div className="add-new-product-window__buttons">
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

export default connect(mapStateToProps, mapDispatchToProps)(AddNewProductWindow);