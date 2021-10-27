import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from './context/AuthProvider';
import Header from "./Pages/Shared/Header/Header";
import Home from './Pages/Home/Home/Home'
function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
