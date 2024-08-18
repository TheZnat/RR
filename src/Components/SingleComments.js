import { useEffect, useState } from "react";

const SingleComments = ({ data }) => {
  const [commentText, setCommentText] = useState("");
  const { text, id } = data;

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handlerInput = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <form className="comments-item">
      <div className="comments-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={handlerInput} />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComments;
