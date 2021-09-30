//import store from '../store'
import { initialState } from './product.reducer'

const DELETE_PRODUCT = 'DELETE-PRODUCT'
const OPEN_MODAL = 'OPEN-MODAL'
const CLOSE_MODAL = 'CLOSE-MODAL'

export const deleteProductAction = (uid) => ({ type: DELETE_PRODUCT, payload: uid })
export const openModalAction = () => ({ type: OPEN_MODAL})
export const closeModalAction = () => ({ type: CLOSE_MODAL})


const deleteProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PRODUCT: {
            const uid = action.payload
            return {
                ...state,
                productsData: [
                    ...state.productsData.filter(item => item.id !== uid)
                ]
            }
        }
        case OPEN_MODAL: {
            return {
                isModalOpen: true
            }
        }
        case CLOSE_MODAL: {
            return {
                isModalOpen: false
            }
        }
        default:
            return state;

    }
}

export default deleteProductReducer;