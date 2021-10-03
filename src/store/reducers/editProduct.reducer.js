export const LOAD_PRODUCT_DATA = 'LOAD_PRODUCT_DATA'
export const EDIT_PRODUCT = 'EDIT-PRODUCT'
const EDIT_NAME = 'EDIT-NAME'
const EDIT_DISCRIPTION = 'EDIT-DISCRIPTION'
const EDIT_COLOR = 'EDIT-COLOR'
const EDIT_WEIGHT = 'EDIT-WEIGHT'
const EDIT_LENGTH = 'EDIT-LENGTH'
const EDIT_HEIGHT = 'EDIT-HEIGHT'
const EDIT_WIDTH = 'EDIT-WIDTH'
const EDIT_COUNT = 'EDIT-COUNT'
const EDIT_PHOTO = 'EDIT-PHOTO'

export const loadProductData = (uid) => (dispatch, getState) => {
    const state = getState()
    const objectiveProduct = state.newProduct.productsData.find(item => item.id === uid)
    dispatch({ type: LOAD_PRODUCT_DATA, payload: objectiveProduct })
}
export const editProductAction = (uid) => (dispatch, getState) => {
    const state = getState()
    const newData = state.editProduct.modalFields
    dispatch({ type: EDIT_PRODUCT, payload: { uid: uid, newData: newData } })
}
export const editNameAction = (text) => ({ type: EDIT_NAME, payload: text })
export const editDiscriptionAction = (text) => ({ type: EDIT_DISCRIPTION, payload: text })
export const editColorAction = (text) => ({ type: EDIT_COLOR, payload: text})
export const editWeightAction = (text) => ({ type: EDIT_WEIGHT, payload: text})
export const editLengthAction = (text) => ({ type: EDIT_LENGTH, payload: text})
export const editHeightAction = (text) => ({ type: EDIT_HEIGHT, payload: text})
export const editWidthAction = (text) => ({ type: EDIT_WIDTH, payload: text})
export const editCountAction = (text) => ({ type: EDIT_COUNT, payload: text})
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
        photo: ''
    }
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
        case EDIT_NAME: {
            return {

            }
        }
        case EDIT_DISCRIPTION: {

        }
        case EDIT_COLOR: {

        }
        case EDIT_WEIGHT: {

        }
        case EDIT_LENGTH: {

        }
        case EDIT_HEIGHT: {

        }
        case EDIT_WIDTH: {

        }
        case EDIT_COUNT: {

        }
        case EDIT_PHOTO: {

        }
        default:
            return state;
    }
}


export default editProductReducer;