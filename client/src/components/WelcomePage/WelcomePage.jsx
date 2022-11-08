import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Login from '../login/Login';
import SignUp from '../signup/Signup';
const WelcomePage = (props) => {
    const [login, setLogin]=useState(false);
    const showLogin=()=>setLogin(true);
    const hideLogin=()=>setLogin(false);

    const [signUp, setSignUp]=useState(false);
    const showSignUp=()=>setSignUp(true);
    const hideSignUp=()=>setSignUp(false);

  return (
    <>
    <h1>vCode</h1>
   { login && <Login showLogin={showLogin} login={login} hideLogin={hideLogin} setLogged={props.setLogged} />}
   { signUp && <SignUp showSignUp={showSignUp} signUp={signUp} hideSignUp={hideSignUp} />}
      <div>
      <Button variant="outline-primary" onClick={showLogin}>
        Login
      </Button>
      <Button variant="outline-primary" onClick={showSignUp}>
        Register
      </Button>
      </div>
    </>
  )
}

export default WelcomePage