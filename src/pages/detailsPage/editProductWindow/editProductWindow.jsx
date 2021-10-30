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
            <div className='editProductWindow' onClick={e => e.stopPropagation()}>
                <CustomInput 
                    inputBlockClassName='EditProductInput'
                    inputClassName="SmallInput"
                    label="Name"
                    labelClassName="EditProductLabel"
                    onChange={props.editName}
                    value={props.name} />
                <CustomInput 
                    inputBlockClassName='EditProductInput'
                    inputClassName="BigInput"
                    label="Description"
                    labelClassName="EditProductLabel"
                    onChange={props.editDescription}
                    value={props.description} />
                <CustomInput
                    inputBlockClassName='EditProductInput'
                    inputClassName="SmallInput"
                    label="Color"
                    labelClassName="EditProductLabel"
                    onChange={props.editColor}
                    value={props.color} />
                <CustomInput
                    inputBlockClassName='EditProductInput'
                    inputClassName="SmallInput"
                    label="Weight (g)"
                    labelClassName="EditProductLabel"
                    onChange={props.editWeight}
                    value={props.weight} />
                <CustomInput
                    inputBlockClassName='EditProductInput'
                    inputClassName="SmallInput"
                    label="Length (mm)"
                    labelClassName="EditProductLabel"
                    onChange={props.editLength}
                    value={props.length} />
                <CustomInput
                    inputBlockClassName='EditProductInput'
                    inputClassName="SmallInput"
                    label="Height (mm)"
                    labelClassName="EditProductLabel"
                    onChange={props.editHeight}
                    value={props.height} />
                <CustomInput
                    inputBlockClassName='EditProductInput'
                    inputClassName="SmallInput"
                    label="Width (mm)"
                    labelClassName="EditProductLabel"
                    onChange={props.editWidth}
                    value={props.width} />
                <CustomInput
                    inputBlockClassName='EditProductInput'
                    inputClassName="SmallInput"
                    label="Count"
                    labelClassName="EditProductLabel"
                    onChange={props.editCount}
                    value={props.count} />
                <CustomInput 
                    inputBlockClassName='EditProductInput'
                    inputClassName="SmallInput"
                    label="Photo (url)"
                    labelClassName="EditProductLabel"
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