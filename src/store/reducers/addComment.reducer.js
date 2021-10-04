import { v4 as uuidv4 } from 'uuid';


const CHANGE_COMMENT = 'CHANGE-COMMENT'
const ADD_COMMENT = 'ADD-COMMENT'
const DELETE_COMMENT = 'DELETE-COMMENT'

export const updateCommentAction = (text) => ({ type: CHANGE_COMMENT, payload: text })
export const addCommentAction = (productUid) => ({ type: ADD_COMMENT, payload: productUid })
export const deleteCommentAction = (productUid, index) => ({ type: DELETE_COMMENT, payload: {uid: productUid, deleteIndex: index} })

export let initialState = {
    commentsNew: {},
    newText: '',
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT: {
            const newComment = {
                id: uuidv4(),
                text: state.newText,
                date: 2021,
            }
            const oldComments = state.commentsNew[action.payload] || []
            const updatedComments = [ ...oldComments, newComment]
            return {
                newText: '',
                commentsNew: {
                    ...state.commentsNew,
                    [action.payload]: updatedComments
                }
            }
        }
        case CHANGE_COMMENT:
            return {
                ...state,
                newText: action.payload
            }
        case DELETE_COMMENT:
            const { uid, deleteIndex } = action.payload
            const restComments = state.commentsNew[uid].filter((item, index) => index !== deleteIndex)
            return {
                ...state,
                commentsNew: {
                    ...state.commentsNew,
                    [uid]: restComments
                }
            }
        default:
            return state;
    }
}

export default commentsReducer;