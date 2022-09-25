import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Login></Login> */}
      <Shop></Shop>
    </div>
  );
}

export default App;
