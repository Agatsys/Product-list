import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadProductData } from "../../../store/reducers/editProduct.reducer";
//import CancelButtonEW from "./cancelButton/cancelButton_EW";
import EditColor from "./editColor/editColor";
import EditCount from "./editCount/editCount";
import EditDiscription from "./editDiscription/editDiscription";
import EditHeight from "./editHeight/editHeight";
import EditLength from "./editLength/editLength";
import EditName from "./editName/editName";
import EditPhoto from "./editPhoto/editPhoto";
import './editProductWindow.scss'
import EditWeight from "./editWeight/editWeight";
import EditWidth from "./editWidth/editWidth";
//import SaveButtonEW from "./saveButton/saveButton_EW";


const EditProductWindow = (props) => {

    useEffect(() => {
        props.loadProductData(props.uid)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div className={'editProductWindow'}>
            <div className='modalContent__editProductWindow' onClick={e => e.stopPropagation()}>
                <h4 className='name_e'>Name</h4>
                <h4 className='discription_e'>Discription</h4>
                <h4 className='color_e'>Color</h4>
                <h4 className='weight_e'>Weight (g)</h4>
                <h4 className='length_e'>Length (mm)</h4>
                <h4 className='height_e'>Height (mm)</h4>
                <h4 className='width_e'>Width (mm)</h4>
                <h4 className='count_e'>Count</h4>
                <h4 className='photo_e'>Photo (url)</h4>
                <EditName />
                <EditDiscription />
                <EditColor />
                <EditWeight />
                <EditLength />
                <EditHeight />
                <EditWidth />
                <EditCount />
                <EditPhoto />
            </div> 
            {props.isValidEdit === false && props.didTryToProcessEdit === true && (
                <div>
                    <div>Errors:</div>
                    <div>{props.errorsEdit.map(errorText => <div>{errorText}</div>)}</div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    modalFields: state.editProduct.modalFields,
    isValidEdit: state.editProduct.isValidEdit,
    didTryToProcessEdit: state.editProduct.didTryToProcessEdit,
    errorsEdit: state.editProduct.errorsEdit
})
const mapDispatchToProps = (dispatch) => {
    return {
        loadProductData: (uid) => {
            dispatch(loadProductData(uid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProductWindow) 