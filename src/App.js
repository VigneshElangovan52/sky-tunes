import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Provider } from "react-redux";
import AppStore from "./components/store/AppStore";

function App() {
  return (
    <div className="App">
      <Provider store={AppStore}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  );
}

export default App;
