import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from './context/AuthProvider';
import Header from "./Pages/Shared/Header/Header";

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/">

            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
