import { MainProvider } from "./context/MainContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./css/App.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <MainProvider>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </MainProvider>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
