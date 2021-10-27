import React from 'react'
import EnterColor from './enterColor/enterColor';
import EnterCount from './enterCount/enterCount';
import EnterDescription from './enterDescription/enterDescription';
import EnterHeight from './enterHeight/enterHeight';
import EnterLength from './enterLength/enterLength';
import EnterName from './enterName/enterName';
import EnterPhoto from './enterPhoto/enterPhoto';
import EnterWeight from './enterWeight/enterWeight';
import EnterWidth from './enterWidth/enterWidth';
import './addNewProductWindow.scss'


const AddNewProductWindow = (props) => {
    return (
        <div className='addNewProductWindow'>
            <div className='modalContent__addNewProductWindow'>
                <h4 className='name_t'>Name</h4>
                <h4 className='description_t'>Description</h4>
                <h4 className='color_t'>Color</h4>
                <h4 className='weight_t'>Weight (g)</h4>
                <h4 className='length_t'>Length (mm)</h4>
                <h4 className='height_t'>Height (mm)</h4>
                <h4 className='width_t'>Width (mm)</h4>
                <h4 className='count_t'>Count</h4>
                <h4 className='photo_t'>Photo (url)</h4>

                <EnterName />
                <EnterDescription />
                <EnterColor />
                <EnterWeight />
                <EnterLength />
                <EnterHeight />
                <EnterWidth />
                <EnterCount />
                <EnterPhoto />
            </div>
        </div>
    )
}

export default AddNewProductWindow;