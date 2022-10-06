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

// SOCIAL SHARE BUTTONS
import { EmailShareButton, 
         FacebookMessengerShareButton,
         TelegramShareButton,
         WhatsappShareButton

        } from 'react-share';

// SOCIAL SHARE ICONS
import { EmailIcon, 
         FacebookMessengerIcon,
         TelegramIcon,
         WhatsappIcon
        } from 'react-share';

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

  const share : string = "https://google.com"

  return (
    <>
      <div className='ml-60 mb-10' >
        <h1 className='font-space-grotesk'>What a Plan!</h1>
      </div>
      <div className='w-50 mx-auto mb-10'>
        <WannaGoCard wannaGo={wannaGo} />
      </div>
      <div className='justCreatedWannaGoSedondPart'>
        <h4 className='ml-2 font-nbinternational text-third'>Ask if they wannaGo!</h4>
        <h6 className='ml-2 font-nbinternational text-third'>
          Share <a href={`${URL}${CLIENT_PORT}/wannago/guest-link/id=${id}`}>this event </a>
          
          with one of the following options so people can let you know if they want to join: 

        </h6>
        <div aria-label='guest link container'>
          <div className='social-share-container mx-2 flex flex-row align-middle'>

       
            <EmailShareButton
              url={`${URL}${CLIENT_PORT}/wannago/guest-link/id=${id}`}
              className="Demo__some-network__share-button mr-2 hover:scale-150 ease-in duration-100"
            >
              <EmailIcon size={32} round />
            </EmailShareButton>

            <FacebookMessengerShareButton
              appId=''
              url={`${URL}${CLIENT_PORT}/wannago/guest-link/id=${id}`}
              className="Demo__some-network__share-button mr-2 hover:scale-150 ease-in duration-100"
            >
              <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>

            <TelegramShareButton
              url={`${URL}${CLIENT_PORT}/wannago/guest-link/id=${id}`}
              className="Demo__some-network__share-button mr-2 hover:scale-150 ease-in duration-100"
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>

            <WhatsappShareButton
              url={`${URL}${CLIENT_PORT}/wannago/guest-link/id=${id}`}
              className="Demo__some-network__share-button mr-2 hover:scale-150 ease-in duration-100"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <button
                className='bg-third p-2 text-second mx-2 hover:scale-110 ease-in duration-100'
                onClick={handleClick}
            >
                {copied}
            </button>
          </div>

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
