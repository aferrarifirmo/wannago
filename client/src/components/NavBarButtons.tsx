import { Link, useNavigate } from 'react-router-dom';
const logoutSoft = require('../icons/logout-soft.png');
const signUpSoft = require('../icons/sign-up-soft.png');
const loginSoft = require('../icons/login-soft.png');
const homeSoft = require('../icons/home-icon-soft.png');
const logo = require('../finalWannaGoLogo.png');

export const DashBoardButton = () => {
  return (
    <Link
      className='iconLinks'
      to={'/user/dashboard'}
    >
      <img
        title='Go to Dashboard'
        className='icons dashboard'
        src={homeSoft}
        alt='dashboard icon'
      ></img>
    </Link>
  );
};

type Props = { logOut: any };

export const LogoutButton = ({ logOut }: Props) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    await logOut();
    navigate('/');
  };
  return (
    <img
      id='logout-button'
      title='Log Out'
      className='icons logout'
      src={logoutSoft}
      onClick={handleClick}
      alt='logout icon'
    ></img>
  );
};

export const SignUpButton = () => {
  return (
    <Link
      className='iconLinks'
      to={'/user/signup'}
    >
      <img
        title='Sign Up'
        className='icons signup'
        src={signUpSoft}
        alt='signup icon'
      />
    </Link>
  );
};

export const LogInButton = () => {
  return (
    <Link
      className='iconLinks'
      to={'/user/login'}
    >
      <img
        title='Log In'
        className='icons login'
        src={loginSoft}
        alt='login icon'
      ></img>
    </Link>
  );
};

export const LandingButton = () => {
  return (
    <Link
      className='iconLinkLanding'
      to={'/'}
    >
      <img
        id='landing-page'
        title='Go to Landing Page'
        className='iconsLogo'
        src={logo}
        alt='logo'
      ></img>
    </Link>
  );
};