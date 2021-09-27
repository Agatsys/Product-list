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
                photo: state.newPhoto,
            };
            return {
                ...state,
                productsData: [...state.productsData, newProduct],
                newName: '',
                newDiscription: '',
                newColor: '',
                newWeight: '',
                newLength: '',
                newHeight: '',
                newWidth: '',
                newCount: '',
                newPhoto: ''}
        case CHANGE_NAME:
            return {...state, newName: action.newText}
        case CHANGE_DISCRIPTION:
            return {...state, newDiscription: action.newText}
        case CHANGE_COLOR:
            return {...state, newColor: action.newText}
        case CHANGE_WEIGHT:
            return {...state, newWeight: action.newText}
        case CHANGE_LENGTH:
            return {...state, newLength: action.newText}
        case CHANGE_HEIGHT:
            return {...state, newHeight: action.newText}
        case CHANGE_WIDTH:
            return {...state, newWidth: action.newText}
        case CHANGE_COUNT:
            return {...state, newCount: action.newText}
        case CHANGE_PHOTO:
            return {...state, newPhoto: action.newText}
        default:
            return state;
    }
}


export default newProductReducer;