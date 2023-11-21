import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

function Login() {

  const adminUsername = "Admin";
  const adminPassword = "Grace";

  const [username, setUsername] = useState("Admin");
  const [password, setPassword] = useState("Grace");
  const usenavigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === adminUsername && password === adminPassword) {
      alert("logged in successfully")
      usenavigate('/home')
    } else {
        alert('Invalid username or password')
        }
    }

  return (
    <>
        <Form onSubmit={handleLogin}
        className='border rounded p-4 bg-dark text-white'>
            <h2 className=' p-1 text-center'>Admin Login</h2>
            <Row className="mb-3">
              <Form.Group as={Col} md="10" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="10" controlId="validationCustomUsername">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    aria-describedby="passwordHelpBlock"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                  Your password must be 8-20 characters long, contain letters and numbers,
              and must not contain spaces, special characters, or emoji.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Button className='m-2 btn btn-danger' value="Login" type="submit">Login</Button>
        </Form>
    </>
  )
}

export default Login