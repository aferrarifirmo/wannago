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
                 <p className='font-space-grotesk  bg-third text-second mr-20 mt-3 p-2'>
                  UPDATE PROFILE
                  </p>  
            </Link>
            <DashBoardButton />
            <LogoutButton logOut={logOut} />
          </div>
        </div>
      ) : location.pathname === '/' ? (
          <div className='flex flex-row mx-0'>
            <LogInButton />
            <SignUpButton />
          </div>
      ) : (
        <div className='flex flex-row'>
          <LandingButton />
          <div className='flex flex-row '>
            <LogInButton />
            <SignUpButton />
          </div>
        </div>
      )}
    </nav>
  );
};

// export default NavBar;