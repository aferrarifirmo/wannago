import { Link, useNavigate } from 'react-router-dom';
const logo = require('../finalWannaGoLogo.png');

export const DashBoardButton = () => {
  return (
    <Link to={'/user/dashboard'} className="mt-4 mr-20">
      <button>
        <span className="material-symbols-outlined text-third">home</span>
      </button>
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
    <button className='mr-20'>
      <span className="material-symbols-outlined text-third" onClick={handleClick}>logout</span>
    </button>
  );
};

export const SignUpButton = () => {
  return (
    <Link className='iconLinks' to={'/user/signup'}>
      <span className="material-symbols-outlined text-third">person_add</span>
    </Link>
  );
};

export const LogInButton = () => {
  return (
    <Link to={'/user/login'}>
      <span className="material-symbols-outlined text-third">login</span>
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