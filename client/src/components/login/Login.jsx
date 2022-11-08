import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import Alert from 'react-bootstrap/Alert';
import {MdLock,MdEmail} from 'react-icons/md'
import InputGroup from 'react-bootstrap/InputGroup'
const Login = (props) => {

    const [err,setErr]=useState('');
    const [loading,setLoading]=useState(false);
    const [loginDetails,setLoginDetails]=useState({
      username:'',
      password:''
    });
    
    const handleChange =(event) =>{
      // setErr('')
      setLoginDetails({...loginDetails,[event.target.name]:event.target.value});
    };

    const login=async(event)=>{
      event.preventDefault();
      console.log(loginDetails);
        setLoading(true);
        try{
            const res=await axios.get("http://localhost:5000/login",{
              params:loginDetails
            });

            if(res.data.details=="wrong"){
         //console.log("error")
              setErr('Wrong credentials !!');
            }else if(res.data.details=='correct'){
               window.localStorage.setItem('user',JSON.stringify(res.data.data));
               props.setLogged(true);
              }
        }catch (error){
            setErr(error.message)
        }finally{
            setLoading(false);
            setLoginDetails({username:"",password:""});
            
        }

    }
    
  
  return (
    <>
    
    <Modal show={props.login} onHide={props.hideLogin}>
        <Modal.Header closeButton>
          <Modal.Title>login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {err?<Alert key='danger' dismissible variant='danger' onClose={()=>setErr('')} >{err}</Alert>:''}
            
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><MdEmail /> </InputGroup.Text>
              <Form.Control
                aria-label="Username"
                aria-describedby="basic-addon1"
                type="email"
                name='username'
                placeholder="name@example.com"
                value = {loginDetails.username}
                onChange={handleChange}
                autoFocus
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><MdLock /></InputGroup.Text>
              <Form.Control 
              placeholder='password'
              area-label='password'
              area-describedby='password'
              type='password'
              name='password'
              onChange={handleChange}
               value={loginDetails.password}
              />
            </InputGroup>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hideLogin}>
            Close
          </Button>
          <Button variant="primary" onClick={login}>
          {!loading?'login':'logging....'}
          </Button>
        </Modal.Footer>
      </Modal>
    
    
    </>
  )
}

export default Login


