import logo from './logo.svg';
import './App.css';
import { Login } from "./components/Login";       //naming export
//import Login from "./components/Login";            default export 
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login/>
      <Products/>
    </div>
  );
}

export default App;
