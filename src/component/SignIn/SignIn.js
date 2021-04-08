import React, { useState } from 'react';
import firebase from "firebase/app";
import { Link } from 'react-router-dom';
import firebaseConfig from '../Login/firevase.confit';
import './SignIn.css'

const SignIn = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        error: "",
        success: false,
    })

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
    
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === "email") {
          isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === "password") {
          const isPasswordValid = e.target.value.length > 6;
          const passwordHasNumber = /\d{1}/.test(e.target.value);
          isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
          const isSignedIn = { ...user };
          isSignedIn[e.target.name] = e.target.value;
          setUser(isSignedIn);
        }
    }

    const handleSubmit = (e) => {
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                const isSignedIn = { ...user };
              isSignedIn.error = "";
              setUser(isSignedIn)
              updateUserName(user.name)
            })
            .catch((error) => {
                const isSignedIn = { ...user };
                isSignedIn.error = error.message;
                setUser(isSignedIn)
            });
        }
        e.preventDefault();
      };

      const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
          displayName: name
        }).then(function() {
          console.log('user name updated successfully');
        }).catch(function(error) {
            console.log(error);
        });
      }

    return (
        <div>
            <form className="formStyle container p-5" action="" onSubmit={handleSubmit} >
                <h3 className="pb-4">Create an account</h3>
               
                <input name="name" className="form-control" type="text" onBlur={handleBlur} placeholder="Name" />
               
                <br />
                <input type="text" name="email" className="form-control" onBlur={handleBlur} placeholder="User Email " required />
                <br />
                <input type="password" id="password" className="form-control" onBlur={handleBlur} name="password" placeholder="Your Password" required />
                <br />
                <input style={{ background: "#FF6E40", color: "#fff" }} type="submit" className="form-control" value="Create an account" />
                <p> Already have an account ? <Link style={{ color: "red" }} to="/login"> Login </Link> </p>

                <p style={{ color: "red" }}>{user.error}</p>
            </form>
        </div>
    );
};

export default SignIn;
















// firebase.auth()
//             .createUserWithEmailAndPassword(user.email, user.password)
//             .then((res) => {
//               const isSignedIn = { ...user };
//               isSignedIn.error = "";
//               isSignedIn.success = true;
//               setUser(isSignedIn);
//               updateUserName(user.name);
//             })
//             .catch((error) => {
//               const isSignedIn = { ...user };
//               isSignedIn.error = error.message;
//               isSignedIn.success = false;
//               setUser(isSignedIn);
//             });




{/* <form
className="formStyle container p-5" action="" onSubmit={handleSubmit} >
<h3 className="pb-4">Create an account</h3>
{
  <input name="name" className="form-control" type="text" onBlur={handleBlur} placeholder="Name" />
}
<br />
<input type="text" name="email" className="form-control" onBlur={handleBlur} placeholder="User Email " required />
<br />
<input type="password" id="password" className="form-control" onBlur={handleBlur} name="password" placeholder="Your Password" required />
<br />
<input type="password" id="confirm_password" name="conformPassword" className="form-control" onBlur={handleBlur} id="" placeholder="Conform Password " required />
<br />
<input style={{ background: "#FF6E40", color: "#fff" }} type="submit" className="form-control" value="Create an account" />
<p> Already have an account ? <Link style={{ color: "red" }} to="/login"> Login </Link> </p>

<p style={{ color: "red" }}>{user.error}</p>
{user.success && (
  <p style={{ color: "green" }}>User Create a Successfully</p>
)}
</form> */}