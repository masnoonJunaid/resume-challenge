import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Lorem from "./components/Lorem"
import {Route, Switch} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route  path="/lorem1" component={Lorem}/>
      <Route path="/lorem2" component={Lorem}/>
      <Route path="/lorem3"component={Lorem}/>
      <Footer/>
    </div>
  );
}

export default App;
