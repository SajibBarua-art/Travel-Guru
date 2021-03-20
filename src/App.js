import './App.css';
import firebase from "firebase/app";
import "firebase/analytics";
import firebaseConfig from './Components/Login/firebase.config';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

// if(!firebaseConfig.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          {/* <Route path='/login'>
            <Login></Login>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
