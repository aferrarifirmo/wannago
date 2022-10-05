import { Link, useNavigate } from 'react-router-dom';
const logoutSoft = require('../icons/logout-soft.png');
const signUpSoft = require('../icons/sign-up-soft.png');
const loginSoft = require('../icons/login-soft.png');
const homeSoft = require('../icons/home-icon-soft.png');
const logo = require('../finalWannaGoLogo.png');

export const DashBoardButton = () => {
  return (
    <Link className='iconLinks' to={'/user/dashboard'}>
      <span className="material-symbols-outlined">home</span>
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
    <span className="material-symbols-outlined" onClick={handleClick}>logout</span>
  );
};

export const SignUpButton = () => {
  return (
    <Link className='iconLinks' to={'/user/signup'}>
      <span className="material-symbols-outlined">person_add</span>
    </Link>
  );
};

export const LogInButton = () => {
  return (
    <Link className='fill-third' to={'/user/login'}>
      <span className="material-symbols-outlined">login</span>
    </Link>
  );
};

export const LandingButton = () => {
  return (
    <Link className='iconLinkLanding' to={'/'}>
      <img  title='Go to Landing Page'
            className='w-48'
            src={logo}
            alt='logo'/>
    </Link>
  );
};