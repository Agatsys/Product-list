import { v4 as uuidv4 } from 'uuid';


const ADD_PRODUCT = 'ADD-PRODUCT'
const DELETE_PRODUCT = 'DELETE-PRODUCT'
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
export const deleteProductAction = (uid) => ({ type: DELETE_PRODUCT, payload: uid })
export const updateNameAction = (text) => ({ type: CHANGE_NAME, payload: text })
export const updateDiscriptionAction = (text) => ({ type: CHANGE_DISCRIPTION, payload: text })
export const updateColorAction = (text) => ({ type: CHANGE_COLOR, payload: text })
export const updateWeightAction = (text) => ({ type: CHANGE_WEIGHT, payload: text })
export const updateLengthAction = (text) => ({ type: CHANGE_LENGTH, payload: text })
export const updateHeightAction = (text) => ({ type: CHANGE_HEIGHT, payload: text })
export const updateWidthAction = (text) => ({ type: CHANGE_WIDTH, payload: text })
export const updateCountAction = (text) => ({ type: CHANGE_COUNT, payload: text })
export const updatePhotoAction = (text) => ({ type: CHANGE_PHOTO, payload: text })

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

const newProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            let newProduct = {
                id: uuidv4(),
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
                newName: '',
                newDiscription: '',
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
        case CHANGE_DISCRIPTION:
            return {
                ...state, 
                newDiscription: action.payload
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
        default:
            return state;
    }
}

export default newProductReducer;