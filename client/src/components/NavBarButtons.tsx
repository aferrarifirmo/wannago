import { Link, useNavigate } from 'react-router-dom';
import logo from'../finalWannaGoLogo.png';

export const DashBoardButton = () => {
  return (
    <Link to={'/user/dashboard'} className="mt-4 mr-10">
      <button>
        <span className="material-symbols-outlined text-third hover:scale-150 ease-in duration-100">home</span>
      </button>
    </Link>
  );
};

type Props = { logOut: () => void };

export const LogoutButton = ({ logOut }: Props) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    await logOut();
    navigate('/');
  };
  return (
    <button className='mr-10'>
      <span className="material-symbols-outlined text-third hover:scale-150 ease-in duration-100" onClick={handleClick} >logout</span>
    </button>
  );
};

export const SignUpButton = () => {
  return (
    <Link className='iconLinks' to={'/user/signup'}>
      <span className="material-symbols-outlined text-third hover:scale-150 ease-in duration-100">person_add</span>
    </Link>
  );
};

export const LogInButton = () => {
  return (
    <Link to={'/user/login'}>
      <span className="material-symbols-outlined text-third hover:scale-150 ease-in duration-100">login</span>
    </Link>
  );
};

export const LandingButton = () => {
  return (
    <Link className='iconLinkLanding' to={'/'}>
      <img  title='Go to Landing Page'
            className='w-48 hover:scale-110 ease-in duration-100'
            src={logo}
            alt='logo'/>
    </Link>
  );
};