import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { Home } from "./features/Home/Home";
import { Shop } from "./features/Shop/Shop";
import { AdminScore } from "./features/AdminPanel/AdminScore/AdminScore";
// import {adminShop} from './features/AdminPanel/AdminShop/AdminShop'

// No routing has been setup, change the return of App to each component to switch view

function App() {
  return <AdminScore />
}

export default App;
