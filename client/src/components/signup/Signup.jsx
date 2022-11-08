import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup'
import {MdLock,MdEmail,MdCode} from 'react-icons/md'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert'
import axios from 'axios';



const SignUp = (props) => {
    const [loading,setLoading]=useState(false);
    const [succ,setSucc]=useState(false);
    const [err,setErr]=useState('');
    const [signupDetails,setSignupDetails]=useState({
        username:'',
        password:'',
        fname:'',
        lname:'',
        cfhandle:'',
        cchandle:''
    });
    const handleChange=(event)=>{
      setSignupDetails({...signupDetails,[event.target.name]:event.target.value});
    }
    const signup= async(event)=>{
      event.preventDefault();
      console.log(signupDetails);
      setLoading(true);

      try{
          const res= await axios.get("http://localhost:5000/signup",{
            params:signupDetails
          });
          if(res.data.details=="missing"){
            setSucc(false);
            setErr('Please fill all the fields')
          }else{
            setSucc(true);
            setErr('Account created successfully...')
          }

      }catch(error){
        setSucc(false);
          setErr(error.message);
      }finally{
        setSucc(false);
        setLoading(false);
        setSignupDetails({
          username:'',
          password:'',
          fname:'',
          lname:'',
          cfhandle:'',
          cchandle:''
        });

      }
    }


  return (
    <>
    
    <Modal show={props.signUp} onHide={props.hideSignUp}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          {err?<Alert key={succ?'success':'danger'} dismissible variant={(succ===true)?'success':'danger'} onClose={()=>setErr('')} >{err}</Alert>:''}
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><MdEmail /> </InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                name="username"
                type="email"
                aria-describedby="basic-addon1"
                value={signupDetails.username}
                onChange={handleChange}
              />
            </InputGroup>
           
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><MdLock /></InputGroup.Text>
              <Form.Control
                placeholder="password"
                aria-label="password"
                type="password"
                name="password"
                aria-describedby="basic-addon1"
                value={signupDetails.password}
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>First and last name</InputGroup.Text>
                  <Form.Control
                   aria-label="First name" 
                   name="fname"
                   value={signupDetails.fname}
                   onChange={handleChange}
                  />
                  <Form.Control 
                  aria-label="Last name"
                  name="lname"
                  value={signupDetails.lname}
                  onChange={handleChange}
                   />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><MdCode /> </InputGroup.Text>
              <Form.Control
                placeholder="codeforces handle"
                aria-label="codeforces handle"
                name="cfhandle"
                aria-describedby="basic-addon1"
                value={signupDetails.cfhandle}
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><MdCode /> </InputGroup.Text>
              <Form.Control
                placeholder="codechef handle"
                aria-label="cchandle"
                name="cchandle"
                aria-describedby="basic-addon1"
                value={signupDetails.cchandle}
                onChange={handleChange}
              />
            </InputGroup>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hideSignUp}>
            Close
          </Button>
          <Button variant="primary" onClick={signup}>
            {loading?'creating account...':'Create new account'}
          </Button>
        </Modal.Footer>
      </Modal>
    
    
    </>
  )
}

export default SignUp


