import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { postUser } from '../../utils/apis/userApiServices/userApi';
import { useAuth } from '../../contexts/AuthContext';
import '../../css/Authentication.css';

export default function SignUp() {

  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const passwordConfirmRef: any = useRef();
  const nameRef: any = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const allUsers = async () => {
  //   try {
  //     const res = await getAll
  //   }
  // }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError('Passwords do not match');
      return;
    }
    if (passwordRef.current.value.length < 6) {
      setError('Passord should have 6 or more characters');
      return;
    }

      setError('');
      setLoading(true);
      setError('Email already in use');
      const newUser = await signUp(emailRef.current.value, passwordRef.current.value);
      const user = {
        name: nameRef.current.value,
        email: newUser.user.email,
        _id: newUser.user.uid,
      };
      console.log('this is user', user)
      setError("Sorry. Something went wrong on our side and we weren't able to create your account.");
      await postUser(user);
      navigate('/user/dashboard');

    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='card-body-h2'>Sign Up</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                ref={nameRef}
                required
              />
            </Form.Group>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type='password'
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Button
              type='submit'
              className='signup-button'
              disabled={loading}
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='line-after-auth-card'>
        Already have an account? <Link to='/user/login'>Log In</Link>
      </div>
    </>
  );
};
