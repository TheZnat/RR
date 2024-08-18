import { COMMENT_CREATE } from "./type";

const initialState = {
  comments: [],
};

export const commentReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };
    default: {
      return state;
    }
  }
  //   switch (action.type) {
  //     case COMMENT_CREATE:
  //       return {
  //         ...state,
  //         comments: [...state.comments, action.payload],
  //       };
  //       default:
  //         return state;
  //   }
};
