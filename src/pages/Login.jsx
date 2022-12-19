import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import logo from "../asset/images/logo.png"
import { setUser } from '../features/AuthSlice';

function BasicExample() {
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(setUser({email}))
        setEmail("")
        navigate("/store")
    }
  return (
    <>
    <img src={logo} alt="Logo" style={{width:"400px",height:"300px"}}/>
    <div style={{minWidth:"400px",width:"60%",margin:"0 auto"}}>
    <Form style={{border:"2px solid #3333", padding:"1rem",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius:"20px",margin:"0 1rem"}} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  );
}

export default BasicExample;