import React from "react";
import CancelButtonEW from "./cancelButton/cancelButton_EW";
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
import SaveButtonEW from "./saveButton/saveButton_EW";


const EditProductWindow = (props) => {
    return (
        <div className={props.active ? 'editProductWindow active' : 'editProductWindow'} onClick={() => props.setActive(false)}>
            <div className='modalContent__editProductWindow' onClick={e => e.stopPropagation()}>
                <h3 className='title__editProductWindow'>Edit product</h3>
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
                <CancelButtonEW />
                <SaveButtonEW />
            </div> 
        </div>
    )
}

export default EditProductWindow