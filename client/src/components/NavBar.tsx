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
    <nav className=''>
      {currentUser ? (
        <div className='flex flex-row'>
          <LandingButton />
          <div>
            <Link to={'/user/update-profile'}> Update Profile </Link>
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
          <div className='flex flex-row'>
            <LogInButton />
            <SignUpButton />
          </div>
        </>
      )}
    </nav>
  );
};

// export default NavBar;