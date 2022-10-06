import { useLocation, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  LogInButton,
  SignUpButton,
  LogoutButton,
  LandingButton,
  DashBoardButton,
} from './NavBarButtons';

export function NavBar(): JSX.Element {

  const { currentUser, logOut } = useAuth();
  const location = useLocation();

  return (
    <nav className='bg-first '>
      {currentUser ? (
        <div className='flex justify-between m-0 mt-4'>
          <LandingButton />
          <div className='flex flex-row'>
            <Link to={'/user/update-profile'}
                  className='text-third '
                  style={{ textDecoration: 'none' }}
                > 
                 <p className='font-space-grotesk  bg-third text-second mr-10 mt-3 p-2 hover:scale-110 ease-in duration-100'>
                  UPDATE PROFILE
                  </p>  
            </Link>
            <DashBoardButton />
            <LogoutButton logOut={logOut} />
          </div>
        </div>
      ) : location.pathname === '/' ? (
          <div className='flex flex-row justify-end mr-10 mt-4'>
            <div className='mx-4'>
              <LogInButton />
            </div>
            <SignUpButton />
          </div>
      ) : (
        <div className='flex justify-between m-0 mt-4'>
          <LandingButton />
          <div className='flex flex-row mr-10'>
            <div className='mx-4'>
              <LogInButton />
            </div>
            <SignUpButton />
          </div>
        </div>
      )}
    </nav>
  );
};
