import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Dashboard from "./component/Donation/Donation";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login";
import { createContext, useState } from "react";
import PrivateRout from "./component/PrivateRoute/PrivateRout";
import Admin from "./component/Admin/Admin";
import Events from "./component/Events/Events";
import SingleEvent from "./component/SingleEvent/SingleEvent";
import EventList from "./component/EventList/EventList";
import AddEvent from "./component/AddEvent/AddEvent";
import SignIn from "./component/SignIn/SignIn";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/donation">
            <Dashboard />
          </Route>
          <PrivateRout path="/events">
            <Events />
          </PrivateRout>
          <PrivateRout path="/singleEvent/:_id">
            <SingleEvent />
          </PrivateRout>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/addEvent">
            <AddEvent />
          </Route>
          <Route path="/eventList">
            <EventList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
