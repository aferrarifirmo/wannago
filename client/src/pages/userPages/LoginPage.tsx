import { useState } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import '../../css/Authentication.css';

export default function Login() {
  
  const emailRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const { logIn } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      navigate('/user/dashboard');
    } catch {
      setError('Failed to sign in');
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='card-body-h2'>Log in</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                id='email'
                type='email'
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                id='password'
                type='password'
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Button
              type='submit'
              id='login-button'
              className='signup-button'
              disabled={loading}
            >
              Log In
            </Button>
          </Form>
          <div className='line-after-auth-card forgot'>
            <Link to='/user/forgot-password'>Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className='line-after-auth-card'>
        Need an account? <Link to='/user/signup'>Sign Up</Link>
      </div>
    </>
  );
};
