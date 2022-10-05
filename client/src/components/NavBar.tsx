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
    <nav className='bg-first'>
      {currentUser ? (
        <div className='flex flex-row'>
          <LandingButton />
          <div className='flex flex-row align-middle'>
            <Link to={'/user/update-profile'}
                  className='text-third '
                  style={{ textDecoration: 'none' }}
                > 
                 <p className='font-space-grotesk  bg-third text-second p-2'>
                  UPDATE PROFILE
                  </p>  
            </Link>
            <DashBoardButton />
            <LogoutButton logOut={logOut} />
          </div>
        </div>
      ) : location.pathname === '/' ? (
        <>
          <div className=''>
            <LogInButton />
            <SignUpButton />
          </div>
        </>
      ) : (
        <>
          <LandingButton />
          <div className='flex flex-row justify-end'>
            <LogInButton />
            <SignUpButton />
          </div>
        </>
      )}
    </nav>
  );
};

// export default NavBar;