import { useSelector } from "react-redux";
import "./App.css";
import Comments from "./Components/Comments";
import Likes from "./Components/Likes";
import Spin from "./Components/Spin";
import Title from "./Components/Title";


function App() {
  const error = useSelector( s => s.appReducer.error );

  return (
    <div className="App">
      <div className="wrap">
        <Spin/>
        <div className="card">
          {error && <div className="error-message">{error}</div>}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Title />
            <Likes />
          </div>
          <Comments/>
        </div>
      </div>
    </div>
  );
}

export default App;
