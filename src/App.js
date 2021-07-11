import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import {Route, Switch} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
