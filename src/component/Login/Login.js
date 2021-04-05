import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import firebaseConfig from './firevase.confit';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app();
 }

 


const Login = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    const history = useHistory();
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
    // const [user, setUser] = useState({})
    console.log('loggedInUser', loggedInUser);
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          const {displayName, email, photoURL} = result.user;
          const signedInUser = {userName: displayName, email, photoURL}
          setLoggedInUser(signedInUser);
          history.replace(from)
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          console.log(errorMessage, errorCode, email);
        });
    }
    return (
        <div className="login-style rounded text-center container">
            <h3>Login With</h3>
            <button onClick={handleGoogleSignIn} className="button-style rounded-pill">Continue With Google</button>
            <p>Don't have an account <Link>Create an account</Link></p>
        </div>
    );
};

export default Login;

