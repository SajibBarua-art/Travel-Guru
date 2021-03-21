import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { createUserWithEmailAndPassword, handleGoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword } from './loginManager';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    newUser: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
    photo: ""
  })

  initializeLoginFramework();

  const [logInState, setLogInState] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }
  const handleResponse = (res, redirect) => {
    setUser(res);
    setLogInState(res);
    if (redirect) {
      history.replace(from);
    }
  }

  const handleBlur = (event) => {
    let isFormValid = true;
    if (event.target.name === "email") {
      isFormValid = /\S+@\S+.com/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 7;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSubmit = (event) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }
    //To stop/prevent the submitting reload 
    event.preventDefault();
  }

  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: '65%' }}>
        <div className="card-style">
          <h3>{newUser ? 'Create an account' : 'Log In'}</h3>
          <form onSubmit={handleSubmit}>
            {
              newUser && <input className='data-field' onBlur={handleBlur} name="name" placeholder="Enter your name" type="text" />
            }
            <br />
            <input className='data-field' onBlur={handleBlur} name="email" type="text" placeholder="Email" required />
            <br />
            <input className='data-field' onBlur={handleBlur} name="password" type="password" placeholder="Password" required />
            <div className="d-flex justify-content-between">
              <div>
                <input style={{ marginRight: '5px' }} type="checkbox" name="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <div>
                <Link to="/forgotPassword" style={{ color: 'rgba(255, 110, 64, 1)' }}>Forgot Password</Link>
              </div>
            </div>
            <br />
            <input className='data-field' id="submit-form-button" type="submit" value={newUser ? "Create an Account" : "Log In"} />
          </form>

          <p>
            {
              !newUser ?
                "Don't have an account? "
                : "Do you already have an account? "
            }
            {
              !newUser ?
                <span id='account-state' onClick={() => setNewUser(!newUser)}>Create an account</span>
                : <span id='account-state' onClick={() => setNewUser(!newUser)}>Start Log In</span>
            }
          </p>
        </div>
        <h4 style={{textAlign: 'center', marginTop:'20px'}}>------------ Or ------------</h4>
        <button className="other-authentication-style" onClick={googleSignIn}>Continue with Google</button>
      </div>
    </div>
  );
}

export default Login;
