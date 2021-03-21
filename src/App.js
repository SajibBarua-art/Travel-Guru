import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SetDestination from './SetDestination/SetDestination';
import { createContext, useState } from 'react';
import NotFound from './Components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [logInState, setLogInState] = useState({});
  return (
    <UserContext.Provider value={[logInState, setLogInState]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/setDestination'>
            <SetDestination></SetDestination>
          </PrivateRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
