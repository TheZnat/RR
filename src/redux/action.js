import {
  COMMENT_CREATE,
  COMMENT_DELETE,
  COMMENT_UPDATE,
  COMMENTS_LOAD,
  DECREMENT,
  ERROR_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  INCREMENT,
  INPUT_TEXT,
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
} from "./type";

export function incrementLikes() {
  return {
    type: INCREMENT,
  };
}

export function decrementLikes() {
  return {
    type: DECREMENT,
  };
}

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text,
  };
}

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
}

export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: { text, id },
  };
}

export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id,
  };
}

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}

export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

export function errorOn(text) {
  return (dispatch) => {
    dispatch({
      type: ERROR_DISPLAY_ON,
      text,
    });

    setTimeout(() => {
      dispatch(errorOff());
    }, 3000);
  };
}

export function errorOff() {
  return {
    type: ERROR_DISPLAY_OFF,
  };
}

export function commentsLoad() {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=10"
      );
      const data = await response.json();
      dispatch({
        type: COMMENTS_LOAD,
        data,
      });
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn(err.message));
    }
  };
}
