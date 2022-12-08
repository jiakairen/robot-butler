import Signup from "../pages/Signup";
function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <h1>Hi</h1>
      <Signup />
    </div>
  );
}

export default App;
