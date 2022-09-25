import { Card, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const [error, setError] = useState('');
  const { currentUser, logOut } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    setError('');
    await logOut();
    navigate('/');
    try {
      setError('');
      await logOut();
      navigate('/');
    } catch (e) {
      setError('Failed to log out');
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='card-body-h2rd'>Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link
            to='/update-profile'
            className='btn btn-primary w-100 mt-3'
          >
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className='line-after-auth-card'>
        <Button
          variant='link'
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </div>
    </>
  );
};

export default Dashboard;


