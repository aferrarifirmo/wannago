import { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

import '../../css/Authentication.css';

export default function UpdateProfile() {
  
  const emailRef: {current: {value: string} | undefined} | undefined = useRef();
  const passwordRef: {current: {value: string} | undefined} | undefined = useRef();
  const passwordConfirmRef: {current: {value: string} | undefined} | undefined = useRef();
  const nameRef: {current: {value: string} | undefined} | undefined = useRef();
  const { updateEmail, updatePassword, updateName, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const promises = [];

    if (nameRef.current && nameRef.current.value !== currentUser.email) {
      promises.push(updateName(nameRef.current.value));
    }

    if (emailRef.current && emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current && passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    if (passwordRef.current!.value !== passwordConfirmRef.current!.value) {
      setError('Passwords do not match');
      return;
    }

    try {
      await Promise.all(promises);
      navigate('/user/dashboard');
      setLoading(false);
    } catch (e) {
      setError('Failed to update acount');
      setLoading(false);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='card-body-h2'>Update Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                ref={nameRef as React.RefObject<HTMLInputElement>}
                defaultValue={currentUser.displayName}
                required
              />
            </Form.Group>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                ref={emailRef as React.RefObject<HTMLInputElement>}
                defaultValue={currentUser.email}
                required
              />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                ref={passwordRef as React.RefObject<HTMLInputElement>}
                placeholder='Leave blank to keep the same password'
              />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type='password'
                ref={passwordConfirmRef as React.RefObject<HTMLInputElement>}
                placeholder='Leave blank to keep the same password'
              />
            </Form.Group>
            <Button
              type='submit'
              className='signup-button'
              disabled={loading}
            >
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='line-after-auth-card'>
        <Link to='/user/dashboard'>Cancel</Link> &nbsp;
        <Link to='/user/delete-account'>Delete Account</Link>
      </div>
    </>
  );
};
