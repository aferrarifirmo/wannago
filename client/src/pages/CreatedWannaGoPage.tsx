import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import WannaGoCard from '../components/WannaGoCard';
import { getWannaGoById } from '../utils/apis/wannagoApiServices/getWannaGos';
import { putGuestLink } from '../utils/apis/wannagoApiServices/putWannaGos';
import { CLIENT_PORT, URL } from '../utils/config';
import '../css/WannaGoCard.css';
import { putOwnerToWannaGo } from '../utils/apis/userApiServices/userApi';
import { User } from '@firebase/auth-types';

const PlanCreated = () => {
  const params = new URLSearchParams(window.location.pathname);
  const id = params.get('/wannago/id');
  const currentUser: User | null = useAuth();
  const navigate = useNavigate();
  const [wannaGo, setwannaGo] = useState({});
  const [copied, setCopied] = useState('Copy');

  useEffect(() => {
    promiseHandler();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const guestLink = `${URL}${3001}/wannago/guest-link/id=${id}`;

  const promiseHandler = async () => {
    const queriedWannaGo = await getWannaGoById(id);
    await putGuestLink(id, guestLink);
    console.log('currentUser', currentUser);
    if (currentUser && currentUser.uid)
      putOwnerToWannaGo(queriedWannaGo._id, currentUser.uid);
    setwannaGo(queriedWannaGo);
  };
  const handleClick = () => {
    navigator.clipboard.writeText(guestLink);
    setCopied('Copied');
  };
  return (
    <>
      <h1 className='justCreatedWannaGo'>What a Plan!</h1>
      <WannaGoCard wannaGo={wannaGo} />
      <div className='justCreatedWannaGoSedondPart'>
        <h4>Ask if they wannaGo!</h4>
        <h4>Share this link:</h4>
        <div aria-label='guest link container'>
          <a
            className='guestLink'
            target='blank'
            href={`${URL}${CLIENT_PORT}/wannago/guest-link/id=${id}`}
          >
            {guestLink}
            {/*port needs to be the same as the one in the client not the backend*/}
          </a>
          <button
            className='buttonCopy'
            onClick={handleClick}
          >
            {copied}
          </button>
        </div>
        {!currentUser? 
          <>
          <h6 className='highlight'>
              To save the plan and keep track of who is going,
              <Link to='/user/login'> log in </Link> or
              <Link to='/user/signup'> sign up </Link> please.
            </h6> 
            <div className='btns-container' aria-label='buttons container'>
              <button
                className='button cancel'
                onClick={() => navigate('/user/signup')}
              >
                Log In
              </button>
              <button
                className='button cancel'
                onClick={() => navigate('/user/login')}
              >
                Sign Up
              </button>
            </div>
          </> 
          : null }
      </div>
    </>
  );
};

export default PlanCreated;
