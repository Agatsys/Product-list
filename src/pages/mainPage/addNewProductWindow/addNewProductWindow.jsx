import React from 'react'
// import EnterName from './WithinModal/EnterName'
// import AddButton from './WithinModal/AddButton'
// import AddPhoto from './WithinModal/AddPhoto'
// import CancelButton from './WithinModal/CancelButton'
// import EnterCount from './WithinModal/EnterCount'
// import EnterColor from './WithinModal/EnterColor'
// import EnterDiscription from './WithinModal/EnterDiscription'
// import EnterHeight from './WithinModal/EnterHeight'
// import EnterLength from './WithinModal/EnterLength'
// import EnterWeight from './WithinModal/EnterWeight'
// import EnterWidth from './WithinModal/EnterWidth'

const AddNewProductWindow = (props) => {
    
    return (
        <div className={props.active ? 'addNewProductWindow active' : 'addNewProductWindow'} onClick={() => props.setActive(false)}>
            <div className='modalContent' onClick={e => e.stopPropagation()}>
                <h3 className='modal__title'>AddProduct</h3>
                <h4 className='name_t'>Name</h4>
                <h4 className='discription_t'>Discription</h4>
                <h4 className='color_t'>Color</h4>
                <h4 className='weight_t'>Weight (g)</h4>
                <h4 className='length_t'>Length (mm)</h4>
                <h4 className='height_t'>Height (mm)</h4>
                <h4 className='width_t'>Width (mm)</h4>
                <h4 className='count_t'>Count</h4>
                <h4 className='photo_t'>Photo</h4>
                {/* <EnterName dispatch={props.dispatch}/>
                <EnterDiscription dispatch={props.dispatch}/>
                <EnterColor dispatch={props.dispatch}/>
                <EnterWeight dispatch={props.dispatch}/>
                <EnterLength dispatch={props.dispatch}/>
                <EnterHeight dispatch={props.dispatch}/>
                <EnterWidth dispatch={props.dispatch}/>
                <EnterCount dispatch={props.dispatch}/>
                <AddPhoto dispatch={props.dispatch}/>
                <AddButton dispatch={props.dispatch} />
                <CancelButton setActive={props.setActive}/> */}
            </div>
        </div>
    )
} 

export default AddNewProductWindow;