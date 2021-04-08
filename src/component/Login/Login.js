import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import firebaseConfig from './firevase.confit';
import { UserContext } from '../../App';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
 

const Login = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    const history = useHistory();
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          const {displayName, email, photoURL} = result.user;
          const signedInUser = {userName: displayName, email, photoURL}
          setLoggedInUser(signedInUser);
          history.replace(from)
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage, errorCode );
        });
    }
    return (
        <div className="login-style rounded text-center container">
            <h3>Login With</h3>
            <button onClick={handleGoogleSignIn} className="button-style rounded-pill">Continue With Google</button>
            <p>Don't have an account <Link to='/signIn'>Create an account</Link></p>
        </div>
    );
};

export default Login;

