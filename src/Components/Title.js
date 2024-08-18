import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../redux/action";

const Title = (props) => {
  const dispatch = useDispatch();
  const text = useSelector((state) => {
    const { inputReducer } = state;
    return inputReducer.text;
  });

  const handlerChange = (e) => {
    e.preventDefault();
    dispatch(inputText(e.target.value));
  };

  return (
    <div className="cart-title">
      <div className="card-title-top">
        <input type="text" onChange={handlerChange} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Title;
