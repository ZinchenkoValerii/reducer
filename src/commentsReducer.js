import { ADD_COMMENT, ADD_COMMENT_SUCCESS } from "./actions";

const commentsReducer = (
  state = {
    loading: false,
    comments: []
  },
  action
) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        loading: true
      };
    case ADD_COMMENT_SUCCESS:
      return {
        loading: false,
        comments: [...state.comments, action.comment]
      };
    default:
      return state;
  }
};

export default commentsReducer;
