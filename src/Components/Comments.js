import { useEffect, useState } from "react";
import SingleComments from "./SingleComments";
import uniqid from "uniqid";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate, commentsLoad } from "../redux/action";

const Comments = (props) => {
  const comments = useSelector((state) => {
    const { commentReducer } = state;
    return commentReducer.comments || [];
  });

  const [textComment, setTextComment] = useState("");
  const dispatch = useDispatch();

  const handlerInput = (e) => {
    setTextComment(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };

  useEffect(() => {
    dispatch(commentsLoad());
  }, []);

  return (
    <div className="card-comments">
      <form className="comments-item-create" onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={textComment}
          onChange={handlerInput}
        />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((res) => {
          return <SingleComments key={res.id} data={res} />;
        })}
    </div>
  );
};

export default Comments;
