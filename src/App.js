import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from './context/AuthProvider';
import Header from "./Pages/Shared/Header/Header";
import Home from './Pages/Home/Home/Home'
import Login from "./Pages/Home/Login/Login";
function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
