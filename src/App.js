import "./App.css";
import Comments from "./Components/Comments";
import Likes from "./Components/Likes";
import Title from "./Components/Title";


function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
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
