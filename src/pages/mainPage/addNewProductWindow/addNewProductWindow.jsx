import React from 'react'
import AddButton from './addButton/addButton';
import CancelButton from './cancelButton/cancelButton';
import EnterColor from './enterColor/enterColor';
import EnterCount from './enterCount/enterCount';
import EnterDiscription from './enterDiscription/enterDiscription';
import EnterHeight from './enterHeight/enterHeight';
import EnterLength from './enterLength/enterLength';
import EnterName from './enterName/enterName';
import EnterPhoto from './enterPhoto/enterPhoto';
import EnterWeight from './enterWeight/enterWeight';
import EnterWidth from './enterWidth/enterWidth';
import './addNewProductWindow.scss'


const AddNewProductWindow = (props) => {
    return (
        <div className={props.active ? 'addNewProductWindow active' : 'addNewProductWindow'} onClick={() => props.setActive(false)}>
            <div className='modalContent' onClick={e => e.stopPropagation()}>
                <h3 className='addNewProductWindow__title'>AddProduct</h3>
                <h4 className='name_t'>Name</h4>
                <h4 className='discription_t'>Discription</h4>
                <h4 className='color_t'>Color</h4>
                <h4 className='weight_t'>Weight (g)</h4>
                <h4 className='length_t'>Length (mm)</h4>
                <h4 className='height_t'>Height (mm)</h4>
                <h4 className='width_t'>Width (mm)</h4>
                <h4 className='count_t'>Count</h4>
                <h4 className='photo_t'>Photo</h4>
                <EnterName/>
                <EnterDiscription/>
                <EnterColor/>
                <EnterWeight/>
                <EnterLength/>
                <EnterHeight/>
                <EnterWidth/>
                <EnterCount/>
                <EnterPhoto/>
                <AddButton/>
                <CancelButton setActive={props.setActive}/>
            </div>
        </div>
    )
} 

export default AddNewProductWindow;