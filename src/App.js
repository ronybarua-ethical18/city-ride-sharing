import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';
import { Container } from 'react-bootstrap';
export const UserContext = createContext();
function App() {
  const[loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
   <Container>
        <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
          <Router>
            <Header loggedInUser = {loggedInUser}></Header>
            <Switch>
              <Route exact path="/">
              <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/vehicles/:vehicleId">
                <Destination></Destination>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
            </Switch>
          </Router>
        </UserContext.Provider>
   </Container>
    </div>
  );
}

export default App;
