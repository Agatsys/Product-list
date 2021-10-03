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
        return () => {   
        }
    }, [])
    
    return (
        <div className={'editProductWindow'} onClick={() => props.setActive(false)}>
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
                <EditName name={props.modalFields.name}/>
                <EditDiscription discription={props.modalFields.discription} />
                <EditColor color={props.modalFields.color}/>
                <EditWeight weight={props.modalFields.weight}/>
                <EditLength length={props.modalFields.length}/>
                <EditHeight height={props.modalFields.height}/>
                <EditWidth width={props.modalFields.width}/>
                <EditCount count={props.modalFields.count}/>
                <EditPhoto photo={props.modalFields.photo}/>
                
            </div> 
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        modalFields: state.editProduct.modalFields
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadProductData: (uid) => {
            dispatch(loadProductData(uid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProductWindow) 


{/* <CancelButtonEW setActive={props.setActive}/>
                <SaveButtonEW /> */}