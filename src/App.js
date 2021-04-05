import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import { createContext, useState } from 'react';
import PrivateRout from './component/PrivateRoute/PrivateRout';
import Admin from './component/Admin/Admin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          
            <Switch>
              <Route path="/home" >
                <Home />
              </Route>

              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRout path="/admin">
                <Admin />
              </PrivateRout>
              <Route path="/">
                <Home />
              </Route>
            </Switch>

        </Router>
        </UserContext.Provider>
  );
}

export default App;
