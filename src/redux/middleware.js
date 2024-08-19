import { errorOn } from "./action";
import { COMMENT_CREATE } from "./type";

const badWords = ["козел", "тупой"];

export function spamFilter({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === COMMENT_CREATE) {
        const hasBadWords = badWords.some((res) =>
          action.data.text.includes(res)
        );
        if (hasBadWords) {
          return dispatch(errorOn("Нельзя писать запрещенные слова"));
        }
      }
      return next(action);
    };
  };
}
