import PopUp from "./Popup";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <h1>Hi</h1>
      <PopUp />
    </div>
  );
}

export default App;
