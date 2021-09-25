const ADD_PRODUCT = 'ADD-PRODUCT'
const CHANGE_NAME = 'CHANGE-NAME'
const CHANGE_DISCRIPTION = 'CHANGE-DISCRIPTION'
const CHANGE_COLOR = 'CHANGE-COLOR'
const CHANGE_WEIGHT = 'CHANGE-WEIGHT'
const CHANGE_LENGTH = 'CHANGE-LENGTH'
const CHANGE_HEIGHT = 'CHANGE-HEIGHT'
const CHANGE_WIDTH = 'CHANGE-WIDTH'
const CHANGE_COUNT = 'CHANGE-COUNT'
const CHANGE_PHOTO = 'CHANGE-PHOTO'

export const addProductAction = () => ({ type: ADD_PRODUCT })
export const updateNameAction = (text) => ({ type: CHANGE_NAME, newText: text })
export const updateDiscriptionAction = (text) => ({ type: CHANGE_DISCRIPTION, newText: text })
export const updateColorAction = (text) => ({ type: CHANGE_COLOR, newText: text })
export const updateWeightAction = (text) => ({ type: CHANGE_WEIGHT, newText: text })
export const updateLengthAction = (text) => ({ type: CHANGE_LENGTH, newText: text })
export const updateHeightAction = (text) => ({ type: CHANGE_HEIGHT, newText: text })
export const updateWidthAction = (text) => ({ type: CHANGE_WIDTH, newText: text })
export const updateCountAction = (text) => ({ type: CHANGE_COUNT, newText: text })
export const updatePhotoAction = (text) => ({ type: CHANGE_PHOTO, newText: text })

export let initialState = {
    productsData: [],
    newName: '',
    newDiscription: '',
    newColor: '',
    newWeight: '',
    newLength: '',
    newHeight: '',
    newWidth: '',
    newCount: '',
    newPhoto: '',   
}

let newId = () => {
    let number = initialState.productsData.length;
    return(number + 1)
}

const newProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            let newProduct = {
                id: newId(),
                name: state.newName,
                discription: state.newDiscription,
                color: state.newColor,
                weight: state.newWeight,
                length: state.newLength,
                height: state.newHeight,
                width: state.newWidth,
                count: state.newCount,
                photo: state.newPhoto
            };
            state.productsData.push(newProduct);
            state.newName = '';
            state.newDiscription = '';
            state.newColor = '';
            state.newWeight = '';
            state.newLength = '';
            state.newHeight = '';
            state.newWidth = '';
            state.newCount = '';
            state.newPhoto = '';
            return state;
        case CHANGE_NAME:
            state.newName = action.newText;
            return state;
        case CHANGE_DISCRIPTION:
            state.newDiscription = action.newText;
            return state;
        case CHANGE_COLOR:
            state.newColor = action.newText;
            return state;
        case CHANGE_WEIGHT:
            state.newWeight = action.newText;
            return state;
        case CHANGE_LENGTH:
            state.newLength = action.newText;
            return state;
        case CHANGE_HEIGHT:
            state.newHeight = action.newText;
            return state;
        case CHANGE_WIDTH:
            state.newWidth = action.newText;
            return state;
        case CHANGE_COUNT:
            state.newCount = action.newText;
            return state;
        case CHANGE_PHOTO:
            state.newPhoto = action.newText;
            return state;
        default:
            return state;
    }
}

export default newProductReducer;