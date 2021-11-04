import { v4 as uuidv4 } from 'uuid';
import { EDIT_PRODUCT } from './editProduct.reducer'
import { validate } from '../../validators/validators'


const ADD_PRODUCT = 'ADD-PRODUCT'
const DELETE_PRODUCT = 'DELETE-PRODUCT'
const TRY_PROCESS_FORM = 'TRY_PROCESS_FORM'
const VALIDATE_PRODUCT_CREATION = 'VALIDATE-PRODUCT-CREATION'
const CHANGE_NAME = 'CHANGE-NAME'
const CHANGE_DESCRIPTION = 'CHANGE-DESCRIPTION'
const CHANGE_COLOR = 'CHANGE-COLOR'
const CHANGE_WEIGHT = 'CHANGE-WEIGHT'
const CHANGE_LENGTH = 'CHANGE-LENGTH'
const CHANGE_HEIGHT = 'CHANGE-HEIGHT'
const CHANGE_WIDTH = 'CHANGE-WIDTH'
const CHANGE_COUNT = 'CHANGE-COUNT'
const CHANGE_PHOTO = 'CHANGE-PHOTO'
const CLEAR_ALL_TEXT_FIELDS = 'CLEAR_ALL_TEXT_FIELDS'

const validateAction = () => (dispatch, getState) => {
    const state = getState().newProduct
    const isNameValid = validate('name', state.newName) ? true : "The 'Name' field cannot be shorter than 1 symbol"
    const isDescriptionValid = validate('description', state.newDescription) ? true : "The 'Description' field cannot be shorter than 3 symbols"
    const isColorValid = validate('color', state.newColor) ? true : "The 'Color' field cannot contain numbers"
    const isWeightValid = validate('weight', state.newWeight) ? true : "The 'weight' field cannot contain letters"
    const isLengthValid = validate('length', state.newLength) ? true : "The 'length' field cannot contain letters"
    const isHeightValid = validate('height', state.newHeight) ? true : "The 'height' field cannot contain letters"
    const isWidthValid = validate('width', state.newWidth) ? true : "The 'width' field cannot contain letters"
    const isCountValid = validate('count', state.newCount) ? true : "The 'count' field cannot contain letters"
    const isPhotoValid = validate('photo', state.newPhoto) ? true : "The 'photo' field must contain the URL address "

    const results = [isNameValid, isDescriptionValid, isColorValid, isWeightValid, isLengthValid, isHeightValid, isWidthValid, isCountValid, isPhotoValid]
    const errors = results.filter(item => item !== true)
    const isValid = results.every(item => item === true)
    dispatch({ type: VALIDATE_PRODUCT_CREATION, payload: { errors: errors, isValid: isValid }})
}
export const addProductAction = () => (dispatch, getState) => {
    dispatch({ type: TRY_PROCESS_FORM })
    dispatch(validateAction())
    const isValid = getState().newProduct.isValid
    if (isValid) {
        dispatch({ type: ADD_PRODUCT })
    }
}
export const deleteProductAction = (uid) => ({ type: DELETE_PRODUCT, payload: uid })

export const updateNameAction = (text) => (dispatch) => {
    dispatch({ type: CHANGE_NAME, payload: text })
    dispatch(validateAction())
}
export const updateDescriptionAction = (text) => (dispatch) => {
    dispatch({ type: CHANGE_DESCRIPTION, payload: text })
    dispatch(validateAction())
}
export const updateColorAction = (text) => (dispatch) => {
    dispatch({ type: CHANGE_COLOR, payload: text })
    dispatch(validateAction())
}
export const updateWeightAction = (text) => (dispatch) => {
    dispatch({ type: CHANGE_WEIGHT, payload: text })
    dispatch(validateAction())
}
export const updateLengthAction = (text) => (dispatch) => {
    dispatch({ type: CHANGE_LENGTH, payload: text })
    dispatch(validateAction())
}
export const updateHeightAction = (text) => (dispatch) => {
    dispatch({ type: CHANGE_HEIGHT, payload: text })
    dispatch(validateAction())
}
export const updateWidthAction = (text) => (dispatch) => {
    dispatch({ type: CHANGE_WIDTH, payload: text })
    dispatch(validateAction())
}
export const updateCountAction = (text) => (dispatch) => {
    dispatch({ type: CHANGE_COUNT, payload: text })
    dispatch(validateAction())
}
export const updatePhotoAction = (text) => (dispatch) => {
    dispatch({ type: CHANGE_PHOTO, payload: text })
    dispatch(validateAction())
}
export const clearAllTextFieldsAction = () => ({ type: CLEAR_ALL_TEXT_FIELDS })

export let initialState = {
    productsData: [],

    newName: '',
    newDescription: '',
    newColor: '',
    newWeight: '',
    newLength: '',
    newHeight: '',
    newWidth: '',
    newCount: '',
    newPhoto: '',   

    didTryToProcess: false,
    isValid: true,
    errors: []
}

const newProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_PRODUCT: {

            const { uid, newData } = action.payload

            const objectiveProduct = state.productsData.find(item => item.id === uid)
            const restProducts = state.productsData.filter(item => item.id !== uid)

            objectiveProduct.name = newData.name
            objectiveProduct.description = newData.description
            objectiveProduct.color = newData.color
            objectiveProduct.weight = newData.weight
            objectiveProduct.length = newData.length
            objectiveProduct.height = newData.height
            objectiveProduct.width = newData.width
            objectiveProduct.count = newData.count
            objectiveProduct.photo = newData.photo
            
            return {
                ...state,
                productsData: [
                    ...restProducts,
                    objectiveProduct
                ]
            }
        }
        case ADD_PRODUCT: {
            let newProduct = {
                id: uuidv4(),
                name: state.newName,
                description: state.newDescription,
                color: state.newColor,
                weight: state.newWeight,
                length: state.newLength,
                height: state.newHeight,
                width: state.newWidth,
                count: state.newCount,
                photo: state.newPhoto,
            };
            return {
                newName: '',
                newDescription: '',
                newColor: '',
                newWeight: '',
                newLength: '',
                newHeight: '',
                newWidth: '',
                newCount: '',
                newPhoto: '',   
                productsData: [
                    ...state.productsData, 
                    newProduct
                ]
            }
        }
        case TRY_PROCESS_FORM: {
            return {
                ...state,
                didTryToProcess: true
            }
        }
        case VALIDATE_PRODUCT_CREATION: {
            const { errors, isValid } = action.payload
            return {
                ...state,
                errors: errors,
                isValid: isValid
            }
        }
        case DELETE_PRODUCT: {
            const uid = action.payload
            return {
                ...state,
                productsData: [
                    ...state.productsData.filter(item => item.id !== uid)
                ]
            }
        }
        case CHANGE_NAME:
            return {
                ...state, 
                newName: action.payload
            }
        case CHANGE_DESCRIPTION:
            return {
                ...state, 
                newDescription: action.payload
            }
        case CHANGE_COLOR:
            return {
                ...state, 
                newColor: action.payload
            }
        case CHANGE_WEIGHT:
            return {
                ...state, 
                newWeight: action.payload
            }
        case CHANGE_LENGTH:
            return {
                ...state, 
                newLength: action.payload
            }
        case CHANGE_HEIGHT:
            return {
                ...state, 
                newHeight: action.payload
            }
        case CHANGE_WIDTH:
            return {
                ...state, 
                newWidth: action.payload
            }
        case CHANGE_COUNT:
            return {
                ...state, 
                newCount: action.payload
            }
        case CHANGE_PHOTO:
            return {
                ...state, 
                newPhoto: action.payload
            }
        case CLEAR_ALL_TEXT_FIELDS:
            return {
                newName: '',
                newDescription: '',
                newColor: '',
                newWeight: '',
                newLength: '',
                newHeight: '',
                newWidth: '',
                newCount: '',
                newPhoto: '', 
                productsData: [
                    ...state.productsData
                ]
            }
        default:
            return state;
    }
}

export default newProductReducer;