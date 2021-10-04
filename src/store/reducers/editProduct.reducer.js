import { validate } from "../../validators/validators"

export const LOAD_PRODUCT_DATA = 'LOAD_PRODUCT_DATA'
export const EDIT_PRODUCT = 'EDIT-PRODUCT'
const VALIDATE_PRODUCT_CREATION_EDIT_WINDOW = 'VALIDATE-PRODUCT-CREATION-EDIT-WINDOW'
const TRY_PROCESS_FORM_EDIT_WINDOW = 'TRY-PROCESS-FORM-EDIT-WINDOW'
const EDIT_NAME = 'EDIT-NAME'
const EDIT_DISCRIPTION = 'EDIT-DISCRIPTION'
const EDIT_COLOR = 'EDIT-COLOR'
const EDIT_WEIGHT = 'EDIT-WEIGHT'
const EDIT_LENGTH = 'EDIT-LENGTH'
const EDIT_HEIGHT = 'EDIT-HEIGHT'
const EDIT_WIDTH = 'EDIT-WIDTH'
const EDIT_COUNT = 'EDIT-COUNT'
const EDIT_PHOTO = 'EDIT-PHOTO'

const validateAction = () => (dispatch, getState) => {
    const state = getState().editProduct.modalFields
    const isNameValid = validate('name', state.name) ? true : "The 'Name' field cannot contain numbers"
    const isDescriptionValid = validate('description', state.discription) ? true : "The 'Description' field cannot be shorter than 6 characters"
    const isColorValid = validate('color', state.color) ? true : "The 'Color' field cannot contain numbers"
    const isWeightValid = validate('weight', state.weight) ? true : "The 'weight' field cannot contain letters"
    const isLengthValid = validate('length', state.length) ? true : "The 'length' field cannot contain letters"
    const isHeightValid = validate('height', state.height) ? true : "The 'height' field cannot contain letters"
    const isWidthValid = validate('width', state.width) ? true : "The 'width' field cannot contain letters"
    const isCountValid = validate('count', state.count) ? true : "The 'count' field cannot contain letters"

    const results = [isNameValid, isDescriptionValid, isColorValid, isWeightValid, isLengthValid, isHeightValid, isWidthValid, isCountValid]
    const errors = results.filter(item => item !== true)
    const isValid = results.every(item => item === true)
    dispatch({ type: VALIDATE_PRODUCT_CREATION_EDIT_WINDOW, payload: { errorsEdit: errors, isValidEdit: isValid }})
}
export const loadProductData = (uid) => (dispatch, getState) => {
    const state = getState()
    const objectiveProduct = state.newProduct.productsData.find(item => item.id === uid)
    dispatch({ type: LOAD_PRODUCT_DATA, payload: objectiveProduct })
}
export const editProductAction = (uid) => (dispatch, getState) => {
    dispatch({ type: TRY_PROCESS_FORM_EDIT_WINDOW })
    dispatch(validateAction())
    const isValidEdit = getState().editProduct.isValidEdit
    const newData = getState().editProduct.modalFields
    if (isValidEdit) {
        dispatch({ type: EDIT_PRODUCT, payload: { uid: uid, newData: newData } })
    }
}
export const editNameAction = (text) => (dispatch) => {
    dispatch({ type: EDIT_NAME, payload: text })
    dispatch(validateAction())
}
export const editDiscriptionAction = (text) => (dispatch) => {
    dispatch({ type: EDIT_DISCRIPTION, payload: text })
    dispatch(validateAction())
}
export const editColorAction = (text) => (dispatch) => {
    dispatch({ type: EDIT_COLOR, payload: text })
    dispatch(validateAction())
}
export const editWeightAction = (text) => (dispatch) => {
    dispatch({ type: EDIT_WEIGHT, payload: text })
    dispatch(validateAction())
}
export const editLengthAction = (text) => (dispatch) => {
    dispatch({ type: EDIT_LENGTH, payload: text })
    dispatch(validateAction())
}
export const editHeightAction = (text) => (dispatch) => {
    dispatch({ type: EDIT_HEIGHT, payload: text })
    dispatch(validateAction())
}
export const editWidthAction = (text) => (dispatch) => {
    dispatch({ type: EDIT_WIDTH, payload: text })
    dispatch(validateAction())
}
export const editCountAction = (text) => (dispatch) => {
    dispatch({ type: EDIT_COUNT, payload: text })
    dispatch(validateAction())
}
export const editPhotoAction = (text) => ({ type: EDIT_PHOTO, payload: text})

export let initialState = {
    modalFields: {
        name: '',
        discription: '',
        color: '',
        weight: '',
        length: '',
        height: '',
        width: '',
        count: '',
        photo: '',
    },
    didTryToProcessEdit: false,
    isValidEdit: true,
    errorsEdit: []
}

const editProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCT_DATA: {
            return {
                ...state,
                modalFields: {
                    ...action.payload
                }
            }
        }
        case TRY_PROCESS_FORM_EDIT_WINDOW: {
            return {
                ...state,
                didTryToProcessEdit: true
            }
        }
        case VALIDATE_PRODUCT_CREATION_EDIT_WINDOW: {
            const { errorsEdit, isValidEdit } = action.payload
            return {
                ...state,
                errorsEdit: errorsEdit,
                isValidEdit: isValidEdit
            }
        }
        case EDIT_NAME: {
            return {
                ...state,
                modalFields: {
                    ...state.modalFields, 
                    name: action.payload
                } 
            }
        }
        case EDIT_DISCRIPTION: {
            return {
                ...state,
                modalFields: {
                    ...state.modalFields, 
                    discription: action.payload
                }
            }
        }
        case EDIT_COLOR: {
            return {
                ...state,
                modalFields: {
                    ...state.modalFields, 
                    color: action.payload
                }
            }
        }
        case EDIT_WEIGHT: {
            return {
                ...state,
                modalFields: {
                    ...state.modalFields, 
                    weight: action.payload
                }
            }
        }
        case EDIT_LENGTH: {
            return {
                ...state,
                modalFields: {
                    ...state.modalFields, 
                    length: action.payload
                }
            }
        }
        case EDIT_HEIGHT: {
            return {
                ...state,
                modalFields: {
                    ...state.modalFields, 
                    height: action.payload
                }
            }
        }
        case EDIT_WIDTH: {
            return {
                ...state,
                modalFields: {
                    ...state.modalFields, 
                    width: action.payload
                }
            }
        }
        case EDIT_COUNT: {
            return {
                ...state,
                modalFields: {
                    ...state.modalFields, 
                    count: action.payload
                }
            }
        }
        case EDIT_PHOTO: {
            return {
                ...state,
                modalFields: {
                    ...state.modalFields, 
                    photo: action.payload
                }
            }
        }
        default:
            return state;
    }
}

export default editProductReducer;