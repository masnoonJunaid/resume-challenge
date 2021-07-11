import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import {Route, Switch} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
