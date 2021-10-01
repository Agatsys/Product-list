import { v4 as uuidv4 } from 'uuid';


const CHANGE_COMMENT = 'CHANGE-COMMENT'
const ADD_COMMENT = 'ADD-COMMENT'

export const updateCommentAction = (text) => ({ type: CHANGE_COMMENT, payload: text })
export const addCommentAction = () => ({ type: ADD_COMMENT })


export let initialState = {
    commentsData: [{text: 'ggg'}],
    newText: '',
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT: {
            let newComment = {
                id: uuidv4(),
                text: state.newText,
                productId: 2,
                date: 2021,
            }
            return {
                newText: '',
                commentsData: [
                    ...state.commentsData,
                    newComment
                ]
            }
        };
        case CHANGE_COMMENT: 
            return {
                ...state,
                newText: action.payload
            }
        default: 
            return state;
    }
}
  
export default commentsReducer;