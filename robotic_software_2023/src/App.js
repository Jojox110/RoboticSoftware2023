import logo from "./logo.svg";
import { Provider } from "react-redux";
import { store } from "./store";
import { Home } from "./features/Home/Home";
import { Shop } from "./features/Shop/Shop";
import { AdminScore } from "./features/AdminPanel/AdminScore/AdminScore.js";
import { Schedule } from "./features/Schedule/Schedule";
import { Documentation } from "./features/Documentation/Documentation";

// No routing has been setup, change the return of App to each component to switch view

function App() {
  return (
    <Provider store={store}>
      <Documentation />
    </Provider>
  )
}

export default App;
