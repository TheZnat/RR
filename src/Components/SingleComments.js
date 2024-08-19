import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { commentDelete, commentUpdate } from "../redux/action";

const SingleComments = ({ data }) => {
  const [commentText, setCommentText] = useState("");
  const { text, id } = data;
  const dispatch = useDispatch();

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handlerInput = (e) => {
    setCommentText(e.target.value);
  };

  const handlerUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id));
  };

  const handlerDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  };

  return (
    <form className="comments-item" onSubmit={handlerUpdate}>
      <div className="comments-item-delete" onClick={handlerDelete}>
        &times;
      </div>
      <input type="text" value={commentText} onChange={handlerInput} />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComments;
